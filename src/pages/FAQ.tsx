import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const faqData = [
  {
    question: 'Что такое AI Chat и как это работает?',
    answer: 'AI Chat — это умный помощник на базе искусственного интеллекта, который понимает ваши вопросы и предоставляет точные ответы. Платформа использует передовые языковые модели для генерации человекоподобных ответов.',
  },
  {
    question: 'Какие данные вы собираете и как их используете?',
    answer: 'Мы собираем только необходимую информацию для работы сервиса: email, историю диалогов и настройки. Все данные зашифрованы и используются исключительно для улучшения качества ответов AI. Мы никогда не продаём ваши данные третьим лицам.',
  },
  {
    question: 'Можно ли использовать бесплатно?',
    answer: 'Да! Базовый план полностью бесплатный и включает 10 сообщений в день. Этого достаточно для знакомства с платформой. Для безлимитного доступа можно перейти на план Про.',
  },
  {
    question: 'Как отменить подписку?',
    answer: 'Отменить подписку можно в любой момент в разделе Профиль → Подписка. Доступ к платным функциям сохранится до конца оплаченного периода. После этого аккаунт автоматически перейдёт на бесплатный план.',
  },
  {
    question: 'Поддерживается ли API для разработчиков?',
    answer: 'Да! План Про включает доступ к REST API с лимитом 10,000 запросов в месяц. Полная документация доступна в личном кабинете после оформления подписки.',
  },
  {
    question: 'Какие языки поддерживает AI?',
    answer: 'AI Chat поддерживает более 50 языков, включая русский, английский, испанский, китайский и многие другие. Модель автоматически определяет язык вашего сообщения.',
  },
  {
    question: 'Как связаться с поддержкой?',
    answer: 'Пользователи бесплатного плана могут написать на support@aichat.ru. Подписчики Про получают приоритетную поддержку через чат в личном кабинете с временем ответа до 2 часов.',
  },
  {
    question: 'Можно ли экспортировать историю чатов?',
    answer: 'Да, эта функция доступна на тарифах Про и Бизнес. Вы можете экспортировать диалоги в форматах JSON, CSV или PDF. Экспорт доступен в настройках каждого чата.',
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 animate-float">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-purple-blue flex items-center justify-center animate-glow">
            <Icon name="HelpCircle" size={40} className="text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Частые вопросы
          </h1>
          <p className="text-xl text-muted-foreground">
            Всё, что нужно знать о платформе
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg gradient-purple-blue flex items-center justify-center mb-3">
                <Icon name="Book" size={24} className="text-white" />
              </div>
              <CardTitle>Документация</CardTitle>
              <CardDescription>Подробные гайды и инструкции</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full gap-2">
                Читать документацию
                <Icon name="ArrowRight" size={16} />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-secondary transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg gradient-cyan-purple flex items-center justify-center mb-3">
                <Icon name="MessageCircle" size={24} className="text-white" />
              </div>
              <CardTitle>Поддержка</CardTitle>
              <CardDescription>Свяжитесь с нашей командой</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full gap-2">
                Написать в поддержку
                <Icon name="ArrowRight" size={16} />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-accent transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg gradient-pink-orange flex items-center justify-center mb-3">
                <Icon name="Users" size={24} className="text-white" />
              </div>
              <CardTitle>Сообщество</CardTitle>
              <CardDescription>Обсудите с другими пользователями</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full gap-2">
                Присоединиться
                <Icon name="ArrowRight" size={16} />
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-2">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Не нашли ответ?</h3>
            <p className="text-muted-foreground mb-6">
              Напишите нам, и мы поможем решить любой вопрос
            </p>
            <Button size="lg" className="gradient-purple-blue hover:opacity-90 gap-2">
              <Icon name="Mail" size={20} />
              Связаться с нами
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;
