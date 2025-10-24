import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Tunnel light effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] animate-glow-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
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

          {/* CTA Button */}
          <Button 
            size="lg"
            className="text-xl px-12 py-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wider uppercase animate-glow-pulse group mb-16"
          >
            <Calendar className="mr-3 w-6 h-6" />
            Agendar ahora
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
