import { Rocket, Bot, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: Rocket,
    title: "Presencia viral",
    description: "Bots que impulsan visibilidad orgánica en todas las redes"
  },
  {
    icon: Bot,
    title: "Automatización inteligente",
    description: "Control total de interacción, engagement y seguidores"
  },
  {
    icon: DollarSign,
    title: "Rentabilidad constante",
    description: "Convierte atención en ingresos sin depender del algoritmo"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in" id="servicios">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-wider" style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}>
            Crecimiento sin límites. <span className="text-primary glow-text">Resultados sin esfuerzo.</span>
          </h2>
        </div>

        {/* Benefits grid with 3D cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-card-3d p-8 rounded-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 animate-fade-in border border-primary/20 hover:border-cyan/50 group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Bottom light effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent group-hover:via-cyan/70 transition-all" />
              
              {/* Icon with glow */}
              <div className="mb-6 inline-block p-4 bg-primary/10 rounded-xl group-hover:bg-cyan/20 transition-all group-hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] relative z-10">
                <benefit.icon className="w-8 h-8 text-primary group-hover:text-cyan transition-colors animate-pulse" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-wide relative z-10">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
