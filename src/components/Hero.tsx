import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/vivid-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="animate-float">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-vivid bg-clip-text text-transparent animate-pulse-glow">
            VIVID SYDNEY
          </h1>
          <p className="text-xl md:text-3xl mb-8 text-foreground/90 font-light">
            光影艺术 · 音乐盛宴 · 创意灵感
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <div className="flex items-center gap-2 text-foreground/80">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-lg">2024年5月24日 - 6月15日</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/80">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="text-lg">悉尼全城</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
          >
            探索活动
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-secondary text-secondary-foreground bg-background/20 backdrop-blur-sm hover:bg-secondary/20 hover:shadow-glow-cyan transition-all duration-300"
          >
            购买门票
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
