import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Enhanced tunnel light effect with multiple layers */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[400px] h-[400px] bg-primary/25 rounded-full blur-[100px] animate-tunnel" />
        <div className="absolute w-[600px] h-[600px] bg-cyan/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[140px]" />
      </div>

      {/* Radial light beams */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-px h-1/2 bg-gradient-to-b from-cyan/40 to-transparent origin-top"
            style={{
              transform: `rotate(${i * 45}deg) translateY(-50%)`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-wider glow-text">
            Agenda tu llamada gratuita con <span className="text-primary">Scaling</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Te mostraremos cómo convertir la automatización en influencia
          </p>

          {/* CTA Button with tunnel effect */}
          <Button 
            size="lg"
            className="relative text-xl px-12 py-8 bg-primary hover:bg-cyan text-primary-foreground font-bold tracking-wider uppercase animate-tunnel group mb-16 overflow-hidden shadow-[0_0_50px_rgba(0,191,255,0.5)]"
          >
            <span className="relative z-10 flex items-center">
              <Calendar className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
              Agendar ahora
            </span>
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan via-primary to-cyan bg-[length:200%_100%] animate-shimmer opacity-40" />
          </Button>

          {/* Brand tagline */}
          <div className="pt-12 border-t border-primary/20">
            <p className="text-lg md:text-xl text-muted-foreground italic">
              "Scaling — donde la automatización se vuelve <span className="text-primary font-semibold not-italic">poder digital</span>."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
