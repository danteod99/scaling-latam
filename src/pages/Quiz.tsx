import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  Crown,
  Smartphone,
  Sparkles,
  Shield,
  Target,
  DollarSign,
  Users,
  Zap,
  Globe,
  Layers,
  Monitor,
  Music,
  Video,
  Play,
  Facebook,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import resultado6 from "@/assets/resultado-6.png";
import resultado7 from "@/assets/resultado-7.png";
import resultado8 from "@/assets/resultado-8.png";

/* ──────────────────────────
   Configurador de Granja de Bots
   - 8 pasos de personalización
   - Resultado → resumen + CTA agendar
   ────────────────────────── */

interface StepOption {
  id: string;
  label: string;
  description: string;
  icon: React.ElementType;
  emoji?: string;
}

interface Step {
  id: number;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  type: "single" | "multi" | "grid";
  options: StepOption[];
}

const steps: Step[] = [
  {
    id: 1,
    icon: Globe,
    title: "¿En qué plataforma quieres operar?",
    subtitle: "Selecciona la plataforma principal para tu granja",
    type: "grid",
    options: [
      {
        id: "youtube",
        label: "YouTube",
        description: "Videos, Shorts y monetización con AdSense",
        icon: Play,
      },
      {
        id: "tiktok",
        label: "TikTok",
        description: "Contenido viral y Creator Fund",
        icon: Video,
      },
      {
        id: "spotify",
        label: "Spotify",
        description: "Streams, playlists y royalties",
        icon: Music,
      },
      {
        id: "facebook",
        label: "Facebook",
        description: "Reels, páginas y monetización in-stream",
        icon: Facebook,
      },
    ],
  },
  {
    id: 2,
    icon: Layers,
    title: "¿Cuántas cuentas quieres manejar?",
    subtitle: "Más cuentas = más alcance y más ingresos",
    type: "single",
    options: [
      {
        id: "starter",
        label: "5 - 10 cuentas",
        description: "Ideal para empezar y aprender el sistema",
        icon: Target,
      },
      {
        id: "growth",
        label: "10 - 25 cuentas",
        description: "Para generar ingresos consistentes",
        icon: Sparkles,
      },
      {
        id: "scale",
        label: "25 - 50 cuentas",
        description: "Operación seria con ingresos escalables",
        icon: Zap,
      },
      {
        id: "enterprise",
        label: "50+ cuentas",
        description: "Granja completa — máximo rendimiento",
        icon: Crown,
      },
    ],
  },
  {
    id: 3,
    icon: Users,
    title: "¿A cuántas personas quieres llegar?",
    subtitle: "Define tu meta de alcance mensual",
    type: "single",
    options: [
      {
        id: "10k",
        label: "10K - 50K",
        description: "Audiencia inicial para validar el modelo",
        icon: Users,
      },
      {
        id: "100k",
        label: "50K - 500K",
        description: "Alcance medio con monetización activa",
        icon: Users,
      },
      {
        id: "1m",
        label: "500K - 1M",
        description: "Alcance masivo — ingresos significativos",
        icon: Users,
      },
      {
        id: "5m",
        label: "1M - 5M+",
        description: "Operación a gran escala — máximo revenue",
        icon: Users,
      },
    ],
  },
  {
    id: 4,
    icon: Smartphone,
    title: "¿Qué dispositivos prefieres para tu granja?",
    subtitle: "Selecciona los equipos que usarás — puedes elegir varios",
    type: "multi",
    options: [
      {
        id: "s8-change",
        label: "Samsung S8 Change",
        description: "Económico y confiable — ideal para empezar",
        icon: Smartphone,
      },
      {
        id: "zflip4-pro",
        label: "Samsung Z Flip 4 Pro",
        description: "Rendimiento premium — máxima velocidad",
        icon: Smartphone,
      },
      {
        id: "note8-change",
        label: "Samsung Note 8 Change",
        description: "Pantalla grande — perfecto para multitarea",
        icon: Smartphone,
      },
      {
        id: "s10-active",
        label: "Samsung S10 Active",
        description: "Batería duradera — operación continua 24/7",
        icon: Smartphone,
      },
    ],
  },
  {
    id: 5,
    icon: Monitor,
    title: "¿Qué tipo de contenido vas a generar?",
    subtitle: "Esto define la estrategia de tu granja",
    type: "single",
    options: [
      {
        id: "ai-generated",
        label: "Contenido generado con IA",
        description: "Videos, imágenes y textos creados automáticamente",
        icon: Sparkles,
      },
      {
        id: "compilation",
        label: "Compilaciones y recopilaciones",
        description: "Recopilaciones virales de contenido existente",
        icon: Layers,
      },
      {
        id: "faceless",
        label: "Canales sin rostro (Faceless)",
        description: "Narración + stock footage — sin aparecer en cámara",
        icon: Video,
      },
      {
        id: "mixed",
        label: "Estrategia mixta",
        description: "Combinas varios formatos según la plataforma",
        icon: Globe,
      },
    ],
  },
  {
    id: 6,
    icon: Zap,
    title: "¿Qué nivel de automatización buscas?",
    subtitle: "Define cuánto quieres automatizar tu operación",
    type: "single",
    options: [
      {
        id: "manual",
        label: "Semi-manual",
        description: "Tú controlas todo — automatizas lo básico",
        icon: Target,
      },
      {
        id: "hybrid",
        label: "Híbrido",
        description: "Automatización parcial + supervisión manual",
        icon: Zap,
      },
      {
        id: "full-auto",
        label: "Full Automático",
        description: "Todo automatizado — solo supervisas métricas",
        icon: Sparkles,
      },
      {
        id: "ai-driven",
        label: "IA + Automatización",
        description: "La IA decide, publica y optimiza por ti",
        icon: Crown,
      },
    ],
  },
  {
    id: 7,
    icon: DollarSign,
    title: "¿Cuál es tu meta de ingresos mensuales?",
    subtitle: "Sé ambicioso pero realista — esto define tu plan",
    type: "single",
    options: [
      {
        id: "500",
        label: "$500 - $1,000 USD",
        description: "Ingreso extra — complemento a tu trabajo actual",
        icon: DollarSign,
      },
      {
        id: "3000",
        label: "$1,000 - $5,000 USD",
        description: "Ingreso serio — reemplazo de sueldo tradicional",
        icon: DollarSign,
      },
      {
        id: "10000",
        label: "$5,000 - $15,000 USD",
        description: "Negocio rentable — libertad financiera",
        icon: DollarSign,
      },
      {
        id: "20000",
        label: "$15,000+ USD",
        description: "Operación a escala — empresa digital completa",
        icon: DollarSign,
      },
    ],
  },
  {
    id: 8,
    icon: Shield,
    title: "¿Cuándo quieres empezar?",
    subtitle: "Los cupos son limitados — la acción rápida tiene ventaja",
    type: "single",
    options: [
      {
        id: "now",
        label: "Ahora mismo",
        description: "Estoy listo para arrancar hoy",
        icon: Zap,
      },
      {
        id: "week",
        label: "Esta semana",
        description: "Necesito unos días para organizarme",
        icon: Target,
      },
      {
        id: "month",
        label: "Este mes",
        description: "Estoy planeando y reuniendo capital",
        icon: Sparkles,
      },
      {
        id: "exploring",
        label: "Solo estoy explorando",
        description: "Quiero informarme antes de decidir",
        icon: Globe,
      },
    ],
  },
];

const AGENDAR_URL =
  "https://calendly.com/d/328-gbq-zqx/reunion-de-asesoria-1-1-creacion-app";
const SKOOL_URL = "https://www.skool.com/artificial-humans-7653";

const Quiz = () => {
  const [started, setStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<number, string[]>>({});
  const [finished, setFinished] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [processing, setProcessing] = useState(false);

  const progress = ((currentStep + 1) / steps.length) * 100;
  const step = steps[currentStep];

  const currentSelections = selections[currentStep] || [];
  const hasSelection = currentSelections.length > 0;

  const handleSelect = (optionId: string) => {
    if (step.type === "multi") {
      setSelections((prev) => {
        const current = prev[currentStep] || [];
        if (current.includes(optionId)) {
          return { ...prev, [currentStep]: current.filter((id) => id !== optionId) };
        }
        return { ...prev, [currentStep]: [...current, optionId] };
      });
    } else {
      setSelections((prev) => ({ ...prev, [currentStep]: [optionId] }));
    }
  };

  const handleNext = () => {
    if (!hasSelection) return;
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setFinished(true);
      setProcessing(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  useEffect(() => {
    if (processing) {
      const timer = setTimeout(() => {
        setProcessing(false);
        setShowResult(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [processing]);

  // Build summary from selections
  const getSummary = () => {
    const platform =
      steps[0].options.find((o) => selections[0]?.includes(o.id))?.label || "";
    const accounts =
      steps[1].options.find((o) => selections[1]?.includes(o.id))?.label || "";
    const reach =
      steps[2].options.find((o) => selections[2]?.includes(o.id))?.label || "";
    const devices = (selections[3] || [])
      .map((id) => steps[3].options.find((o) => o.id === id)?.label)
      .filter(Boolean);
    const content =
      steps[4].options.find((o) => selections[4]?.includes(o.id))?.label || "";
    const automation =
      steps[5].options.find((o) => selections[5]?.includes(o.id))?.label || "";
    const income =
      steps[6].options.find((o) => selections[6]?.includes(o.id))?.label || "";
    const timeline =
      steps[7].options.find((o) => selections[7]?.includes(o.id))?.id || "";

    return { platform, accounts, reach, devices, content, automation, income, timeline };
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ═══ INTRO ═══ */}
      {!started && (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/15 rounded-full blur-[150px] animate-glow-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/20 rounded-full blur-[100px] animate-pulse" />
          </div>

          <div className="container mx-auto px-4 z-10 text-center animate-fade-in-up pt-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs md:text-sm font-medium tracking-wider uppercase text-primary">
                Configurador Personalizado
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glow-text-double uppercase leading-tight max-w-5xl mx-auto animate-glow-dynamic"
              style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
            >
              Personaliza tu{" "}
              <span className="text-primary font-bold">Granja de Bots</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-white mb-4 max-w-3xl mx-auto font-light leading-relaxed">
              Diseña tu operación ideal en menos de 2 minutos. Elige plataforma,
              dispositivos, nivel de automatización y recibe un plan
              personalizado.
            </p>

            <p className="text-base md:text-lg text-cyan mb-12 max-w-2xl mx-auto font-semibold">
              8 pasos simples para configurar la granja perfecta para ti.
            </p>

            <div className="flex flex-col items-center gap-4">
              <Button
                size="lg"
                onClick={() => setStarted(true)}
                className="relative text-lg px-8 py-7 bg-primary hover:bg-cyan text-primary-foreground font-bold tracking-wider uppercase animate-halo group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Diseñar Mi Granja
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />
              </Button>
              <span className="text-sm text-muted-foreground">
                100% gratis · Sin compromiso · Resultado instantáneo
              </span>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { value: "500+", label: "Granjas configuradas" },
                { value: "1:1", label: "Asesoría personalizada" },
                { value: "$10K+", label: "Ingreso promedio/mes" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="glass-card-3d p-4 rounded-xl border border-primary/20 text-center animate-fade-in"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="text-xl md:text-2xl font-bold text-primary glow-text">
                    {stat.value}
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Resultados reales */}
            <div
              className="mt-16 mb-20 max-w-4xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-6 font-semibold">
                Personas reales obteniendo resultados con su granja
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    img: resultado6,
                    text: "6.3M views · $1,407 en un día",
                    name: "Carlos M.",
                    story:
                      "Empezó con una sola cuenta hace 4 meses. Hoy maneja una granja de 12 canales que generan contenido automatizado 24/7. En su mejor día facturó $1,407 solo con AdSense.",
                  },
                  {
                    img: resultado7,
                    text: "57.4K views · $8,640 en 28 días",
                    name: "Andrea R.",
                    story:
                      "Sin experiencia previa en YouTube. Aplicó el método Scaling y en su primer mes completo logró $8,640 con una granja de 8 canales en el nicho de motivación.",
                  },
                  {
                    img: resultado8,
                    text: "$15,942 en 6 días · +74% crecimiento",
                    name: "Miguel T.",
                    story:
                      "Ya tenía experiencia con contenido digital pero no lograba escalar. Con el sistema de granjas automatizó su operación y en solo 6 días generó casi $16K en ingresos.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="glass-card-3d rounded-xl p-3 border border-primary/20 overflow-hidden animate-fade-in"
                    style={{ animationDelay: `${0.6 + i * 0.15}s` }}
                  >
                    <img
                      src={item.img}
                      alt={item.text}
                      className="w-full rounded-lg"
                    />
                    <p className="text-xs text-cyan mt-2 font-medium">
                      {item.text}
                    </p>
                    <div className="mt-3 pt-3 border-t border-primary/10">
                      <p className="text-sm font-semibold text-white">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        {item.story}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══ PASOS DEL CONFIGURADOR ═══ */}
      {started && !finished && (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
          </div>

          <div className="container mx-auto px-4 z-10 max-w-3xl pt-10">
            {/* Progress bar */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-muted-foreground">
                  Paso {currentStep + 1} de {steps.length}
                </span>
                <span className="text-sm text-primary font-semibold">
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${progress}%`,
                    background:
                      "linear-gradient(90deg, hsl(204 100% 37%), hsl(204 67% 61%))",
                    boxShadow: "0 0 15px hsl(204 100% 37% / 0.5)",
                  }}
                />
              </div>
            </div>

            {/* Step card */}
            <div className="glass-card-3d rounded-2xl p-8 md:p-12 border border-primary/20 animate-fade-in">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-primary/10">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2
                    className="text-2xl md:text-3xl font-bold uppercase tracking-wider"
                    style={{
                      fontFamily: "'Bebas Neue', 'Anton', sans-serif",
                    }}
                  >
                    {step.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    {step.subtitle}
                  </p>
                </div>
              </div>

              {/* Options */}
              <div
                className={
                  step.type === "grid"
                    ? "grid grid-cols-2 gap-4"
                    : "space-y-4"
                }
              >
                {step.options.map((option) => {
                  const isSelected = currentSelections.includes(option.id);
                  const OptionIcon = option.icon;
                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelect(option.id)}
                      className={`w-full text-left p-5 rounded-xl border transition-all duration-300 group ${
                        isSelected
                          ? "border-cyan/70 bg-cyan/10 shadow-[0_0_25px_hsl(204_67%_61%/0.2)]"
                          : "border-primary/10 bg-muted/30 hover:border-primary/40 hover:bg-primary/5"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-2 rounded-lg flex-shrink-0 transition-all ${
                            isSelected
                              ? "bg-cyan/20"
                              : "bg-muted/50 group-hover:bg-primary/10"
                          }`}
                        >
                          <OptionIcon
                            className={`w-5 h-5 transition-colors ${
                              isSelected
                                ? "text-cyan"
                                : "text-muted-foreground group-hover:text-primary"
                            }`}
                          />
                        </div>
                        <div>
                          <span
                            className={`text-sm md:text-base font-semibold transition-colors block ${
                              isSelected
                                ? "text-foreground"
                                : "text-muted-foreground group-hover:text-foreground"
                            }`}
                          >
                            {option.label}
                          </span>
                          <span className="text-xs text-muted-foreground mt-1 block">
                            {option.description}
                          </span>
                        </div>
                        {step.type === "multi" && (
                          <div
                            className={`ml-auto w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                              isSelected
                                ? "border-cyan bg-cyan"
                                : "border-muted-foreground/40"
                            }`}
                          >
                            {isSelected && (
                              <svg
                                className="w-3 h-3 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {step.type === "multi" && (
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Puedes seleccionar varios dispositivos
                </p>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-10">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                    currentStep === 0
                      ? "text-muted-foreground/30 cursor-not-allowed"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Anterior
                </button>

                <Button
                  onClick={handleNext}
                  disabled={!hasSelection}
                  className={`relative px-8 py-6 font-bold tracking-wider uppercase group overflow-hidden transition-all ${
                    !hasSelection
                      ? "bg-muted text-muted-foreground cursor-not-allowed"
                      : "bg-primary hover:bg-cyan text-primary-foreground animate-halo"
                  }`}
                >
                  <span className="relative z-10 flex items-center">
                    {currentStep === steps.length - 1
                      ? "Ver Mi Granja"
                      : "Siguiente"}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  {hasSelection && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══ PROCESANDO ═══ */}
      {processing && (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 rounded-full blur-[150px] animate-glow-pulse" />
          </div>

          <div className="container mx-auto px-4 z-10 text-center">
            <div className="max-w-lg mx-auto">
              <div className="relative w-24 h-24 mx-auto mb-10">
                <div className="absolute inset-0 rounded-full border-4 border-muted" />
                <div
                  className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-cyan animate-spin"
                  style={{ animationDuration: "1s" }}
                />
                <div className="absolute inset-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-primary animate-pulse" />
                </div>
              </div>

              <h2
                className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider"
                style={{
                  fontFamily: "'Bebas Neue', 'Anton', sans-serif",
                }}
              >
                Configurando tu granja...
              </h2>
              <p className="text-muted-foreground text-lg">
                Preparando tu plan personalizado
              </p>

              <div className="flex justify-center gap-2 mt-8">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-full bg-primary animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══ RESULTADO ═══ */}
      {showResult && (() => {
        const summary = getSummary();
        return (
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/15 rounded-full blur-[150px] animate-glow-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/20 rounded-full blur-[100px] animate-pulse" />
            </div>

            <div className="container mx-auto px-4 z-10 text-center pt-20 pb-20 animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan/40 bg-cyan/10 mb-8">
                <Crown className="w-5 h-5 text-cyan" />
                <span className="text-sm font-bold tracking-wider uppercase text-cyan">
                  Tu Granja Está Lista
                </span>
              </div>

              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glow-text-double uppercase leading-tight max-w-4xl mx-auto"
                style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
              >
                Tu Granja de{" "}
                <span className="text-primary font-bold">
                  {summary.platform}
                </span>{" "}
                Personalizada
              </h1>

              <p className="text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Hemos diseñado el plan perfecto basado en tus preferencias.
                Agenda una asesoría para ponerlo en marcha.
              </p>

              {/* Summary cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
                {[
                  { label: "Plataforma", value: summary.platform, icon: Globe },
                  { label: "Cuentas", value: summary.accounts, icon: Layers },
                  { label: "Alcance", value: summary.reach, icon: Users },
                  { label: "Meta mensual", value: summary.income, icon: DollarSign },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="glass-card-3d rounded-xl p-4 border border-cyan/20 text-center animate-fade-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <card.icon className="w-5 h-5 text-cyan mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      {card.label}
                    </p>
                    <p className="text-sm font-bold text-white mt-1">
                      {card.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Detailed config */}
              <div className="glass-card-3d rounded-2xl p-6 md:p-8 max-w-3xl mx-auto border border-primary/20 mb-12 text-left">
                <h3
                  className="text-xl font-bold uppercase tracking-wider mb-6 text-center"
                  style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
                >
                  Configuración de tu Granja
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      label: "Dispositivos",
                      value: summary.devices.join(", "),
                      icon: Smartphone,
                    },
                    {
                      label: "Tipo de contenido",
                      value: summary.content,
                      icon: Video,
                    },
                    {
                      label: "Automatización",
                      value: summary.automation,
                      icon: Zap,
                    },
                    {
                      label: "Timeline",
                      value:
                        summary.timeline === "now"
                          ? "Arrancar ahora"
                          : summary.timeline === "week"
                          ? "Esta semana"
                          : summary.timeline === "month"
                          ? "Este mes"
                          : "Explorando opciones",
                      icon: Target,
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 border border-primary/10"
                    >
                      <item.icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-white mt-0.5">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resultados reales */}
              <div className="max-w-3xl mx-auto mb-12">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4 font-semibold">
                  Personas reales con granjas como la tuya
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="glass-card-3d rounded-xl p-3 border border-cyan/20 overflow-hidden">
                    <img
                      src={resultado6}
                      alt="Resultados: 6.3M views"
                      className="w-full rounded-lg"
                    />
                    <p className="text-xs text-cyan mt-2 font-medium">
                      6.3M views · $1,407 en un día
                    </p>
                  </div>
                  <div className="glass-card-3d rounded-xl p-3 border border-cyan/20 overflow-hidden">
                    <img
                      src={resultado7}
                      alt="Resultados: $8,640"
                      className="w-full rounded-lg"
                    />
                    <p className="text-xs text-cyan mt-2 font-medium">
                      57.4K views · $8,640 en 28 días
                    </p>
                  </div>
                  <div className="glass-card-3d rounded-xl p-3 border border-cyan/20 overflow-hidden">
                    <img
                      src={resultado8}
                      alt="Resultados: $15,942"
                      className="w-full rounded-lg"
                    />
                    <p className="text-xs text-cyan mt-2 font-medium">
                      $15,942 en 6 días · +74% crecimiento
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col items-center gap-4 mb-8">
                <a
                  href={AGENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="relative text-lg px-10 py-7 bg-primary hover:bg-cyan text-primary-foreground font-bold tracking-wider uppercase animate-halo group overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Agendar Mi Asesoría 1 a 1
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />
                  </Button>
                </a>
                <span className="text-sm text-muted-foreground">
                  Te mostramos cómo arrancar tu granja de {summary.platform} en
                  la asesoría
                </span>
              </div>

              <a
                href={SKOOL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-cyan transition-colors underline underline-offset-4"
              >
                O únete a la comunidad gratuita para aprender más
              </a>
            </div>
          </section>
        );
      })()}

      <Footer />
    </div>
  );
};

export default Quiz;
