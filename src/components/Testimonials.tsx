import { TrendingUp, Users, Eye } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "+300%",
    label: "de alcance en 7 días",
    color: "text-primary"
  },
  {
    icon: Users,
    value: "10K → 100K",
    label: "seguidores en 30 días",
    color: "text-secondary"
  },
  {
    icon: Eye,
    value: "+500%",
    label: "vistas en reels",
    color: "text-accent"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 relative">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-wider">
            Resultados <span className="text-primary glow-text">reales</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Casos verificados de crecimiento exponencial
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 border border-primary/20 hover:border-primary/50 animate-fade-in relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="mb-4 inline-block p-4 bg-background/50 rounded-xl">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-4xl md:text-5xl font-bold mb-3 ${stat.color} glow-text`}>
                  {stat.value}
                </div>
                <p className="text-muted-foreground uppercase tracking-wide text-sm">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
