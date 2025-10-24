import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-32 relative" id="aprende">
      {/* Tunnel light effect background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-primary/10 rounded-full blur-[180px] animate-tunnel" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 uppercase tracking-wider glow-text-double" style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}>
            Agenda tu llamada gratuita con Scaling
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Te mostraremos cómo convertir la automatización en influencia
          </p>

          <a href="#agendar">
            <Button
              size="lg"
              className="relative text-lg px-10 py-7 bg-primary hover:bg-cyan text-primary-foreground font-bold tracking-wider uppercase animate-halo group overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Agendar ahora
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />
            </Button>
          </a>

          {/* Brand tagline */}
          <div className="mt-20 pt-10 border-t border-primary/20">
            <p className="text-sm md:text-base text-muted-foreground uppercase tracking-[0.2em]">
              <span className="text-foreground font-bold">SCALING</span> — donde la automatización se vuelve poder digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
