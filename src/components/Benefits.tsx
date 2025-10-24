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
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-wider">
            Crecimiento sin límites. <span className="text-primary glow-text">Resultados sin esfuerzo.</span>
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 animate-fade-in border border-primary/20 hover:border-primary/50 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6 inline-block p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-wide">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
