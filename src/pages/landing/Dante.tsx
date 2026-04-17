import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  Smartphone,
  DollarSign,
  Users,
  Zap,
  Shield,
  CheckCircle,
  Star,
  TrendingUp,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import danteSolo from "@/assets/dante-solo.jpg";
import danteTeam from "@/assets/dante-team.png";
import resultado6 from "@/assets/resultado-6.png";
import resultado7 from "@/assets/resultado-7.png";
import resultado8 from "@/assets/resultado-8.png";

const AGENDAR_URL =
  "https://calendly.com/d/3tr-69b-hqj/asesoria-1-a-1-granja-de-bots";
const QUIZ_URL = "/quiz";

const LandingDante = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ═══ HERO — Dante como protagonista ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 rounded-full blur-[150px] animate-glow-pulse" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 z-10 pt-28 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium tracking-wider uppercase text-primary">
                  Fundador de Scaling LATAM
                </span>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 uppercase leading-tight glow-text-double animate-glow-dynamic"
                style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
              >
                Yo genero{" "}
                <span className="text-primary">+$10,000/mes</span> con granjas
                de bots.{" "}
                <span className="text-cyan">Tú también puedes.</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed max-w-xl">
                Soy Dante Oliveros. Construí un sistema automatizado de granjas
                de bots que genera ingresos 24/7 en YouTube, TikTok, Spotify y
                Facebook.
              </p>

              <p className="text-base text-white mb-8 max-w-xl font-medium">
                Ahora te enseño paso a paso cómo montar tu propia granja desde
                cero — sin experiencia previa, sin mostrar tu cara, con
                dispositivos accesibles.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={AGENDAR_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="relative text-lg px-8 py-7 bg-primary hover:bg-cyan text-primary-foreground font-bold tracking-wider uppercase animate-halo group overflow-hidden w-full sm:w-auto"
                  >
                    <span className="relative z-10 flex items-center">
                      Agendar Asesoría 1:1
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />
                  </Button>
                </a>
                <a href={QUIZ_URL}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-7 border-primary/30 hover:bg-primary/10 font-bold tracking-wider uppercase w-full sm:w-auto"
                  >
                    <Play className="mr-2 w-5 h-5" />
                    Diseña Tu Granja
                  </Button>
                </a>
              </div>

              {/* Mini stats */}
              <div className="flex gap-8 mt-10">
                {[
                  { value: "+500", label: "alumnos" },
                  { value: "$10K+", label: "promedio/mes" },
                  { value: "4", label: "plataformas" },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="text-2xl font-bold text-primary glow-text">
                      {s.value}
                    </p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Photo */}
            <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-[0_0_60px_rgba(0,122,191,0.15)]">
                <img
                  src={danteSolo}
                  alt="Dante Oliveros — Fundador de Scaling LATAM"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                {/* Name tag */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card-3d rounded-xl p-4 border border-cyan/30">
                    <p
                      className="text-xl font-bold uppercase tracking-wider"
                      style={{
                        fontFamily: "'Bebas Neue', 'Anton', sans-serif",
                      }}
                    >
                      Dante Oliveros
                    </p>
                    <p className="text-sm text-cyan">
                      CEO & Fundador · Scaling LATAM
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating card — revenue */}
              <div className="absolute -top-4 -right-4 glass-card-3d rounded-xl p-3 border border-cyan/30 animate-float hidden md:block">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-xs text-muted-foreground">Revenue/mes</p>
                    <p className="text-lg font-bold text-green-400">$15,942</p>
                  </div>
                </div>
              </div>

              {/* Floating card — devices */}
              <div className="absolute -bottom-4 -left-4 glass-card-3d rounded-xl p-3 border border-primary/30 animate-float hidden md:block" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Dispositivos</p>
                    <p className="text-lg font-bold text-white">50+ activos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ QUÉ VAS A APRENDER ═══ */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-wider"
              style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
            >
              Qué vas a <span className="text-primary glow-text">lograr</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              El sistema completo para generar ingresos con granjas de bots
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Smartphone,
                title: "Tu Granja Operativa",
                desc: "Monta tu granja con dispositivos Samsung desde $50. Te enseño qué comprar, cómo configurar y optimizar cada equipo.",
              },
              {
                icon: Play,
                title: "Contenido Automatizado",
                desc: "Genera videos, shorts y reels con IA sin mostrar tu cara. Contenido que se publica solo y genera views 24/7.",
              },
              {
                icon: DollarSign,
                title: "Monetización Real",
                desc: "AdSense, Creator Fund, Spotify royalties, Facebook in-stream. Múltiples fuentes de ingreso desde el día 1.",
              },
              {
                icon: Users,
                title: "Escalamiento",
                desc: "Pasa de 5 a 50+ cuentas con sistemas probados. Cada cuenta nueva es un canal de ingresos adicional.",
              },
              {
                icon: Shield,
                title: "Seguridad Anti-Ban",
                desc: "Técnicas avanzadas para mantener tus cuentas seguras. Proxies, fingerprinting y rotación de identidades.",
              },
              {
                icon: Zap,
                title: "Automatización Total",
                desc: "Software propio + IA para que tu granja trabaje mientras duermes. Solo supervisas métricas.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-card-3d rounded-2xl p-6 border border-primary/20 hover:border-cyan/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-cyan/60 to-transparent group-hover:via-cyan/90 transition-all shadow-[0_0_15px_rgba(0,122,191,0.5)]" />
                <div className="p-3 bg-primary/10 rounded-xl inline-block mb-4 group-hover:shadow-[0_0_25px_rgba(0,122,191,0.4)] transition-all">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3
                  className="text-lg font-bold uppercase tracking-wider mb-2"
                  style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SOBRE DANTE ═══ */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Photo */}
            <div className="animate-fade-in">
              <div className="rounded-2xl overflow-hidden border border-primary/20">
                <img
                  src={danteTeam}
                  alt="Dante y su equipo"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2
                className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-wider"
                style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
              >
                ¿Por qué{" "}
                <span className="text-primary glow-text">confiar en mí?</span>
              </h2>

              <div className="space-y-4 mb-8">
                {[
                  "Más de 2 años operando granjas de bots rentables",
                  "LLC registrada en Estados Unidos (Wyoming)",
                  "+500 alumnos en LATAM generando ingresos",
                  "Sistema propio de automatización con IA",
                  "Resultados verificables — no teoría, práctica real",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-white font-medium mb-8 leading-relaxed">
                No soy un gurú que vende cursos desde su sofá. Opero granjas
                todos los días, con mi equipo, desde mi oficina. Todo lo que
                enseño es lo que hago — y lo que mis alumnos replican con
                resultados reales.
              </p>

              <a href={AGENDAR_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="relative text-lg px-8 py-7 bg-primary hover:bg-cyan text-primary-foreground font-bold tracking-wider uppercase animate-halo group overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Hablar con Dante
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RESULTADOS REALES ═══ */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan/5 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-wider"
              style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
            >
              Resultados{" "}
              <span className="text-primary glow-text">de mis alumnos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Personas reales que arrancaron desde cero y hoy generan ingresos
              con su granja
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                img: resultado6,
                stat: "$1,407/día",
                text: "6.3M views con granja de 12 canales",
                name: "Carlos M.",
                story:
                  "Empezó con una sola cuenta. En 4 meses escaló a 12 canales automatizados generando contenido 24/7.",
              },
              {
                img: resultado7,
                stat: "$8,640/mes",
                text: "57.4K views y +707 subs en 28 días",
                name: "Andrea R.",
                story:
                  "Sin experiencia previa. Primer mes con el método Scaling y 8 canales en el nicho de motivación.",
              },
              {
                img: resultado8,
                stat: "$15,942",
                text: "En solo 6 días con +74% crecimiento",
                name: "Miguel T.",
                story:
                  "Tenía experiencia digital pero no escalaba. Con granjas automatizadas logró casi $16K en 6 días.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-card-3d rounded-2xl overflow-hidden border border-primary/20 hover:border-cyan/50 transition-all duration-300 hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.text}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-bold text-lg">
                      {item.stat}
                    </span>
                  </div>
                  <p className="text-xs text-cyan font-medium mb-3">
                    {item.text}
                  </p>
                  <div className="pt-3 border-t border-primary/10">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            className="w-3 h-3 text-yellow-500 fill-yellow-500"
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-white">
                        {item.name}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.story}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] animate-glow-pulse" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 uppercase tracking-wider max-w-4xl mx-auto"
            style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
          >
            ¿Listo para montar tu{" "}
            <span className="text-primary glow-text">granja de bots?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Agenda una asesoría privada conmigo. Te muestro exactamente cómo
            arrancar, qué necesitas y cuánto puedes generar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={AGENDAR_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="relative text-lg px-10 py-7 bg-primary hover:bg-cyan text-primary-foreground font-bold tracking-wider uppercase animate-halo group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Agendar Asesoría con Dante
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />
              </Button>
            </a>
            <a href={QUIZ_URL}>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-7 border-primary/30 hover:bg-primary/10 font-bold tracking-wider uppercase"
              >
                Personalizar Mi Granja
              </Button>
            </a>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Sin compromiso · Cupos limitados · Resultados garantizados
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingDante;
