import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const DiscordWidget = () => {
  return (
    <a 
      href="https://discord.gg/c2C7yZuWDZ" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <Button 
        size="lg"
        className="bg-[#5865F2] hover:bg-[#4752C4] text-white shadow-2xl h-14 px-6 rounded-full transition-all hover:scale-110 animate-pulse-glow"
      >
        <Icon name="MessageCircle" size={24} className="mr-2" />
        <span className="font-semibold">Присоединиться к Discord</span>
      </Button>
      
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse"></div>
    </a>
  );
};

export default DiscordWidget;
