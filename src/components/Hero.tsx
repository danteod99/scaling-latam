import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0" />
      
      {/* Radial glow effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center animate-fade-in-up">
        {/* Logo */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-[0.3em] text-foreground">
            SCALING
          </h2>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glow-text uppercase leading-tight max-w-5xl mx-auto">
          DOMINA EL ALGORITMO CON <span className="text-primary">GRANJAS DE BOTS INTELIGENTES</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Automatiza tu crecimiento, multiplica tu alcance y conquista la atención digital
        </p>

        {/* CTA Button */}
        <Button 
          size="lg"
          className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wider uppercase animate-glow-pulse group"
        >
          Agenda una llamada
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>

        {/* Floating particles decoration */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
};

export default Hero;
