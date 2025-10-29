import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Donate = () => {
  const packages = [
    {
      name: 'Starter',
      price: '199₽',
      color: 'from-blue-500 to-cyan-500',
      popular: false,
      features: [
        '1000 игровой валюты',
        'Уникальный префикс в чате',
        'Приоритет в очереди',
        'Доступ к /vip команде'
      ]
    },
    {
      name: 'Premium',
      price: '499₽',
      color: 'from-primary to-secondary',
      popular: true,
      features: [
        '3000 игровой валюты',
        'VIP префикс в чате',
        'Высокий приоритет в очереди',
        'Доступ к VIP транспорту',
        'Уникальные скины',
        'Бонус к зарплате +50%'
      ]
    },
    {
      name: 'Elite',
      price: '999₽',
      color: 'from-yellow-500 to-orange-500',
      popular: false,
      features: [
        '7000 игровой валюты',
        'ELITE префикс в чате',
        'Максимальный приоритет',
        'Доступ ко всему VIP контенту',
        'Эксклюзивные скины',
        'Бонус к зарплате +100%',
        'Личный дом в центре',
        'Уникальная анимация'
      ]
    }
  ];

  return (
    <section id="donate" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Поддержать проект
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Приобретая донат, вы помогаете развитию сервера и получаете уникальные привилегии
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`relative bg-card/50 backdrop-blur-sm border-2 transition-all hover:scale-105 animate-fade-in ${
                pkg.popular ? 'border-primary shadow-lg shadow-primary/20' : 'border-border'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-secondary px-4 py-1 text-sm">
                    Популярный
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${pkg.color} flex items-center justify-center animate-pulse-glow`}>
                  <Icon name="Gem" size={32} />
                </div>
                <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                <CardDescription className="text-3xl font-bold text-foreground">
                  {pkg.price}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 transition-opacity`}
                >
                  Приобрести
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Icon name="CreditCard" size={24} className="text-primary" />
              Способы оплаты
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-background/50 rounded-lg p-4 border border-border text-center">
                <Icon name="Smartphone" size={32} className="mx-auto mb-2 text-primary" />
                <p className="text-sm">Карта</p>
              </div>
              <div className="bg-background/50 rounded-lg p-4 border border-border text-center">
                <Icon name="Wallet" size={32} className="mx-auto mb-2 text-secondary" />
                <p className="text-sm">QIWI</p>
              </div>
              <div className="bg-background/50 rounded-lg p-4 border border-border text-center">
                <Icon name="Coins" size={32} className="mx-auto mb-2 text-accent" />
                <p className="text-sm">Крипто</p>
              </div>
              <div className="bg-background/50 rounded-lg p-4 border border-border text-center">
                <Icon name="Globe" size={32} className="mx-auto mb-2 text-primary" />
                <p className="text-sm">PayPal</p>
              </div>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 text-center">
            <Icon name="Heart" size={40} className="mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Спасибо за поддержку!</h3>
            <p className="text-muted-foreground">
              Все средства идут на развитие и улучшение сервера. Ваша поддержка помогает нам становиться лучше!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
