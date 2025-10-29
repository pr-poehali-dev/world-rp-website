import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const [onlinePlayers, setOnlinePlayers] = useState(1247);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlinePlayers(prev => prev + Math.floor(Math.random() * 10 - 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img 
          src="https://cdn.poehali.dev/projects/fcc57670-5d96-439e-b06e-908482e80b37/files/8cbb62d1-1395-4998-ae0e-0082571c0b7d.jpg"
          alt="WORLD RP Gaming Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/80"></div>
      </div>
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            WORLD RP
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Погрузись в уникальный мир ролевой игры. Создай свою историю, стань легендой!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8">
              <Icon name="Play" size={20} className="mr-2" />
              Начать играть
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8">
              <Icon name="Info" size={20} className="mr-2" />
              Подробнее
            </Button>
          </div>

          <div className="inline-flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3 animate-pulse-glow">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-lg font-semibold">
              {onlinePlayers} игроков онлайн
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:scale-105">
              <Icon name="Users" size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2">5000+</h3>
              <p className="text-muted-foreground">Активных игроков</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-secondary/50 transition-all hover:scale-105">
              <Icon name="Server" size={40} className="mx-auto mb-4 text-secondary" />
              <h3 className="text-2xl font-bold mb-2">3</h3>
              <p className="text-muted-foreground">Игровых сервера</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-accent/50 transition-all hover:scale-105">
              <Icon name="Trophy" size={40} className="mx-auto mb-4 text-accent" />
              <h3 className="text-2xl font-bold mb-2">24/7</h3>
              <p className="text-muted-foreground">Стабильная работа</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;