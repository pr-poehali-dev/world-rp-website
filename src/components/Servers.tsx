import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface ServerData {
  id: number;
  name: string;
  players: number;
  maxPlayers: number;
  status: 'online' | 'offline';
  uptime: string;
}

const Servers = () => {
  const [servers, setServers] = useState<ServerData[]>([
    { id: 1, name: 'WORLD RP #1', players: 487, maxPlayers: 500, status: 'online', uptime: '99.9%' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setServers(prev => prev.map(server => ({
        ...server,
        players: Math.min(server.maxPlayers, Math.max(0, server.players + Math.floor(Math.random() * 20 - 8)))
      })));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="servers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Наши сервера
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Выберите сервер и начните свое приключение. Статистика обновляется в реальном времени
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
          {servers.map((server, index) => {
            const percentage = (server.players / server.maxPlayers) * 100;
            
            return (
              <Card 
                key={server.id} 
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl">{server.name}</CardTitle>
                    <Badge 
                      variant={server.status === 'online' ? 'default' : 'destructive'}
                      className={server.status === 'online' ? 'bg-green-500 animate-pulse' : ''}
                    >
                      {server.status === 'online' ? 'Онлайн' : 'Оффлайн'}
                    </Badge>
                  </div>
                  <CardDescription>Uptime: {server.uptime}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Игроки</span>
                      <span className="text-sm font-semibold">
                        {server.players} / {server.maxPlayers}
                      </span>
                    </div>
                    <Progress value={percentage} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-background/50 rounded-lg p-3 border border-border">
                      <Icon name="Users" size={20} className="text-primary mb-1" />
                      <p className="text-xs text-muted-foreground">Онлайн</p>
                      <p className="text-lg font-bold">{server.players}</p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3 border border-border">
                      <Icon name="Clock" size={20} className="text-secondary mb-1" />
                      <p className="text-xs text-muted-foreground">Аптайм</p>
                      <p className="text-lg font-bold">{server.uptime}</p>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                    disabled={server.status === 'offline'}
                  >
                    <Icon name="Play" size={18} className="mr-2" />
                    Подключиться
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Общий онлайн: <span className="text-primary font-bold text-lg">
              {servers.reduce((sum, s) => sum + s.players, 0)} игроков
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Servers;