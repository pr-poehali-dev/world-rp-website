import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center animate-pulse-glow">
              <span className="text-2xl font-bold">WR</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              WORLD RP
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection('servers')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Сервера
            </button>
            <button 
              onClick={() => scrollToSection('rules')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Правила
            </button>
            <button 
              onClick={() => scrollToSection('donate')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Донат
            </button>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              Играть
            </Button>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border animate-slide-in-right">
          <nav className="flex flex-col p-4 space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection('servers')}
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Сервера
            </button>
            <button 
              onClick={() => scrollToSection('rules')}
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Правила
            </button>
            <button 
              onClick={() => scrollToSection('donate')}
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Донат
            </button>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity w-full">
              Играть
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
