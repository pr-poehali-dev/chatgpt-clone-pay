import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const plans = [
  {
    name: 'Базовый',
    price: '0',
    description: 'Для знакомства с платформой',
    features: [
      '10 сообщений в день',
      'Базовая модель AI',
      'История чатов 7 дней',
      'Email поддержка',
    ],
    popular: false,
    gradient: 'gradient-pink-orange',
  },
  {
    name: 'Про',
    price: '990',
    description: 'Для активных пользователей',
    features: [
      'Безлимитные сообщения',
      'Продвинутая модель AI',
      'Полная история чатов',
      'Приоритетная поддержка',
      'API доступ',
      'Экспорт диалогов',
    ],
    popular: true,
    gradient: 'gradient-purple-blue',
  },
  {
    name: 'Бизнес',
    price: '2990',
    description: 'Для команд и компаний',
    features: [
      'Всё из Про',
      'До 10 пользователей',
      'Кастомные модели',
      'Персональный менеджер',
      'SLA гарантии',
      'Аналитика и отчёты',
    ],
    popular: false,
    gradient: 'gradient-cyan-purple',
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-float">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Выберите свой тариф
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Начните бесплатно или выберите план для расширенных возможностей
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.popular ? 'border-primary shadow-lg' : 'border-border'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute top-4 right-4 gradient-purple-blue animate-glow">
                  Популярный
                </Badge>
              )}
              
              <div className={`h-2 ${plan.gradient}`} />

              <CardHeader className="pt-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">₽/мес</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" size={14} className="text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className={`w-full ${plan.popular ? plan.gradient : 'bg-secondary'} hover:opacity-90 transition-opacity`}
                >
                  {plan.price === '0' ? 'Начать бесплатно' : 'Оформить подписку'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Нужно больше?</p>
          <Button variant="outline" size="lg" className="gap-2">
            <Icon name="Mail" size={18} />
            Связаться с отделом продаж
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
