import genfarmerLogo from "@/assets/genfarmer-logo.jpg";
import n8nLogo from "@/assets/n8n-logo.jpg";
import shopifyLogo from "@/assets/shopify-logo-new.jpg";
import grapheneosLogo from "@/assets/grapheneos-logo-new.jpg";

const partners = [
  { name: "Genfarmer", logo: genfarmerLogo },
  { name: "N8N", logo: n8nLogo },
  { name: "Shopify", logo: shopifyLogo },
  { name: "GrapheneOS", logo: grapheneosLogo }
];

const Technology = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Gradient background with grain effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-cyan/10" />
      <div className="absolute inset-0 opacity-[0.15]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header centrado */}
          <div className="mb-12 animate-fade-in text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-wider" style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}>
              Tecnología que impulsa tu <span className="text-primary glow-text">crecimiento</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Aliados estratégicos como <span className="text-foreground font-semibold">Genfarmer</span>, <span className="text-foreground font-semibold">N8N</span>, <span className="text-foreground font-semibold">Shopify</span> y <span className="text-foreground font-semibold">GrapheneOS</span> respaldan nuestras soluciones.
            </p>
          </div>

          {/* Partners grid - 2x2 centrado */}
          <div className="grid grid-cols-2 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl flex flex-col items-center justify-center gap-4 hover:scale-105 transition-all duration-500 border border-primary/10 hover:border-cyan/40 group animate-fade-in relative overflow-hidden shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 w-24 h-24 flex items-center justify-center group-hover:drop-shadow-[0_0_20px_rgba(0,255,255,0.6)] transition-all">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <span className="text-sm font-semibold tracking-wide text-center relative z-10 group-hover:text-cyan transition-colors" style={{ color: '#1e3a8a' }}>
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
