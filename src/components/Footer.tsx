import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">WR</span>
              </div>
              <span className="text-xl font-bold">WORLD RP</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Лучший ролевой проект. Создай свою историю в мире безграничных возможностей.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#home" className="hover:text-primary transition-colors">Главная</a></li>
              <li><a href="#servers" className="hover:text-primary transition-colors">Сервера</a></li>
              <li><a href="#rules" className="hover:text-primary transition-colors">Правила</a></li>
              <li><a href="#donate" className="hover:text-primary transition-colors">Донат</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Помощь</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Поддержка</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Форум</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Wiki</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Социальные сети</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-background rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Icon name="MessageCircle" size={20} className="text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-background rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Icon name="Send" size={20} className="text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-background rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Icon name="Youtube" size={20} className="text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 WORLD RP. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
