import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image optimizado */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-0" />

      {/* Radial glows optimizados - blur reducido */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan/15 rounded-full blur-[60px] animate-pulse" />
      </div>

      {/* Particulas reducidas a 5 */}
      <div className="absolute inset-0 z-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-particle-float"
            style={{
              left: `${(i * 20)}%`,
              top: `${(i * 18)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      {/* Energy lines */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center animate-fade-in-up pt-20">
        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glow-text-double uppercase leading-tight max-w-5xl mx-auto animate-glow-dynamic" style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}>
          DOMINA EL ALGORITMO CON <span className="text-primary font-bold">GRANJAS DE BOTS INTELIGENTES</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-white mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Automatiza tu crecimiento, multiplica tu alcance y conquista la atención digital
        </p>

        {/* CTA Button with LED effect */}
        <a href="/agendar">
          <Button 
            size="lg"
            className="relative text-lg px-8 py-7 bg-primary hover:bg-cyan text-primary-foreground font-bold tracking-wider uppercase animate-halo group overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Agenda una llamada
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />
          </Button>
        </a>

        {/* Floating particles decoration */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-particle-float" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-cyan rounded-full animate-particle-float" style={{ animationDelay: '0.5s' }} />
      </div>
    </section>
  );
};

export default Hero;
