import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Profile = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <Card className="overflow-hidden border-2">
          <div className="h-32 gradient-purple-blue relative">
            <div className="absolute -bottom-16 left-8">
              <Avatar className="w-32 h-32 border-4 border-background">
                <AvatarImage src="/img/8c100864-7dc0-44be-a960-4e30acaf26a4.jpg" />
                <AvatarFallback>ИИ</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <CardHeader className="pt-20 pb-6">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-3xl">Иван Петров</CardTitle>
                <CardDescription className="text-base mt-1">ivan.petrov@example.com</CardDescription>
                <div className="flex gap-2 mt-3">
                  <Badge className="gradient-purple-blue">Про подписка</Badge>
                  <Badge variant="outline">Активен с марта 2024</Badge>
                </div>
              </div>
              <Button variant="outline" className="gap-2">
                <Icon name="Settings" size={16} />
                Редактировать
              </Button>
            </div>
          </CardHeader>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="MessageSquare" size={20} />
                Статистика использования
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Сообщений отправлено</span>
                  <span className="text-sm font-semibold">1,247 / ∞</span>
                </div>
                <Progress value={100} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">API запросов</span>
                  <span className="text-sm font-semibold">3,456 / 10,000</span>
                </div>
                <Progress value={34.56} className="h-2" />
              </div>

              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="bg-muted rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">127</div>
                  <div className="text-xs text-muted-foreground mt-1">Диалогов</div>
                </div>
                <div className="bg-muted rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">45ч</div>
                  <div className="text-xs text-muted-foreground mt-1">Сэкономлено</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="CreditCard" size={20} />
                Подписка и оплата
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">План Про</span>
                  <span className="text-2xl font-bold">990₽</span>
                </div>
                <p className="text-sm text-muted-foreground">Следующее списание: 15 октября 2024</p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span>Автоматическое продление включено</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span>Безлимитные сообщения</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span>Приоритетная поддержка</span>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button variant="outline" className="flex-1">
                  Изменить план
                </Button>
                <Button variant="outline" className="flex-1">
                  История платежей
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Trophy" size={20} />
                Достижения
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: 'Sparkles', title: 'Первый шаг', desc: 'Отправил первое сообщение', unlocked: true },
                  { icon: 'Zap', title: 'Активист', desc: '100+ сообщений', unlocked: true },
                  { icon: 'Flame', title: 'Энтузиаст', desc: '7 дней подряд', unlocked: true },
                  { icon: 'Crown', title: 'Мастер', desc: '1000+ сообщений', unlocked: false },
                ].map((achievement, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-lg border text-center transition-all ${
                      achievement.unlocked
                        ? 'bg-primary/10 border-primary hover:scale-105'
                        : 'bg-muted border-border opacity-50'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center ${
                        achievement.unlocked ? 'gradient-purple-blue' : 'bg-muted-foreground/20'
                      }`}
                    >
                      <Icon name={achievement.icon as any} size={24} className="text-white" />
                    </div>
                    <div className="font-semibold text-sm">{achievement.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{achievement.desc}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
