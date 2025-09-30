import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/img/4d3eee22-11c0-4ed8-905e-0742c67e196a.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-float">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              AI Chat
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ваш умный помощник для решения любых задач. Быстрые ответы, безграничные возможности.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="gradient-purple-blue hover:opacity-90 animate-glow gap-2" asChild>
                <Link to="/chat">
                  <Icon name="MessageSquare" size={20} />
                  Начать чат
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link to="/pricing">
                  <Icon name="Zap" size={20} />
                  Посмотреть тарифы
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас?</h2>
          <p className="text-xl text-muted-foreground">Передовые технологии для ваших задач</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: 'Sparkles',
              title: 'Умный AI',
              description: 'Продвинутые модели машинного обучения для точных и релевантных ответов',
              gradient: 'gradient-purple-blue',
            },
            {
              icon: 'Zap',
              title: 'Мгновенные ответы',
              description: 'Получайте ответы в режиме реального времени без задержек',
              gradient: 'gradient-cyan-purple',
            },
            {
              icon: 'Shield',
              title: 'Безопасность',
              description: 'Ваши данные под надёжной защитой с end-to-end шифрованием',
              gradient: 'gradient-pink-orange',
            },
          ].map((feature, index) => (
            <Card key={index} className="border-2 hover:scale-105 transition-transform">
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl ${feature.gradient} flex items-center justify-center mb-4 animate-glow`}>
                  <Icon name={feature.icon as any} size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl">{feature.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Возможности платформы</h2>
              <p className="text-xl text-muted-foreground">Всё что нужно для продуктивной работы</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: 'MessageSquare', title: 'Естественный диалог', desc: 'Общайтесь как с человеком' },
                { icon: 'Globe', title: 'Поддержка 50+ языков', desc: 'Работаем со всем миром' },
                { icon: 'FileText', title: 'Экспорт диалогов', desc: 'Сохраняйте важные беседы' },
                { icon: 'Code', title: 'API для разработчиков', desc: 'Интегрируйте в свои проекты' },
                { icon: 'TrendingUp', title: 'Аналитика использования', desc: 'Отслеживайте статистику' },
                { icon: 'Users', title: 'Командная работа', desc: 'Совместный доступ для команд' },
              ].map((item, index) => (
                <Card key={index} className="hover:border-primary transition-colors">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-2 overflow-hidden">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Готовы начать?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Присоединяйтесь к тысячам пользователей, которые уже используют AI Chat
            </p>
            <Button size="lg" className="gradient-purple-blue hover:opacity-90 animate-glow gap-2" asChild>
              <Link to="/chat">
                <Icon name="Rocket" size={20} />
                Начать бесплатно
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <footer className="border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full gradient-purple-blue flex items-center justify-center">
                <Icon name="Bot" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold">AI Chat</span>
            </div>

            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link to="/faq" className="hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link to="/pricing" className="hover:text-primary transition-colors">
                Тарифы
              </Link>
              <Link to="/profile" className="hover:text-primary transition-colors">
                Профиль
              </Link>
              <Link to="/settings" className="hover:text-primary transition-colors">
                Настройки
              </Link>
            </div>

            <div className="text-sm text-muted-foreground">
              © 2024 AI Chat. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
