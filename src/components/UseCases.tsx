import { Users, Music, Zap } from "lucide-react";

const useCases = [
  {
    icon: Users,
    title: "Políticos",
    description: "Domina la conversación y controla la narrativa pública",
    gradient: "from-primary/20 to-secondary/20"
  },
  {
    icon: Music,
    title: "Músicos",
    description: "Aumenta reproducciones, seguidores y oyentes reales en Spotify y YouTube",
    gradient: "from-secondary/20 to-accent/20"
  },
  {
    icon: Zap,
    title: "Influencers",
    description: "Escala tu comunidad y activa ingresos automáticos en redes",
    gradient: "from-accent/20 to-primary/20"
  }
];

const UseCases = () => {
  return (
    <section className="py-20 md:py-32 relative">
      {/* Radial glow background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-wider">
            Para quién es <span className="text-primary glow-text">Scaling</span>
          </h2>
        </div>

        {/* Use cases */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-50 group-hover:opacity-70 transition-opacity`} />
              
              {/* Content */}
              <div className="relative glass-card p-8 h-full flex flex-col items-center text-center border border-primary/10 group-hover:border-primary/30 transition-all">
                <div className="mb-6 p-5 bg-background/50 rounded-2xl group-hover:scale-110 transition-transform">
                  <useCase.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-wider">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
