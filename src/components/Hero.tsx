import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src='https://my.spline.design/holographiclogofogreveal-AwG26Az2DhT9CkqhYNHgc3Te/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
          title="3D Background Animation"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background z-0" />
      
      {/* Multi-layer 3D radial glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/15 rounded-full blur-[150px] animate-glow-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px]" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-particle-float"
            style={{
              left: `${(i * 8.33)}%`,
              top: `${(i * 7.5)}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      {/* Floating energy lines */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center animate-fade-in-up pt-20">
        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glow-text-double uppercase leading-tight max-w-5xl mx-auto animate-glow-dynamic" style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}>
          DOMINA EL ALGORITMO CON <span className="text-primary drop-shadow-[0_0_25px_rgba(0,191,255,0.8)]">GRANJAS DE BOTS INTELIGENTES</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Automatiza tu crecimiento, multiplica tu alcance y conquista la atención digital
        </p>

        {/* CTA Button with LED effect */}
        <a href="#agendar">
          <Button 
            size="lg"
            className="relative text-lg px-8 py-6 bg-primary hover:bg-cyan text-primary-foreground font-bold tracking-wider uppercase animate-halo group overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Agenda una llamada
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />
          </Button>
        </a>

        {/* Enhanced floating particles decoration */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-particle-float shadow-[0_0_10px_rgba(0,191,255,0.8)]" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-cyan rounded-full animate-particle-float shadow-[0_0_12px_rgba(0,255,255,0.8)]" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-secondary rounded-full animate-particle-float shadow-[0_0_10px_rgba(30,144,255,0.6)]" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-cyan rounded-full animate-particle-float shadow-[0_0_8px_rgba(0,255,255,0.7)]" style={{ animationDelay: '1.5s' }} />
      </div>
    </section>
  );
};

export default Hero;
