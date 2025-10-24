import { Cpu, Brain, Workflow, Database } from "lucide-react";
import botNetwork from "@/assets/bot-network.jpg";

const partners = [
  { name: "GenFarmer", icon: Cpu },
  { name: "OpenAI", icon: Brain },
  { name: "Power Automate", icon: Workflow },
  { name: "N8N", icon: Database }
];

const Technology = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-20"
        style={{
          backgroundImage: `url(${botNetwork})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Header */}
          <div className="mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-wider">
              Tecnología que impulsa tu <span className="text-primary glow-text">crecimiento</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Aliados estratégicos como <span className="text-foreground font-semibold">GenFarmer</span>, <span className="text-foreground font-semibold">OpenAI</span>, <span className="text-foreground font-semibold">Power Automate</span> y <span className="text-foreground font-semibold">N8N</span> respaldan nuestras soluciones.
            </p>
          </div>

          {/* Partners grid with glow + reflection */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="glass-card-3d p-6 rounded-xl flex flex-col items-center justify-center gap-3 hover:scale-110 transition-all duration-500 border border-primary/10 hover:border-cyan/40 group animate-fade-in relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Reflection surface effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Icon with animated glow */}
                <div className="relative z-10 group-hover:drop-shadow-[0_0_20px_rgba(0,255,255,0.6)] transition-all">
                  <partner.icon className="w-8 h-8 text-primary/70 group-hover:text-cyan transition-colors duration-500 group-hover:animate-pulse" />
                </div>
                
                <span className="text-sm font-semibold tracking-wide text-center relative z-10 group-hover:text-cyan transition-colors">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
