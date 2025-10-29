import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Servers from '@/components/Servers';
import Rules from '@/components/Rules';
import Donate from '@/components/Donate';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Servers />
      <Rules />
      <Donate />
      <Footer />
    </div>
  );
};

export default Index;
