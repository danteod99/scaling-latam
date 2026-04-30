import { useState, useEffect, useRef } from "react";
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
  CheckCircle,
  Star,
  TrendingUp,
  MapPin,
  MessageCircle,
  Wallet,
  GraduationCap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import danteSolo from "@/assets/dante-solo.jpg";
import danteTeam from "@/assets/dante-team.png";
import SEO from "@/components/SEO";
import resultado6 from "@/assets/resultado-6.png";
import resultado7 from "@/assets/resultado-7.png";
import resultado8 from "@/assets/resultado-8.png";
import granjaReal from "@/assets/granja-real.png";
import granjaInfraestructura from "@/assets/granja-infraestructura.png";
import { supabase } from "@/lib/supabase";

/* ──────────────────────────
   Landing + Configurador de Granja
   Combina landing personal de Dante
   con el configurador de 8 pasos
   ────────────────────────── */

interface StepOption {
  id: string;
  label: string;
  description: string;
  icon: React.ElementType;
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
      { id: "youtube", label: "YouTube", description: "Videos, Shorts y monetización con AdSense", icon: Play },
      { id: "tiktok", label: "TikTok", description: "Contenido viral y Creator Fund", icon: Video },
      { id: "spotify", label: "Spotify", description: "Streams, playlists y royalties", icon: Music },
      { id: "facebook", label: "Facebook", description: "Reels, páginas y monetización in-stream", icon: Facebook },
    ],
  },
  {
    id: 2,
    icon: Smartphone,
    title: "¿Cuántos dispositivos quieres manejar?",
    subtitle: "Más dispositivos = más cuentas, más alcance y más ingresos",
    type: "single",
    options: [
      { id: "starter", label: "5 - 10 dispositivos", description: "Ideal para empezar y aprender el sistema", icon: Target },
      { id: "growth", label: "10 - 25 dispositivos", description: "Para generar ingresos consistentes", icon: Sparkles },
      { id: "scale", label: "25 - 50 dispositivos", description: "Operación seria con ingresos escalables", icon: Zap },
      { id: "enterprise", label: "50+ dispositivos", description: "Granja completa — máximo rendimiento", icon: Crown },
    ],
  },
  {
    id: 3,
    icon: Users,
    title: "¿A cuántas personas quieres llegar?",
    subtitle: "Define tu meta de alcance mensual",
    type: "single",
    options: [
      { id: "10k", label: "10K - 50K", description: "Audiencia inicial para validar el modelo", icon: Users },
      { id: "100k", label: "50K - 500K", description: "Alcance medio con monetización activa", icon: Users },
      { id: "1m", label: "500K - 1M", description: "Alcance masivo — ingresos significativos", icon: Users },
      { id: "5m", label: "1M - 5M+", description: "Operación a gran escala — máximo revenue", icon: Users },
    ],
  },
  {
    id: 4,
    icon: Smartphone,
    title: "¿Qué dispositivos prefieres para tu granja?",
    subtitle: "Selecciona los equipos que usarás — puedes elegir varios",
    type: "multi",
    options: [
      { id: "s8-change", label: "Samsung S8 Change", description: "Económico y confiable — ideal para empezar", icon: Smartphone },
      { id: "zflip4-pro", label: "Samsung Z Flip 4 Pro", description: "Rendimiento premium — máxima velocidad", icon: Smartphone },
      { id: "note8-change", label: "Samsung Note 8 Change", description: "Pantalla grande — perfecto para multitarea", icon: Smartphone },
      { id: "s10-active", label: "Samsung S10 Active", description: "Batería duradera — operación continua 24/7", icon: Smartphone },
    ],
  },
  {
    id: 5,
    icon: Monitor,
    title: "¿Qué tipo de contenido vas a generar?",
    subtitle: "Esto define la estrategia de tu granja",
    type: "single",
    options: [
      { id: "ai-generated", label: "Contenido generado con IA", description: "Videos, imágenes y textos creados automáticamente", icon: Sparkles },
      { id: "compilation", label: "Compilaciones y recopilaciones", description: "Recopilaciones virales de contenido existente", icon: Layers },
      { id: "faceless", label: "Canales sin rostro (Faceless)", description: "Narración + stock footage — sin aparecer en cámara", icon: Video },
      { id: "mixed", label: "Estrategia mixta", description: "Combinas varios formatos según la plataforma", icon: Globe },
    ],
  },
  {
    id: 6,
    icon: Zap,
    title: "¿Qué nivel de automatización buscas?",
    subtitle: "Define cuánto quieres automatizar tu operación",
    type: "single",
    options: [
      { id: "manual", label: "Semi-manual", description: "Tú controlas todo — automatizas lo básico", icon: Target },
      { id: "hybrid", label: "Híbrido", description: "Automatización parcial + supervisión manual", icon: Zap },
      { id: "full-auto", label: "Full Automático", description: "Todo automatizado — solo supervisas métricas", icon: Sparkles },
      { id: "ai-driven", label: "IA + Automatización", description: "La IA decide, publica y optimiza por ti", icon: Crown },
    ],
  },
  {
    id: 7,
    icon: DollarSign,
    title: "¿Cuál es tu meta de ingresos mensuales?",
    subtitle: "Sé ambicioso pero realista — esto define tu plan",
    type: "single",
    options: [
      { id: "500", label: "$500 - $1,000 USD", description: "Ingreso extra — complemento a tu trabajo actual", icon: DollarSign },
      { id: "3000", label: "$1,000 - $5,000 USD", description: "Ingreso serio — reemplazo de sueldo tradicional", icon: DollarSign },
      { id: "10000", label: "$5,000 - $15,000 USD", description: "Negocio rentable — libertad financiera", icon: DollarSign },
      { id: "20000", label: "$15,000+ USD", description: "Operación a escala — empresa digital completa", icon: DollarSign },
    ],
  },
  {
    id: 8,
    icon: Wallet,
    title: "¿Cuánto puedes invertir hoy?",
    subtitle: "Esto nos ayuda a recomendarte el paquete ideal",
    type: "single",
    options: [
      { id: "under-1k", label: "Menos de $1,000 USD", description: "Quiero empezar con lo mínimo", icon: DollarSign },
      { id: "1k-2k", label: "$1,000 - $2,000 USD", description: "Inversión inicial seria", icon: DollarSign },
      { id: "2k-3.5k", label: "$2,000 - $3,500 USD", description: "Granja completa lista para operar", icon: DollarSign },
      { id: "over-3.5k", label: "$3,500+ USD", description: "Máxima inversión — máximo retorno", icon: Crown },
    ],
  },
  {
    id: 9,
    icon: GraduationCap,
    title: "¿Qué experiencia tienes en marketing digital?",
    subtitle: "No importa tu nivel — tenemos solución para todos",
    type: "single",
    options: [
      { id: "none", label: "Ninguna experiencia", description: "Soy completamente nuevo en esto", icon: Target },
      { id: "basic", label: "Experiencia básica", description: "He usado redes sociales para vender o promocionar", icon: Sparkles },
      { id: "intermediate", label: "Experiencia intermedia", description: "Manejo ads, funnels o automatizaciones", icon: Zap },
      { id: "advanced", label: "Experiencia avanzada", description: "Tengo agencia o negocio digital activo", icon: Crown },
    ],
  },
  {
    id: 10,
    icon: MapPin,
    title: "¿Desde qué país nos escribes?",
    subtitle: "Para coordinar envío y soporte en tu zona",
    type: "single",
    options: [
      { id: "peru", label: "Perú", description: "Envío local disponible", icon: MapPin },
      { id: "argentina", label: "Argentina", description: "Envío internacional", icon: MapPin },
      { id: "rd", label: "República Dominicana", description: "Envío internacional", icon: MapPin },
      { id: "mexico", label: "México", description: "Envío internacional", icon: MapPin },
      { id: "usa", label: "Estados Unidos", description: "Envío disponible", icon: MapPin },
      { id: "otro", label: "Otro país", description: "Consultar disponibilidad", icon: Globe },
    ],
  },
  {
    id: 11,
    icon: MessageCircle,
    title: "¿Cómo nos encontraste?",
    subtitle: "Esto nos ayuda a mejorar nuestro contenido",
    type: "single",
    options: [
      { id: "youtube", label: "YouTube", description: "Vi un video o anuncio", icon: Play },
      { id: "tiktok", label: "TikTok", description: "Vi contenido en TikTok", icon: Video },
      { id: "facebook", label: "Facebook / Instagram Ads", description: "Vi un anuncio", icon: Facebook },
      { id: "referido", label: "Me lo recomendó alguien", description: "Un amigo o conocido", icon: Users },
      { id: "otro", label: "Otro", description: "Google, blog, podcast, etc.", icon: Globe },
    ],
  },
  {
    id: 12,
    icon: Shield,
    title: "¿Cuándo quieres empezar?",
    subtitle: "Los cupos son limitados — la acción rápida tiene ventaja",
    type: "single",
    options: [
      { id: "now", label: "Ahora mismo", description: "Estoy listo para arrancar hoy", icon: Zap },
      { id: "week", label: "Esta semana", description: "Necesito unos días para organizarme", icon: Target },
      { id: "month", label: "Este mes", description: "Estoy planeando y reuniendo capital", icon: Sparkles },
      { id: "exploring", label: "Solo estoy explorando", description: "Quiero informarme antes de decidir", icon: Globe },
    ],
  },
];

// ══════════════════════════════
// LEAD SCORING
// ══════════════════════════════
const scoreMap: Record<string, Record<string, number>> = {
  // Step 1 (devices qty) - index 1
  "1": { starter: 5, growth: 10, scale: 20, enterprise: 25 },
  // Step 6 (automation) - index 5
  "5": { manual: 5, hybrid: 10, "full-auto": 15, "ai-driven": 20 },
  // Step 7 (income goal) - index 6
  "6": { "500": 5, "3000": 10, "10000": 20, "20000": 25 },
  // Step 8 (budget) - index 7
  "7": { "under-1k": 5, "1k-2k": 15, "2k-3.5k": 25, "over-3.5k": 30 },
  // Step 9 (experience) - index 8
  "8": { none: 5, basic: 10, intermediate: 15, advanced: 20 },
  // Step 12 (timeline) - index 11
  "11": { now: 30, week: 20, month: 10, exploring: -10 },
};

const calculateScore = (selections: Record<number, string[]>): number => {
  let score = 0;
  for (const [stepIndex, optionScores] of Object.entries(scoreMap)) {
    const selected = selections[Number(stepIndex)]?.[0];
    if (selected && optionScores[selected]) {
      score += optionScores[selected];
    }
  }
  return Math.max(0, Math.min(100, score));
};

const AGENDAR_URL = "https://calendly.com/d/3tr-69b-hqj/asesoria-1-a-1-granja-de-bots";
const SKOOL_URL = "https://www.skool.com/artificial-humans-7653/about";

const Quiz = () => {
  const [configuratorStarted, setConfiguratorStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<number, string[]>>({});
  const [finished, setFinished] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const configuratorRef = useRef<HTMLDivElement>(null);

  const progress = ((currentStep + 1) / steps.length) * 100;
  const step = steps[currentStep];
  const currentSelections = selections[currentStep] || [];
  const hasSelection = currentSelections.length > 0;

  const fbEvent = (event: string, params?: Record<string, any>) => {
    if (typeof window.fbq === "function") {
      window.fbq("track", event, params);
    }
  };

  const handleStartConfigurator = () => {
    setConfiguratorStarted(true);
    fbEvent("StartQuiz", { content_name: "Configurador de Granja" });
    setTimeout(() => {
      configuratorRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

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
      fbEvent("QuizStep", { step: currentStep + 2, step_name: steps[currentStep + 1]?.title });
      configuratorRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      setShowContactForm(true);
      fbEvent("CompleteRegistration", { content_name: "Quiz Granja Completado" });
      configuratorRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactSubmit = () => {
    if (!contactName.trim() || !contactPhone.trim()) return;
    setShowContactForm(false);
    setFinished(true);
    setProcessing(true);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      configuratorRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [processingStep, setProcessingStep] = useState(0);
  const processingSteps = [
    "Analizando tu perfil...",
    "Seleccionando dispositivos ideales...",
    "Configurando automatizaciones...",
    "Calculando proyeccion de ingresos...",
    "Preparando tu granja a medida...",
  ];

  useEffect(() => {
    if (processing) {
      // Fire Lead event
      fbEvent("Lead", { content_name: "Quiz Granja Finalizado" });

      // Save to Supabase
      const summary = getSummary();
      const score = calculateScore(selections);
      supabase.from("quiz_submissions").insert({
        name: contactName,
        phone: contactPhone,
        platform: summary.platform,
        devices_qty: summary.accounts,
        reach: summary.reach,
        device_models: summary.devices,
        content_type: summary.content,
        automation_level: summary.automation,
        income_goal: summary.income,
        budget: summary.budget,
        experience: summary.experience,
        country: summary.country,
        source: summary.source,
        timeline: summary.timeline,
        score,
        selections,
      }).then(() => {});

      // Fire-and-forget: notificar al CRM oliveros-finanzas para que el bot
      // de WhatsApp sepa quién llenó el quiz y mande recordatorio si no
      // agendan en 1h. NO bloquea el flujo del quiz si falla.
      try {
        const normalizeWhatsapp = (raw: string): string => {
          const cleaned = (raw || "").replace(/[^\d+]/g, "");
          if (!cleaned) return "";
          if (cleaned.startsWith("+")) return cleaned;
          // Si solo dígitos sin +, asumimos Perú si parece local (9 dígitos)
          if (cleaned.length === 9) return `+51${cleaned}`;
          return `+${cleaned}`;
        };
        const whatsapp = normalizeWhatsapp(contactPhone);
        if (whatsapp) {
          fetch("https://mlijhhzjathoqnuexhqu.supabase.co/functions/v1/quiz-webhook", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              whatsapp,
              nombre: contactName,
              pais: summary.country,
              producto_interes: summary.platform,
              presupuesto: summary.budget,
              urgencia: summary.timeline,
              respuestas: { ...summary, score, selections },
            }),
          }).catch((err) => {
            console.warn("CRM webhook failed (no bloqueante):", err);
          });
        }
      } catch (err) {
        console.warn("CRM webhook error:", err);
      }

      // Animate processing steps
      let step = 0;
      const stepInterval = setInterval(() => {
        step++;
        if (step < processingSteps.length) {
          setProcessingStep(step);
        } else {
          clearInterval(stepInterval);
          setProcessing(false);
          setShowResult(true);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 1200);
      return () => clearInterval(stepInterval);
    }
  }, [processing]);

  const getSummary = () => {
    const platform = steps[0].options.find((o) => selections[0]?.includes(o.id))?.label || "";
    const accounts = steps[1].options.find((o) => selections[1]?.includes(o.id))?.label || "";
    const reach = steps[2].options.find((o) => selections[2]?.includes(o.id))?.label || "";
    const devices = (selections[3] || []).map((id) => steps[3].options.find((o) => o.id === id)?.label).filter(Boolean);
    const content = steps[4].options.find((o) => selections[4]?.includes(o.id))?.label || "";
    const automation = steps[5].options.find((o) => selections[5]?.includes(o.id))?.label || "";
    const income = steps[6].options.find((o) => selections[6]?.includes(o.id))?.label || "";
    const budget = steps[7].options.find((o) => selections[7]?.includes(o.id))?.label || "";
    const experience = steps[8].options.find((o) => selections[8]?.includes(o.id))?.label || "";
    const country = steps[9].options.find((o) => selections[9]?.includes(o.id))?.label || "";
    const source = steps[10].options.find((o) => selections[10]?.includes(o.id))?.label || "";
    const timeline = steps[11].options.find((o) => selections[11]?.includes(o.id))?.id || "";
    return { platform, accounts, reach, devices, content, automation, income, budget, experience, country, source, timeline };
  };

  // ═══════════════════════════════════════
  // RESULTADO FINAL
  // ═══════════════════════════════════════
  if (showResult) {
    const summary = getSummary();
    const score = calculateScore(selections);
    const accountsId = selections[1]?.[0] || "";
    const incomeId = selections[6]?.[0] || "";
    const budgetId = selections[7]?.[0] || "";
    const experienceId = selections[8]?.[0] || "";
    const timelineId = selections[11]?.[0] || "";

    // Lead classification
    const isColdLead =
      score < 35 ||
      (timelineId === "exploring" && budgetId === "under-1k") ||
      (timelineId === "exploring" && experienceId === "none" && incomeId === "500");

    const isBeginner =
      accountsId === "starter" ||
      timelineId === "exploring" ||
      timelineId === "month" ||
      incomeId === "500";
    const farmImage = isBeginner ? granjaReal : granjaInfraestructura;
    const farmCaption = isBeginner
      ? "Así funciona una granja de bots real — dispositivos físicos que simulan actividad real en redes sociales."
      : "Tu agencia con infraestructura propia — Scaling arma y configura todo por ti.";

    // Cold lead → redirect to Skool
    if (isColdLead) {
      return (
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 rounded-full blur-[150px] animate-glow-pulse" />
            </div>
            <div className="container mx-auto px-4 z-10 text-center pt-28 pb-20 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/40 bg-primary/10 mb-8">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold tracking-wider uppercase text-primary">Tu camino empieza aquí</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text-double uppercase leading-tight max-w-4xl mx-auto" style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}>
                Primero aprende, <span className="text-primary">después invierte</span>
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                Vemos que estás empezando a explorar el mundo de las granjas de bots. Antes de invertir, te recomendamos unirte a nuestra comunidad gratuita donde hay más de <strong className="text-cyan">50 horas de clases</strong> para que aprendas todo desde cero.
              </p>

              <div className="glass-card-3d rounded-2xl p-8 max-w-2xl mx-auto border border-primary/20 mb-10 text-left">
                <h3 className="text-xl font-bold uppercase tracking-wider mb-6 text-center" style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}>
                  Lo que encontrarás en la comunidad
                </h3>
                <div className="grid gap-4">
                  {[
                    { icon: Play, text: "50+ horas de clases paso a paso sobre granjas de bots" },
                    { icon: Users, text: "Comunidad activa de granjeros compartiendo resultados" },
                    { icon: Zap, text: "Tutoriales de automatización, proxies y configuración" },
                    { icon: DollarSign, text: "Casos reales de personas que ya están generando ingresos" },
                    { icon: Shield, text: "Soporte y respuestas a todas tus dudas" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/20 border border-primary/10">
                      <item.icon className="w-5 h-5 text-cyan flex-shrink-0" />
                      <p className="text-sm text-white">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 mb-8">
                <a href={SKOOL_URL} target="_blank" rel="noopener noreferrer" onClick={() => fbEvent("ColdLeadSkool", { score })}>
                  <Button size="lg" className="relative text-lg px-10 py-7 bg-primary hover:bg-cyan text-primary-foreground font-bold tracking-wider uppercase animate-halo group overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      Unirme Gratis a la Comunidad
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />
                  </Button>
                </a>
                <span className="text-sm text-muted-foreground">
                  100% gratis — sin compromiso — acceso inmediato
                </span>
              </div>

              <p className="text-xs text-muted-foreground max-w-lg mx-auto">
                Cuando te sientas listo para dar el siguiente paso, dentro de la comunidad podrás agendar una asesoría personalizada con Dante.
              </p>
            </div>
          </section>
          <Footer />
        </div>
      );
    }
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/15 rounded-full blur-[150px] animate-glow-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/20 rounded-full blur-[100px] animate-pulse" />
          </div>

          <div className="container mx-auto px-4 z-10 text-center pt-28 pb-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan/40 bg-cyan/10 mb-8">
              <Crown className="w-5 h-5 text-cyan" />
              <span className="text-sm font-bold tracking-wider uppercase text-cyan">Tu Granja a Medida Está Lista</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glow-text-double uppercase leading-tight max-w-4xl mx-auto" style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}>
              Tu Granja de <span className="text-primary font-bold">{summary.platform}</span> Personalizada
            </h1>

            <p className="text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Tu granja fue diseñada a medida. Agenda una asesoría con Dante para recogerla y ponerla en marcha.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
              {[
                { label: "Plataforma", value: summary.platform, icon: Globe },
                { label: "Dispositivos", value: summary.accounts, icon: Smartphone },
                { label: "Alcance", value: summary.reach, icon: Users },
                { label: "Meta mensual", value: summary.income, icon: DollarSign },
              ].map((card, i) => (
                <div key={i} className="glass-card-3d rounded-xl p-4 border border-cyan/20 text-center animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <card.icon className="w-5 h-5 text-cyan mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">{card.label}</p>
                  <p className="text-sm font-bold text-white mt-1">{card.value}</p>
                </div>
              ))}
            </div>

            <div className="glass-card-3d rounded-2xl p-6 md:p-8 max-w-3xl mx-auto border border-primary/20 mb-12 text-left">
              <h3 className="text-xl font-bold uppercase tracking-wider mb-6 text-center" style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}>
                Configuración de tu Granja
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: "Dispositivos", value: summary.devices.join(", "), icon: Smartphone },
                  { label: "Tipo de contenido", value: summary.content, icon: Video },
                  { label: "Automatización", value: summary.automation, icon: Zap },
                  { label: "Timeline", value: summary.timeline === "now" ? "Arrancar ahora" : summary.timeline === "week" ? "Esta semana" : summary.timeline === "month" ? "Este mes" : "Explorando opciones", icon: Target },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 border border-primary/10">
                    <item.icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">{item.label}</p>
                      <p className="text-sm font-medium text-white mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visualización de tu granja */}
            <div className="max-w-2xl mx-auto mb-12">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4 font-semibold">Así se ve tu granja</p>
              <div className="glass-card-3d rounded-2xl p-4 border border-cyan/30 overflow-hidden">
                <img src={farmImage} alt="Visualización de tu granja" className="w-full rounded-xl" />
                <p className="text-sm text-cyan mt-3 font-medium text-center px-2">{farmCaption}</p>
              </div>
            </div>

            {/* Resultados */}
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4 font-semibold">Personas reales con granjas como la tuya</p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { img: resultado6, text: "6.3M views · $1,407 en un día" },
                  { img: resultado7, text: "57.4K views · $8,640 en 28 días" },
                  { img: resultado8, text: "$15,942 en 6 días · +74% crecimiento" },
                ].map((item, i) => (
                  <div key={i} className="glass-card-3d rounded-xl p-3 border border-cyan/20 overflow-hidden">
                    <img src={item.img} alt={item.text} className="w-full rounded-lg" />
                    <p className="text-xs text-cyan mt-2 font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 mb-8">
              <a href={AGENDAR_URL} target="_blank" rel="noopener noreferrer" onClick={() => fbEvent("Schedule", { content_name: `Recoger Granja ${summary.platform}` })}>
                <Button size="lg" className="relative text-lg px-10 py-7 bg-primary hover:bg-cyan text-primary-foreground font-bold tracking-wider uppercase animate-halo group overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Recoger Mi Granja
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />
                </Button>
              </a>
              <span className="text-sm text-muted-foreground">
                Agenda una llamada con Dante para recibir tu granja de {summary.platform} configurada
              </span>
            </div>

            <a href={SKOOL_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:text-cyan transition-colors underline underline-offset-4">
              O únete a la comunidad gratuita para aprender más
            </a>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // ═══════════════════════════════════════
  // FORMULARIO DE CONTACTO
  // ═══════════════════════════════════════
  if (showContactForm) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 rounded-full blur-[80px]" />
          </div>
          <div className="container mx-auto px-4 z-10 text-center pt-24 pb-16" ref={configuratorRef}>
            <div className="max-w-md mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan/40 bg-cyan/10 mb-6">
                <CheckCircle className="w-4 h-4 text-cyan" />
                <span className="text-xs font-bold tracking-wider uppercase text-cyan">Paso final</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 uppercase tracking-wider" style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}>
                ¿A dónde enviamos <span className="text-primary">tu granja?</span>
              </h2>
              <p className="text-muted-foreground mb-8">Dejanos tus datos para preparar tu granja a medida</p>

              <div className="space-y-4 text-left">
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wide mb-1 block">Nombre completo</label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Ej: Juan Pérez"
                    className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-primary/20 text-white placeholder:text-muted-foreground focus:outline-none focus:border-cyan transition-colors"
                    autoFocus
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wide mb-1 block">WhatsApp / Teléfono</label>
                  <input
                    type="tel"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="Ej: +51 999 888 777"
                    className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-primary/20 text-white placeholder:text-muted-foreground focus:outline-none focus:border-cyan transition-colors"
                  />
                </div>
              </div>

              <Button
                onClick={handleContactSubmit}
                disabled={!contactName.trim() || !contactPhone.trim()}
                size="lg"
                className="relative w-full mt-6 text-lg px-8 py-7 bg-primary hover:bg-cyan text-primary-foreground font-bold tracking-wider uppercase animate-halo group overflow-hidden disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Preparar Mi Granja
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />
              </Button>

              <button
                onClick={() => { setShowContactForm(false); setCurrentStep(steps.length - 1); }}
                className="mt-4 text-sm text-muted-foreground hover:text-white transition-colors flex items-center justify-center gap-1 mx-auto"
              >
                <ArrowLeft className="w-3 h-3" /> Volver al quiz
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // ═══════════════════════════════════════
  // PROCESANDO
  // ═══════════════════════════════════════
  if (processing) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 rounded-full blur-[150px] animate-glow-pulse" />
          </div>
          <div className="container mx-auto px-4 z-10 text-center">
            <div className="max-w-lg mx-auto">
              <div className="relative w-24 h-24 mx-auto mb-10">
                <div className="absolute inset-0 rounded-full border-4 border-muted" />
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-cyan animate-spin" style={{ animationDuration: "1s" }} />
                <div className="absolute inset-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-primary animate-pulse" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider" style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}>
                Preparando tu granja a medida...
              </h2>
              <p className="text-cyan text-lg font-medium animate-pulse">{processingSteps[processingStep]}</p>
              <div className="mt-8 max-w-xs mx-auto">
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-cyan rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${((processingStep + 1) / processingSteps.length) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">{processingStep + 1} de {processingSteps.length}</p>
              </div>
              <div className="flex justify-center gap-2 mt-6">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // ═══════════════════════════════════════
  // LANDING + CONFIGURADOR
  // ═══════════════════════════════════════
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Quiz — Diseña tu Granja de Bots Personalizada"
        description="Responde 8 preguntas y recibe un plan personalizado para tu granja de bots. Elige plataforma, dispositivos, automatización y meta de ingresos."
        path="/quiz"
      />
      <Navbar />

      {/* ═══ HERO — Dante ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 rounded-full blur-[150px] animate-glow-pulse" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 z-10 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium tracking-wider uppercase text-primary">
                  Fundador de Scaling LATAM
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 uppercase leading-tight glow-text-double animate-glow-dynamic" style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}>
                Personaliza tu <span className="text-primary">Granja de Bots</span> y empieza a{" "}
                <span className="text-cyan">generar ingresos</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed max-w-xl">
                Soy Dante Oliveros. Construí un sistema automatizado de granjas de bots que genera ingresos 24/7 en YouTube, TikTok, Spotify y Facebook.
              </p>

              <p className="text-base text-white mb-8 max-w-xl font-medium">
                Diseña tu granja ideal en menos de 2 minutos. Elige plataforma, dispositivos, automatización y recibe un plan personalizado.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={handleStartConfigurator}
                  className="relative text-lg px-8 py-7 bg-primary hover:bg-cyan text-primary-foreground font-bold tracking-wider uppercase animate-halo group overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Diseñar Mi Granja
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />
                </Button>
                <a href={AGENDAR_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-7 border-primary/30 hover:bg-primary/10 font-bold tracking-wider uppercase w-full sm:w-auto">
                    Agendar Asesoría 1:1
                  </Button>
                </a>
              </div>

              <div className="flex gap-8 mt-10">
                {[
                  { value: "+500", label: "alumnos" },
                  { value: "$10K+", label: "promedio/mes" },
                  { value: "4", label: "plataformas" },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="text-2xl font-bold text-primary glow-text">{s.value}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-[0_0_60px_rgba(0,122,191,0.15)] max-h-[600px]">
                <img src={danteSolo} alt="Dante Oliveros — Fundador de Scaling LATAM" className="w-full h-full object-cover object-center max-h-[600px]" style={{ objectPosition: "center 30%" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card-3d rounded-xl p-4 border border-cyan/30">
                    <p className="text-xl font-bold uppercase tracking-wider" style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}>
                      Dante Oliveros
                    </p>
                    <p className="text-sm text-cyan">CEO & Fundador · Scaling LATAM</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 glass-card-3d rounded-xl p-3 border border-cyan/30 animate-float hidden md:block">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-xs text-muted-foreground">Revenue/mes</p>
                    <p className="text-lg font-bold text-green-400">$15,942</p>
                  </div>
                </div>
              </div>

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

      {/* ═══ QUÉ VAS A LOGRAR ═══ */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-wider" style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}>
              Qué vas a <span className="text-primary glow-text">lograr</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">El sistema completo para generar ingresos con granjas de bots</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Smartphone, title: "Tu Granja Operativa", desc: "Monta tu granja con dispositivos Samsung desde $50. Te enseño qué comprar, cómo configurar y optimizar cada equipo." },
              { icon: Play, title: "Contenido Automatizado", desc: "Genera videos, shorts y reels con IA sin mostrar tu cara. Contenido que se publica solo y genera views 24/7." },
              { icon: DollarSign, title: "Monetización Real", desc: "AdSense, Creator Fund, Spotify royalties, Facebook in-stream. Múltiples fuentes de ingreso desde el día 1." },
              { icon: Users, title: "Escalamiento", desc: "Pasa de 5 a 50+ cuentas con sistemas probados. Cada cuenta nueva es un canal de ingresos adicional." },
              { icon: Shield, title: "Seguridad Anti-Ban", desc: "Técnicas avanzadas para mantener tus cuentas seguras. Proxies, fingerprinting y rotación de identidades." },
              { icon: Zap, title: "Automatización Total", desc: "Software propio + IA para que tu granja trabaje mientras duermes. Solo supervisas métricas." },
            ].map((item, i) => (
              <div key={i} className="glass-card-3d rounded-2xl p-6 border border-primary/20 hover:border-cyan/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group animate-fade-in relative overflow-hidden" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-cyan/60 to-transparent group-hover:via-cyan/90 transition-all shadow-[0_0_15px_rgba(0,122,191,0.5)]" />
                <div className="p-3 bg-primary/10 rounded-xl inline-block mb-4 group-hover:shadow-[0_0_25px_rgba(0,122,191,0.4)] transition-all">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-2" style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}>{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RESULTADOS REALES ═══ */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan/5 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-wider" style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}>
              Resultados <span className="text-primary glow-text">de mis alumnos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Personas reales que arrancaron desde cero y hoy generan ingresos con su granja</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { img: resultado6, stat: "$1,407/día", text: "6.3M views con granja de 12 canales", name: "Carlos M.", story: "Empezó con una sola cuenta. En 4 meses escaló a 12 canales automatizados generando contenido 24/7." },
              { img: resultado7, stat: "$8,640/mes", text: "57.4K views y +707 subs en 28 días", name: "Andrea R.", story: "Sin experiencia previa. Primer mes con el método Scaling y 8 canales en el nicho de motivación." },
              { img: resultado8, stat: "$15,942", text: "En solo 6 días con +74% crecimiento", name: "Miguel T.", story: "Tenía experiencia digital pero no escalaba. Con granjas automatizadas logró casi $16K en 6 días." },
            ].map((item, i) => (
              <div key={i} className="glass-card-3d rounded-2xl overflow-hidden border border-primary/20 hover:border-cyan/50 transition-all duration-300 hover:scale-105 group animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="relative overflow-hidden">
                  <img src={item.img} alt={item.text} className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-bold text-lg">{item.stat}</span>
                  </div>
                  <p className="text-xs text-cyan font-medium mb-3">{item.text}</p>
                  <div className="pt-3 border-t border-primary/10">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-white">{item.name}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.story}</p>
                  </div>
                </div>
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
            <div className="animate-fade-in">
              <div className="rounded-2xl overflow-hidden border border-primary/20">
                <img src={danteTeam} alt="Dante y su equipo" className="w-full h-auto object-cover" />
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-wider" style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}>
                ¿Por qué <span className="text-primary glow-text">confiar en mí?</span>
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
                No soy un gurú que vende cursos desde su sofá. Opero granjas todos los días, con mi equipo, desde mi oficina. Todo lo que enseño es lo que hago — y lo que mis alumnos replican con resultados reales.
              </p>
              <Button size="lg" onClick={handleStartConfigurator} className="relative text-lg px-8 py-7 bg-primary hover:bg-cyan text-primary-foreground font-bold tracking-wider uppercase animate-halo group overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Diseñar Mi Granja Ahora
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONFIGURADOR ═══ */}
      <div ref={configuratorRef}>
        {configuratorStarted && !finished && (
          <section className="py-20 md:py-28 relative" id="configurador">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-4 z-10 max-w-3xl relative">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-2" style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}>
                  Personaliza tu <span className="text-primary glow-text">Granja</span>
                </h2>
                <p className="text-muted-foreground">8 pasos simples para diseñar tu operación ideal</p>
              </div>

              {/* Progress */}
              <div className="mb-10">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-muted-foreground">Paso {currentStep + 1} de {steps.length}</span>
                  <span className="text-sm text-primary font-semibold">{Math.round(progress)}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%`, background: "linear-gradient(90deg, hsl(204 100% 37%), hsl(204 67% 61%))", boxShadow: "0 0 15px hsl(204 100% 37% / 0.5)" }} />
                </div>
              </div>

              {/* Step card */}
              <div className="glass-card-3d rounded-2xl p-8 md:p-12 border border-primary/20 animate-fade-in">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider" style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}>
                      {step.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">{step.subtitle}</p>
                  </div>
                </div>

                <div className={step.type === "grid" ? "grid grid-cols-2 gap-4" : "space-y-4"}>
                  {step.options.map((option) => {
                    const isSelected = currentSelections.includes(option.id);
                    const OptionIcon = option.icon;
                    return (
                      <button key={option.id} onClick={() => handleSelect(option.id)} className={`w-full text-left p-5 rounded-xl border transition-all duration-300 group ${isSelected ? "border-cyan/70 bg-cyan/10 shadow-[0_0_25px_hsl(204_67%_61%/0.2)]" : "border-primary/10 bg-muted/30 hover:border-primary/40 hover:bg-primary/5"}`}>
                        <div className="flex items-start gap-4">
                          <div className={`p-2 rounded-lg flex-shrink-0 transition-all ${isSelected ? "bg-cyan/20" : "bg-muted/50 group-hover:bg-primary/10"}`}>
                            <OptionIcon className={`w-5 h-5 transition-colors ${isSelected ? "text-cyan" : "text-muted-foreground group-hover:text-primary"}`} />
                          </div>
                          <div>
                            <span className={`text-sm md:text-base font-semibold transition-colors block ${isSelected ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>{option.label}</span>
                            <span className="text-xs text-muted-foreground mt-1 block">{option.description}</span>
                          </div>
                          {step.type === "multi" && (
                            <div className={`ml-auto w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${isSelected ? "border-cyan bg-cyan" : "border-muted-foreground/40"}`}>
                              {isSelected && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {step.type === "multi" && (
                  <p className="text-xs text-muted-foreground mt-3 text-center">Puedes seleccionar varios dispositivos</p>
                )}

                <div className="flex items-center justify-between mt-10">
                  <button onClick={handleBack} disabled={currentStep === 0} className={`flex items-center gap-2 text-sm font-medium transition-colors ${currentStep === 0 ? "text-muted-foreground/30 cursor-not-allowed" : "text-muted-foreground hover:text-foreground"}`}>
                    <ArrowLeft className="w-4 h-4" />
                    Anterior
                  </button>
                  <Button onClick={handleNext} disabled={!hasSelection} className={`relative px-8 py-6 font-bold tracking-wider uppercase group overflow-hidden transition-all ${!hasSelection ? "bg-muted text-muted-foreground cursor-not-allowed" : "bg-primary hover:bg-cyan text-primary-foreground animate-halo"}`}>
                    <span className="relative z-10 flex items-center">
                      {currentStep === steps.length - 1 ? "Ver Mi Granja" : "Siguiente"}
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                    {hasSelection && <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />}
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA final si no ha arrancado el configurador */}
        {!configuratorStarted && (
          <section className="py-20 md:py-28 relative">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] animate-glow-pulse" />
            </div>
            <div className="container mx-auto px-4 relative z-10 text-center">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 uppercase tracking-wider max-w-4xl mx-auto" style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}>
                ¿Listo para montar tu <span className="text-primary glow-text">granja de bots?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                Diseña tu granja personalizada en 2 minutos o agenda una asesoría directa conmigo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={handleStartConfigurator} className="relative text-lg px-10 py-7 bg-primary hover:bg-cyan text-primary-foreground font-bold tracking-wider uppercase animate-halo group overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Diseñar Mi Granja
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />
                </Button>
                <a href={AGENDAR_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-primary/30 hover:bg-primary/10 font-bold tracking-wider uppercase">
                    Agendar Asesoría con Dante
                  </Button>
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-6">Sin compromiso · Cupos limitados · Resultados garantizados</p>
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Quiz;
