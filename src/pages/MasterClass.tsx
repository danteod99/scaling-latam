import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import masterclassHero from "@/assets/masterclass-hero.jpg";

const EVENT_DATE = new Date("2026-02-19T21:00:00-05:00"); // Lima time

const learningTopics = [
  {
    title: "Qué es una Granja de Bots y cómo funciona en 2026",
    description: "Entiende la infraestructura real detrás de las bot farms: dispositivos, software, proxies y cómo generan interacciones orgánicas a escala.",
  },
  {
    title: "Cómo generar $9,700+ mensuales con el sistema BoxPhoneFarms",
    description: "El modelo de negocio paso a paso que usan nuestros clientes para monetizar granjas de bots en múltiples plataformas sociales.",
  },
  {
    title: "Automatización inteligente sin riesgo de baneos",
    description: "Las técnicas avanzadas para simular comportamiento humano real, rotar IPs y evitar la detección algorítmica de las plataformas.",
  },
  {
    title: "Estrategias para políticos, músicos e influencers",
    description: "Casos de uso específicos: cómo amplificar campañas políticas, impulsar streams en Spotify y escalar seguidores orgánicamente.",
  },
  {
    title: "La tecnología detrás: GrapheneOS, n8n y proxies residenciales",
    description: "El stack tecnológico profesional que diferencia una granja de bots amateur de una operación rentable y escalable.",
  },
  {
    title: "Cómo escalar de 10 a 500+ dispositivos",
    description: "El roadmap completo para crecer tu operación: inversión inicial, ROI esperado, infraestructura y automatización avanzada.",
  },
];

const useCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, targetDate.getTime() - Date.now());
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
};

const CountdownCircle = ({ value, label }: { value: number; label: string }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const maxVal = label === "DÍAS" ? 30 : label === "HORAS" ? 24 : 60;
  const progress = (value / maxVal) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20 md:w-24 md:h-24">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={radius} fill="none" stroke="hsl(var(--muted))" strokeWidth="4" />
          <circle
            cx="50" cy="50" r={radius} fill="none"
            stroke="hsl(45 100% 55%)" strokeWidth="4" strokeLinecap="round"
            strokeDasharray={circumference} strokeDashoffset={circumference - progress}
            className="transition-all duration-1000"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xs text-muted-foreground uppercase tracking-wider">{label}</span>
          <span className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            {value}
          </span>
        </div>
      </div>
    </div>
  );
};

const MasterClass = () => {
  const countdown = useCountdown(EVENT_DATE);

  const handleClick = () => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Subscribe');
    }
    window.open("https://scaling.short.gy/Kuscij", "_blank");
  };

  const RegistrationButton = () => (
    <div className="w-full max-w-2xl mx-auto">
      <button
        onClick={handleClick}
        className="w-full h-14 rounded-lg text-lg font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02]"
        style={{
          background: "linear-gradient(135deg, hsl(45 100% 55%), hsl(40 100% 50%))",
          color: "hsl(0 0% 0%)",
          boxShadow: "0 4px 20px hsl(45 100% 55% / 0.4)",
        }}
      >
        APUNTARME GRATIS &gt;&gt;
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Top Banner */}
      <div
        className="fixed top-20 left-0 right-0 z-40 py-2 text-center text-sm md:text-base font-bold tracking-wider"
        style={{
          background: "linear-gradient(135deg, hsl(45 100% 55%), hsl(40 100% 50%))",
          color: "hsl(0 0% 0%)",
        }}
      >
        🔥 MASTERCLASS GRATUITA / 90 minutos EN VIVO — Cupos limitados 19 de febrero — 9:00 PM (hora Perú) 🇵🇪
      </div>

      {/* Hero Section */}
      <section className="pt-44 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
            <div>
              <h1
                className="text-3xl md:text-5xl leading-tight mb-6"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
              >
                Aprende el sistema de{" "}
                <span className="text-primary">Granjas de Bots</span> que genera{" "}
                <span className="text-primary">$9,700+ mensuales</span> en 2026.
              </h1>
              <p className="text-primary text-xl md:text-2xl font-bold mb-4">
                ↓ ¡Regístrate a la MasterClass! ↓
              </p>
              <div className="flex items-center gap-4 text-3xl md:text-5xl font-bold" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                <span className="text-4xl">☑️</span>
                <span>19 FEB | 9 PM</span>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
              <img src={masterclassHero} alt="Granja de bots profesional" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Registration Form */}
          <RegistrationButton />
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary text-xl md:text-2xl font-bold max-w-4xl mx-auto leading-relaxed">
            El sistema para dejar de improvisar, escalar tu presencia en redes sociales y convertir bots en una máquina de ingresos.
          </p>
          <p className="text-foreground text-lg mt-6">
            Esto es lo que aprenderás en los 90 minutos EN VIVO:
          </p>
        </div>
      </section>

      {/* Learning Topics Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {learningTopics.map((topic, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <div className="bg-primary/90 py-3 px-4 text-center">
                  <span className="text-primary-foreground font-bold uppercase tracking-wider text-sm italic">
                    ¿QUÉ VAS A APRENDER?
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3 leading-snug" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {topic.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {topic.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <span>19 de FEBRERO de 2026</span>
                    <span className="flex items-center gap-1 text-destructive font-bold">
                      <span className="w-2 h-2 rounded-full bg-destructive inline-block animate-pulse" />
                      LIVE
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-3xl md:text-4xl text-primary mb-2"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
          >
            Faltan pocos días para iniciar el evento.
          </h2>
          <p className="text-muted-foreground mb-10 text-sm">
            (contador hasta el jueves 19 de febrero a las 9pm hora Perú 🇵🇪)
          </p>

          <div className="flex justify-center gap-6 md:gap-10 mb-16">
            <CountdownCircle value={countdown.days} label="DÍAS" />
            <CountdownCircle value={countdown.hours} label="HORAS" />
            <CountdownCircle value={countdown.minutes} label="MINUTOS" />
            <CountdownCircle value={countdown.seconds} label="SEGUNDOS" />
          </div>

          {/* Second Registration */}
          <div className="glass-card-3d rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              <span className="text-primary">Regístrate completando la siguiente información</span>{" "}
              y asegura tu lugar para aprender exactamente el sistema de{" "}
              <span className="text-primary">Granjas de Bots</span> diseñado para{" "}
              <span className="text-primary">generar ingresos en 2026</span>, dejando de improvisar y convirtiendo la automatización en un negocio real.
            </p>
            <RegistrationButton />
          </div>
        </div>
      </section>

      {/* About / Why Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl md:text-4xl text-center mb-8"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              ¿Por qué <span className="text-primary">SCALING</span>?
            </h2>
            <div className="glass-card rounded-2xl p-8 md:p-10 space-y-4">
              {[
                "Más de 50 clientes activos generando ingresos con granjas de bots",
                "Sistema probado BoxPhoneFarms con ROI documentado de $9,700+/mes",
                "Tecnología de punta: GrapheneOS, n8n, proxies residenciales",
                "Soporte técnico y comunidad exclusiva de operadores",
                "Casos de éxito en política, música, e-commerce e influencers",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MasterClass;
