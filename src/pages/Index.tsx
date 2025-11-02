import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import EventInfo from "@/components/EventInfo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Highlights />
      <EventInfo />
      <Footer />
    </div>
  );
};

export default Index;
