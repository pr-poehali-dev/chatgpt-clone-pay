import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useNavigate } from 'react-router-dom';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const Chat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Привет! Я AI-ассистент. Чем могу помочь?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');
    if (!isAuth) {
      navigate('/auth');
    }
  }, [navigate]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    const allMessages = [...messages, userMessage];
    setMessages(allMessages);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('https://functions.poehali.dev/9b208be1-9e24-4eae-831f-7712b144da6c', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: allMessages.map(m => ({ role: m.role, content: m.content })),
          model: 'gpt-3.5-turbo',
          temperature: 0.7,
        }),
      });

      const data = await response.json();

      if (response.ok && data.message) {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.message,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.error || 'Произошла ошибка. Попробуйте позже.',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorMessage]);
      }
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Не удалось подключиться к серверу. Проверьте интернет-соединение.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <div className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/')}
              className="hover:bg-primary/10"
            >
              <Icon name="ArrowLeft" size={20} />
            </Button>
            <div className="w-10 h-10 rounded-full gradient-purple-blue flex items-center justify-center animate-glow">
              <Icon name="Sparkles" size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">AI Chat</h1>
              <p className="text-sm text-muted-foreground">Всегда на связи</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              localStorage.removeItem('isAuthenticated');
              navigate('/auth');
            }}
            className="gap-2"
          >
            <Icon name="LogOut" size={16} />
            Выйти
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1 container mx-auto px-4">
        <div className="max-w-3xl mx-auto py-8 space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-4 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <Avatar className="w-10 h-10">
                {message.role === 'assistant' ? (
                  <div className="w-full h-full gradient-purple-blue flex items-center justify-center">
                    <Icon name="Bot" size={20} className="text-white" />
                  </div>
                ) : (
                  <>
                    <AvatarImage src="/img/8c100864-7dc0-44be-a960-4e30acaf26a4.jpg" />
                    <AvatarFallback>U</AvatarFallback>
                  </>
                )}
              </Avatar>
              <div
                className={`flex-1 max-w-[70%] ${
                  message.role === 'user' ? 'text-right' : ''
                }`}
              >
                <div
                  className={`inline-block px-4 py-3 rounded-2xl ${
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card border border-border'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
                <p className="text-xs text-muted-foreground mt-1 px-1">
                  {message.timestamp.toLocaleTimeString('ru-RU', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-4">
              <Avatar className="w-10 h-10">
                <div className="w-full h-full gradient-purple-blue flex items-center justify-center">
                  <Icon name="Bot" size={20} className="text-white" />
                </div>
              </Avatar>
              <div className="bg-card border border-border px-4 py-3 rounded-2xl">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-3xl mx-auto flex gap-3">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Напишите сообщение..."
              className="flex-1 bg-background border-border"
            />
            <Button
              onClick={handleSend}
              className="gradient-purple-blue hover:opacity-90 transition-opacity"
              disabled={!input.trim()}
            >
              <Icon name="Send" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;