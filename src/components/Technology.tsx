import firefoxLogo from "@/assets/firefox-logo.jpg";
import lineageosLogo from "@/assets/lineageos-logo.jpg";
import shopifyLogo from "@/assets/shopify-logo.jpg";
import grapheneosLogo from "@/assets/grapheneos-logo.jpg";

const partners = [
  { name: "Firefox", logo: firefoxLogo },
  { name: "LineageOS", logo: lineageosLogo },
  { name: "Shopify", logo: shopifyLogo },
  { name: "GrapheneOS", logo: grapheneosLogo }
];

const Technology = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <iframe 
          src='https://my.spline.design/contralogo-AZr7JLF96MujQzuVlcI583kE/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
          title="3D Technology Background"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Header */}
          <div className="mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-wider" style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}>
              Tecnología que impulsa tu <span className="text-primary glow-text">crecimiento</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Aliados estratégicos como <span className="text-foreground font-semibold">Firefox</span>, <span className="text-foreground font-semibold">LineageOS</span>, <span className="text-foreground font-semibold">Shopify</span> y <span className="text-foreground font-semibold">GrapheneOS</span> respaldan nuestras soluciones.
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
                
                {/* Logo with animated glow */}
                <div className="relative z-10 w-16 h-16 flex items-center justify-center group-hover:drop-shadow-[0_0_20px_rgba(0,255,255,0.6)] transition-all">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
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
