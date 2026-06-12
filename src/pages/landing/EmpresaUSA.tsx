import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  Building2,
  CreditCard,
  Banknote,
  Shield,
  FileText,
  Globe,
  DollarSign,
  Target,
  Sparkles,
  Zap,
  Crown,
  CheckCircle,
  MapPin,
  Briefcase,
  TrendingUp,
  Clock,
  Smartphone,
  ShoppingCart,
  Bot,
  GraduationCap,
  Users,
  Rocket,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { supabase } from "@/lib/supabase";

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
  type: "single" | "multi" | "grid" | "textarea";
  options?: StepOption[];
  placeholder?: string;
}

const steps: Step[] = [
  {
    id: 1,
    icon: Target,
    title: "¿Para qué necesitas tu LLC en USA?",
    subtitle: "El motivo principal define qué setup te conviene",
    type: "grid",
    options: [
      { id: "stripe", label: "Cobrar con Stripe internacional", description: "Vender en dólares a clientes globales", icon: CreditCard },
      { id: "ecommerce", label: "Vender productos online", description: "Shopify, Amazon, dropshipping en USD", icon: ShoppingCart },
      { id: "freelance", label: "Facturar como freelance/agencia", description: "Cobrar a clientes USA en dólares", icon: Briefcase },
      { id: "scale", label: "Escalar mi negocio actual", description: "Cuenta Mercury + estructura legal seria", icon: TrendingUp },
      { id: "protect", label: "Proteger activos / impuestos", description: "Estructura legal + optimización fiscal", icon: Shield },
      { id: "saas", label: "Lanzar SaaS o producto digital", description: "Stripe + infra USA para tu app", icon: Bot },
    ],
  },
  {
    id: 2,
    icon: Briefcase,
    title: "¿En qué estado está tu negocio hoy?",
    subtitle: "Esto define la urgencia y el setup ideal",
    type: "single",
    options: [
      { id: "idea", label: "Solo tengo la idea", description: "Aún no he empezado a vender", icon: Sparkles },
      { id: "starting", label: "Empezando — primeras ventas", description: "Facturando menos de $2K USD/mes", icon: Rocket },
      { id: "growing", label: "Negocio creciendo", description: "Facturando $2K - $10K USD/mes", icon: TrendingUp },
      { id: "scaling", label: "Negocio establecido", description: "Facturando $10K+ USD/mes — urge formalizar", icon: Crown },
    ],
  },
  {
    id: 3,
    icon: DollarSign,
    title: "¿Cuál es tu volumen mensual esperado en USD?",
    subtitle: "Stripe y Mercury tienen requisitos según volumen",
    type: "single",
    options: [
      { id: "under-2k", label: "Menos de $2,000 USD/mes", description: "Recién empezando", icon: DollarSign },
      { id: "2k-10k", label: "$2,000 - $10,000 USD/mes", description: "Negocio en crecimiento", icon: DollarSign },
      { id: "10k-50k", label: "$10,000 - $50,000 USD/mes", description: "Operación seria", icon: DollarSign },
      { id: "50k-plus", label: "$50,000+ USD/mes", description: "Negocio enterprise — máxima prioridad", icon: Crown },
    ],
  },
  {
    id: 4,
    icon: FileText,
    title: "¿Qué necesitas en tu paquete?",
    subtitle: "Selecciona todo lo que apliques — armamos tu setup completo",
    type: "multi",
    options: [
      { id: "llc", label: "LLC en Wyoming o Florida", description: "Empresa registrada legalmente en USA", icon: Building2 },
      { id: "ein", label: "EIN del IRS", description: "Tax ID para abrir bancos y operar", icon: FileText },
      { id: "mercury", label: "Cuenta Mercury Bank", description: "Banco USA 100% online, sin viajar", icon: Banknote },
      { id: "stripe", label: "Activación de Stripe USA", description: "Cobrar dólares con tarjetas internacionales", icon: CreditCard },
      { id: "ra", label: "Registered Agent", description: "Domicilio legal en el estado de tu LLC", icon: MapPin },
      { id: "fiscal", label: "Asesoría fiscal USA", description: "Cómo declarar y optimizar impuestos legalmente", icon: GraduationCap },
      { id: "itin", label: "Tramite de ITIN", description: "Para casos especiales sin EIN", icon: FileText },
      { id: "address", label: "Dirección comercial USA", description: "Mail forwarding y dirección de oficina", icon: Globe },
    ],
  },
  {
    id: 5,
    icon: Shield,
    title: "¿Tienes pasaporte vigente?",
    subtitle: "Mercury Bank y otras instituciones lo requieren",
    type: "single",
    options: [
      { id: "yes-valid", label: "Sí, vigente por +6 meses", description: "Listo para operar", icon: CheckCircle },
      { id: "yes-soon", label: "Sí, pero vence pronto", description: "Lo renovaré antes del proceso", icon: Clock },
      { id: "no", label: "No tengo o está vencido", description: "Lo tramitaré — podemos esperar", icon: Sparkles },
      { id: "other-doc", label: "Tengo cédula / DNI únicamente", description: "Vemos qué opciones aplican", icon: FileText },
    ],
  },
  {
    id: 6,
    icon: Sparkles,
    title: "Cuéntanos tu situación en detalle",
    subtitle: "Mientras más contexto nos des, mejor podemos asesorarte (opcional)",
    type: "textarea",
    placeholder: "Ej: Tengo una agencia de marketing en México, factura $8K USD/mes a clientes de USA pero me pagan por transferencia internacional con comisiones altas. Quiero abrir LLC para cobrar con Stripe y dejar de pagar tantas comisiones...",
  },
  {
    id: 7,
    icon: DollarSign,
    title: "¿Cuál es tu presupuesto?",
    subtitle: "Tenemos paquetes desde lo básico hasta llave en mano completo",
    type: "single",
    options: [
      { id: "under-1.5k", label: "Hasta $1,500 USD", description: "Paquete Standard — LLC + EIN + RA + Mercury + Stripe", icon: Target },
      { id: "1.5k-2.5k", label: "$1,500 - $2,500 USD", description: "Paquete Pro — incluye onboarding fiscal", icon: Sparkles },
      { id: "2.5k-3k", label: "$2,500 - $3,000 USD", description: "Bundle Granja + LLC — empieza a generar de inmediato", icon: Zap },
      { id: "3k-plus", label: "$3,000+ USD", description: "Setup premium completo + consultoría", icon: Crown },
      { id: "not-sure", label: "No estoy seguro", description: "Necesito que me asesoren primero", icon: GraduationCap },
    ],
  },
  {
    id: 8,
    icon: Clock,
    title: "¿Cuándo quieres tener tu empresa lista?",
    subtitle: "El proceso completo toma ~7 días hábiles",
    type: "single",
    options: [
      { id: "now", label: "Ahora mismo", description: "Estoy listo para arrancar esta semana", icon: Rocket },
      { id: "week", label: "Esta semana", description: "Necesito unos días para organizarme", icon: Zap },
      { id: "month", label: "Este mes", description: "Estoy planeando y reuniendo capital", icon: Target },
      { id: "exploring", label: "Solo estoy explorando", description: "Quiero informarme antes de decidir", icon: Sparkles },
    ],
  },
  {
    id: 9,
    icon: MapPin,
    title: "¿Desde qué país nos escribes?",
    subtitle: "Trabajamos con LATAM y residentes no-USA",
    type: "single",
    options: [
      { id: "peru", label: "Perú", description: "Cliente local", icon: MapPin },
      { id: "argentina", label: "Argentina", description: "Cliente LATAM", icon: MapPin },
      { id: "rd", label: "República Dominicana", description: "Cliente LATAM", icon: MapPin },
      { id: "mexico", label: "México", description: "Cliente LATAM", icon: MapPin },
      { id: "colombia", label: "Colombia", description: "Cliente LATAM", icon: MapPin },
      { id: "chile", label: "Chile", description: "Cliente LATAM", icon: MapPin },
      { id: "venezuela", label: "Venezuela", description: "Cliente LATAM", icon: MapPin },
      { id: "otro", label: "Otro país", description: "Consultar disponibilidad", icon: Globe },
    ],
  },
];

const scoreMap: Record<string, Record<string, number>> = {
  "1": { idea: 5, starting: 10, growing: 20, scaling: 30 },
  "2": { "under-2k": 5, "2k-10k": 15, "10k-50k": 25, "50k-plus": 30 },
  "6": { "under-1.5k": 10, "1.5k-2.5k": 20, "2.5k-3k": 25, "3k-plus": 30, "not-sure": 5 },
  "7": { now: 30, week: 20, month: 10, exploring: -10 },
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

const EmpresaUSA = () => {
  const [configuratorStarted, setConfiguratorStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<number, string[]>>({});
  const [textAnswers, setTextAnswers] = useState<Record<number, string>>({});
  const [finished, setFinished] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const configuratorRef = useRef<HTMLDivElement>(null);

  const progress = ((currentStep + 1) / steps.length) * 100;
  const step = steps[currentStep];
  const currentSelections = selections[currentStep] || [];
  const currentText = textAnswers[currentStep] || "";
  const hasSelection =
    step.type === "textarea" ? true : currentSelections.length > 0;

  const fbEvent = (event: string, params?: Record<string, any>) => {
    if (typeof window.fbq === "function") {
      window.fbq("track", event, params);
    }
  };

  const handleStartConfigurator = () => {
    setConfiguratorStarted(true);
    fbEvent("StartQuiz", { content_name: "Configurador LLC USA" });
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
      fbEvent("CompleteRegistration", { content_name: "Quiz LLC USA Completado" });
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
    "Analizando tu perfil empresarial...",
    "Seleccionando estado óptimo (Wyoming / Florida)...",
    "Calculando paquete ideal...",
    "Preparando tu propuesta llave en mano...",
    "Asignando especialista LLC...",
  ];

  const getSummary = () => {
    const reason = steps[0].options?.find((o) => selections[0]?.includes(o.id))?.label || "";
    const status = steps[1].options?.find((o) => selections[1]?.includes(o.id))?.label || "";
    const volume = steps[2].options?.find((o) => selections[2]?.includes(o.id))?.label || "";
    const includes = (selections[3] || []).map((id) => steps[3].options?.find((o) => o.id === id)?.label).filter(Boolean);
    const passport = steps[4].options?.find((o) => selections[4]?.includes(o.id))?.label || "";
    const detail = textAnswers[5] || "";
    const budget = steps[6].options?.find((o) => selections[6]?.includes(o.id))?.label || "";
    const timeline = steps[7].options?.find((o) => selections[7]?.includes(o.id))?.label || "";
    const country = steps[8].options?.find((o) => selections[8]?.includes(o.id))?.label || "";
    return { reason, status, volume, includes, passport, detail, budget, timeline, country };
  };

  useEffect(() => {
    if (processing) {
      fbEvent("Lead", { content_name: "Quiz LLC USA Finalizado" });

      const summary = getSummary();
      const score = calculateScore(selections);
      // Los leads de la landing LLC se guardan en quiz_submissions (la tabla que
      // muestra el panel Admin) para que los closers los vean. Las columnas núcleo
      // mapean a columnas reales; el detalle específico de LLC (incl. email) va en
      // `selections` (jsonb que el Admin ignora). source = "Landing LLC USA" para
      // distinguirlos de los leads de granjas.
      supabase
        .from("quiz_submissions")
        .insert({
          name: contactName,
          phone: contactPhone,
          country: summary.country,
          timeline: summary.timeline,
          budget: summary.budget,
          score,
          source: "Landing LLC USA",
          selections: {
            tipo: "llc",
            email: contactEmail,
            reason: summary.reason,
            business_status: summary.status,
            monthly_volume: summary.volume,
            included_services: summary.includes,
            passport_status: summary.passport,
            detail_description: summary.detail,
            raw_selections: selections,
            text_answers: textAnswers,
          },
        })
        .then(({ error }) => {
          if (error) console.error("Error guardando lead LLC:", error);
        });

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

  // RESULTADO
  if (showResult) {
    const summary = getSummary();
    const score = calculateScore(selections);
    const budgetId = selections[6]?.[0] || "";

    // Recomendación de paquete según presupuesto
    let recommendedPackage = "Standard — $1,497";
    let packageDescription = "LLC + EIN + Registered Agent + Mercury Bank + Stripe";
    let packageFeatures = [
      "LLC registrada en Wyoming o Florida",
      "EIN del IRS (Tax ID)",
      "Registered Agent por 1 año",
      "Apertura de cuenta Mercury Bank",
      "Activación de Stripe USA",
      "Entrega en 7-14 días hábiles",
    ];

    if (budgetId === "1.5k-2.5k") {
      recommendedPackage = "Pro — $2,497";
      packageDescription = "Standard + onboarding fiscal + 3 meses consultoría";
      packageFeatures = [
        "Todo lo del paquete Standard",
        "Onboarding fiscal personalizado",
        "Asesoría sobre Form 5472 y Form 1120",
        "3 meses de consultoría empresarial",
        "Setup de contabilidad básica",
        "Soporte prioritario",
      ];
    } else if (budgetId === "2.5k-3k" || budgetId === "3k-plus") {
      recommendedPackage = "Bundle Granja + LLC — $3,000";
      packageDescription = "Todo el paquete Pro + Granja de Bots para empezar a generar ingresos en USD";
      packageFeatures = [
        "Paquete Pro completo (LLC + EIN + Mercury + Stripe + asesoría)",
        "Granja de Bots configurada con tu LLC",
        "Cobranza inmediata en dólares vía Stripe",
        "Consultoría integral granja + empresa",
        "Capacitación de operación",
        "ROI proyectado: 60-90 días",
      ];
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
              <span className="text-sm font-bold tracking-wider uppercase text-cyan">Tu paquete ideal está listo</span>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glow-text-double uppercase leading-tight max-w-4xl mx-auto"
              style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
            >
              Tu Empresa en <span className="text-primary font-bold">USA</span> Lista en 7 días
            </h1>

            <p className="text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Hemos analizado tu situación. Agenda una llamada con nuestro equipo para arrancar el proceso hoy mismo.
            </p>

            {/* Paquete recomendado */}
            <div className="glass-card-3d rounded-2xl p-6 md:p-10 max-w-3xl mx-auto border-2 border-cyan/40 mb-12 text-left shadow-[0_0_40px_rgba(0,122,191,0.15)]">
              <div className="text-center mb-6">
                <p className="text-xs text-cyan uppercase tracking-widest font-bold mb-2">Recomendación para ti</p>
                <h2
                  className="text-3xl md:text-4xl font-bold uppercase tracking-wider"
                  style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
                >
                  Paquete <span className="text-primary glow-text">{recommendedPackage}</span>
                </h2>
                <p className="text-sm text-muted-foreground mt-2">{packageDescription}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-3 mt-6">
                {packageFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 border border-primary/10">
                    <CheckCircle className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-white">{feat}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Resumen del perfil */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
              {[
                { label: "Objetivo", value: summary.reason, icon: Target },
                { label: "Estado actual", value: summary.status, icon: Briefcase },
                { label: "Volumen", value: summary.volume, icon: DollarSign },
                { label: "Cuándo", value: summary.timeline, icon: Clock },
              ].map((card, i) => (
                <div
                  key={i}
                  className="glass-card-3d rounded-xl p-4 border border-cyan/20 text-center animate-fade-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <card.icon className="w-5 h-5 text-cyan mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">{card.label}</p>
                  <p className="text-sm font-bold text-white mt-1">{card.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-4 mb-8">
              <a
                href={AGENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => fbEvent("Schedule", { content_name: "LLC USA", score })}
              >
                <Button
                  size="lg"
                  className="relative text-lg px-10 py-7 bg-primary hover:bg-cyan text-primary-foreground font-bold tracking-wider uppercase animate-halo group overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Agendar Llamada con el Equipo
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />
                </Button>
              </a>
              <span className="text-sm text-muted-foreground">
                Revisamos contigo el plan, el cronograma y arrancamos el proceso esta semana.
              </span>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // FORM CONTACTO
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
              <h2
                className="text-3xl md:text-4xl font-bold mb-3 uppercase tracking-wider"
                style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
              >
                ¿A dónde te enviamos <span className="text-primary">tu plan?</span>
              </h2>
              <p className="text-muted-foreground mb-8">Déjanos tus datos y agendamos el arranque del proceso</p>

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
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wide mb-1 block">Email (opcional)</label>
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="tucorreo@ejemplo.com"
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
                  Recibir Mi Plan LLC
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />
              </Button>

              <button
                onClick={() => {
                  setShowContactForm(false);
                  setCurrentStep(steps.length - 1);
                }}
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

  // PROCESANDO
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
                <div
                  className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-cyan animate-spin"
                  style={{ animationDuration: "1s" }}
                />
                <div className="absolute inset-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-primary animate-pulse" />
                </div>
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider"
                style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
              >
                Diseñando tu empresa USA...
              </h2>
              <p className="text-cyan text-lg font-medium animate-pulse">{processingSteps[processingStep]}</p>
              <div className="mt-8 max-w-xs mx-auto">
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-cyan rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${((processingStep + 1) / processingSteps.length) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {processingStep + 1} de {processingSteps.length}
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // LANDING + QUIZ
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Tu Empresa en USA Llave en Mano — LLC + EIN + Mercury + Stripe"
        description="Abrimos tu LLC en USA en 7 días. Incluye EIN del IRS, cuenta Mercury Bank y activación de Stripe. Cobra en dólares desde LATAM sin viajar."
        path="/landing/empresa-usa"
      />
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 rounded-full blur-[150px] animate-glow-pulse" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 z-10 pt-24 pb-16">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium tracking-wider uppercase text-primary">
                Servicio LLC USA — Scaling LATAM
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 uppercase leading-tight glow-text-double animate-glow-dynamic"
              style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
            >
              Tu empresa en <span className="text-primary">USA</span> en 7 días
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed max-w-2xl mx-auto">
              LLC + EIN del IRS + Cuenta Mercury Bank + Stripe activado. Sin viajar a USA. Sin papeleos eternos. Sin tener que entender de leyes gringas.
            </p>

            <p className="text-base text-white mb-10 max-w-2xl mx-auto font-medium">
              Cobra en dólares como una empresa real. Vende en Stripe, recibe a Mercury, escala sin fronteras. Responde 9 preguntas y recibe tu plan a medida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleStartConfigurator}
                className="relative text-lg px-10 py-7 bg-primary hover:bg-cyan text-primary-foreground font-bold tracking-wider uppercase animate-halo group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Diseñar Mi LLC
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />
              </Button>
              <a href={AGENDAR_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 py-7 border-primary/30 hover:bg-primary/10 font-bold tracking-wider uppercase w-full sm:w-auto"
                >
                  Hablar con un Asesor
                </Button>
              </a>
            </div>

            <div className="flex justify-center gap-8 mt-12 flex-wrap">
              {[
                { value: "7 días", label: "proceso completo" },
                { value: "$200K+", label: "facturado con Stripe" },
                { value: "0", label: "viajes necesarios" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-2xl font-bold text-primary glow-text">{s.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-wider"
              style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
            >
              Qué <span className="text-primary glow-text">incluye</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Todo lo que necesitas para operar legalmente como empresa USA
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Building2, title: "LLC en Wyoming o Florida", desc: "Empresa registrada en USA con la mejor estructura fiscal y legal para no-residentes." },
              { icon: FileText, title: "EIN del IRS", desc: "Tu Tax ID oficial. Sin EIN no abres bancos, ni Stripe, ni operas legalmente." },
              { icon: Banknote, title: "Cuenta Mercury Bank", desc: "Banco USA 100% online. Sin requisitos absurdos. Te ayudamos en el onboarding." },
              { icon: CreditCard, title: "Stripe USA Activado", desc: "Cobra tarjetas internacionales en dólares. Comisiones bajas. Sin restricciones LATAM." },
              { icon: MapPin, title: "Registered Agent", desc: "Domicilio legal en USA por 1 año. Recibe notificaciones oficiales en tu lugar." },
              { icon: Shield, title: "Asesoría Fiscal", desc: "Te explicamos Form 5472, 1120 y cómo declarar legalmente sin pagar impuestos USA." },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-card-3d rounded-2xl p-6 border border-primary/20 hover:border-cyan/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group animate-fade-in relative overflow-hidden"
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
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-wider"
              style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
            >
              Paquetes <span className="text-primary glow-text">disponibles</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Tres opciones según tu nivel y objetivos</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Standard",
                price: "$1,497",
                desc: "Todo lo esencial para operar",
                features: ["LLC en Wyoming o Florida", "EIN del IRS", "Registered Agent 1 año", "Cuenta Mercury Bank", "Activación Stripe", "Entrega 7-14 días"],
                highlight: false,
              },
              {
                name: "Pro",
                price: "$2,497",
                desc: "Lo más completo + consultoría",
                features: ["Todo lo del Standard", "Onboarding fiscal completo", "Asesoría Form 5472 y 1120", "3 meses de consultoría", "Setup contabilidad básica", "Soporte prioritario"],
                highlight: true,
              },
              {
                name: "Bundle Granja",
                price: "$3,000",
                desc: "LLC + Granja de Bots operativa",
                features: ["Todo lo del Pro", "Granja configurada a tu LLC", "Cobrar en USD desde día 1", "Capacitación operación", "ROI proyectado 60-90 días", "Consultoría integral"],
                highlight: false,
              },
            ].map((pkg, i) => (
              <div
                key={i}
                className={`glass-card-3d rounded-2xl p-6 border transition-all duration-300 hover:scale-105 animate-fade-in ${
                  pkg.highlight
                    ? "border-cyan/60 shadow-[0_0_40px_rgba(0,122,191,0.2)] relative"
                    : "border-primary/20 hover:border-cyan/50"
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyan rounded-full text-xs font-bold uppercase tracking-wider text-background">
                    Más elegido
                  </div>
                )}
                <h3
                  className="text-2xl font-bold uppercase tracking-wider mb-2"
                  style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
                >
                  {pkg.name}
                </h3>
                <p className="text-4xl font-bold text-primary glow-text mb-2" style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}>
                  {pkg.price}
                </p>
                <p className="text-sm text-muted-foreground mb-6">{pkg.desc}</p>
                <div className="space-y-2 mb-6">
                  {pkg.features.map((feat, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-white/90">{feat}</p>
                    </div>
                  ))}
                </div>
                <Button
                  onClick={handleStartConfigurator}
                  className={`w-full font-bold tracking-wider uppercase ${
                    pkg.highlight ? "bg-primary hover:bg-cyan text-primary-foreground" : "bg-muted/30 hover:bg-primary/20 text-white border border-primary/30"
                  }`}
                >
                  Elegir {pkg.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-wider"
              style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
            >
              Cómo <span className="text-primary glow-text">funciona</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">De cero a empresa USA operativa en 7 días</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { num: "01", title: "Quiz + Llamada", desc: "Completas el quiz y agendamos una llamada de 30 min para validar tu setup ideal." },
              { num: "02", title: "Registro LLC", desc: "Tramitamos tu LLC en Wyoming o Florida. Te enviamos los documentos oficiales." },
              { num: "03", title: "EIN + Banco", desc: "Solicitamos el EIN del IRS y te acompañamos en la apertura de Mercury Bank." },
              { num: "04", title: "Stripe Activo", desc: "Activamos tu cuenta Stripe USA. Empiezas a cobrar en dólares de inmediato." },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-card-3d rounded-2xl p-6 border border-primary/20 hover:border-cyan/50 transition-all animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <p
                  className="text-4xl font-bold text-primary mb-3 glow-text"
                  style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
                >
                  {item.num}
                </p>
                <h3
                  className="text-lg font-bold uppercase tracking-wider mb-2"
                  style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIGURADOR */}
      <div ref={configuratorRef}>
        {configuratorStarted && !finished && (
          <section className="py-20 md:py-28 relative" id="configurador">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-4 z-10 max-w-3xl relative">
              <div className="text-center mb-10">
                <h2
                  className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-2"
                  style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
                >
                  Diseña tu <span className="text-primary glow-text">LLC</span>
                </h2>
                <p className="text-muted-foreground">9 preguntas rápidas para armar tu setup ideal</p>
              </div>

              <div className="mb-10">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-muted-foreground">
                    Paso {currentStep + 1} de {steps.length}
                  </span>
                  <span className="text-sm text-primary font-semibold">{Math.round(progress)}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500 ease-out"
                    style={{
                      width: `${progress}%`,
                      background: "linear-gradient(90deg, hsl(204 100% 37%), hsl(204 67% 61%))",
                      boxShadow: "0 0 15px hsl(204 100% 37% / 0.5)",
                    }}
                  />
                </div>
              </div>

              <div className="glass-card-3d rounded-2xl p-8 md:p-12 border border-primary/20 animate-fade-in">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2
                      className="text-2xl md:text-3xl font-bold uppercase tracking-wider"
                      style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
                    >
                      {step.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">{step.subtitle}</p>
                  </div>
                </div>

                {step.type === "textarea" ? (
                  <div>
                    <textarea
                      value={currentText}
                      onChange={(e) =>
                        setTextAnswers((prev) => ({ ...prev, [currentStep]: e.target.value }))
                      }
                      placeholder={step.placeholder}
                      rows={8}
                      autoFocus
                      className="w-full px-4 py-4 rounded-xl bg-muted/30 border border-primary/20 text-white placeholder:text-muted-foreground focus:outline-none focus:border-cyan transition-colors resize-none text-sm md:text-base leading-relaxed"
                    />
                    <p className="text-xs text-muted-foreground mt-2 text-right">
                      Campo opcional · {currentText.length} caracteres
                    </p>
                  </div>
                ) : (
                  <div className={step.type === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "space-y-4"}>
                    {step.options?.map((option) => {
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
                                isSelected ? "bg-cyan/20" : "bg-muted/50 group-hover:bg-primary/10"
                              }`}
                            >
                              <OptionIcon
                                className={`w-5 h-5 transition-colors ${
                                  isSelected ? "text-cyan" : "text-muted-foreground group-hover:text-primary"
                                }`}
                              />
                            </div>
                            <div>
                              <span
                                className={`text-sm md:text-base font-semibold transition-colors block ${
                                  isSelected ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                                }`}
                              >
                                {option.label}
                              </span>
                              <span className="text-xs text-muted-foreground mt-1 block">{option.description}</span>
                            </div>
                            {step.type === "multi" && (
                              <div
                                className={`ml-auto w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                                  isSelected ? "border-cyan bg-cyan" : "border-muted-foreground/40"
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
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </div>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}

                {step.type === "multi" && (
                  <p className="text-xs text-muted-foreground mt-3 text-center">Puedes seleccionar varias opciones</p>
                )}

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
                      {currentStep === steps.length - 1 ? "Ver Mi Plan" : "Siguiente"}
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

        {!configuratorStarted && (
          <section className="py-20 md:py-28 relative">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] animate-glow-pulse" />
            </div>
            <div className="container mx-auto px-4 relative z-10 text-center">
              <h2
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 uppercase tracking-wider max-w-4xl mx-auto"
                style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
              >
                ¿Listo para cobrar en <span className="text-primary glow-text">dólares?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                Diseña tu LLC en 2 minutos o agenda una llamada directa con un asesor del equipo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={handleStartConfigurator}
                  className="relative text-lg px-10 py-7 bg-primary hover:bg-cyan text-primary-foreground font-bold tracking-wider uppercase animate-halo group overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Empezar el Quiz
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />
                </Button>
                <a href={AGENDAR_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-10 py-7 border-primary/30 hover:bg-primary/10 font-bold tracking-wider uppercase"
                  >
                    Hablar con Asesor
                  </Button>
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Respuesta en 24h · Sin compromiso · Equipo en LATAM y USA
              </p>
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default EmpresaUSA;
