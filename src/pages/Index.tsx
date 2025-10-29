import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Servers from '@/components/Servers';
import Rules from '@/components/Rules';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Servers />
      <Rules />
      <Footer />
    </div>
  );
};

export default Index;