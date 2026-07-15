import { useState } from "react";
import {
  MessageSquare, Bot, Zap, Clock, Filter, Send, Store, BarChart3, ShoppingBag, Users, TrendingUp,
  ArrowRight, ArrowLeft, CheckCircle, DollarSign, Target, Sparkles, MessagesSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LandingTemplate from "@/components/LandingTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { supabase } from "@/lib/supabase";

const AGENDAR_URL = "/agendar";

interface QuizOption {
  id: string;
  label: string;
  description: string;
  icon: React.ElementType;
}
interface QuizStep {
  id: number;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  options: QuizOption[];
}

const quizSteps: QuizStep[] = [
  {
    id: 1,
    icon: MessagesSquare,
    title: "¿Con cuántos mensajes respondes al día?",
    subtitle: "Cuéntanos el volumen que manejas en Marketplace",
    options: [
      { id: "menos-20", label: "Menos de 20", description: "Estoy empezando a recibir mensajes", icon: MessageSquare },
      { id: "20-50", label: "20 - 50", description: "Ya tengo movimiento constante", icon: MessageSquare },
      { id: "50-100", label: "50 - 100", description: "Recibo muchos y se me escapan algunos", icon: MessagesSquare },
      { id: "mas-100", label: "Más de 100", description: "Es imposible responderlos todos a mano", icon: MessagesSquare },
    ],
  },
  {
    id: 2,
    icon: DollarSign,
    title: "¿Cuánto inviertes al día en publicidad digital?",
    subtitle: "Anuncios en Facebook, Instagram o Marketplace",
    options: [
      { id: "nada", label: "Nada aún", description: "Vendo solo con publicaciones orgánicas", icon: Target },
      { id: "1-20", label: "$1 - $20", description: "Invierto poco para empezar", icon: DollarSign },
      { id: "20-100", label: "$20 - $100", description: "Ya invierto en escalar mis ventas", icon: DollarSign },
      { id: "mas-100", label: "Más de $100", description: "Invierto fuerte y necesito aprovechar cada lead", icon: TrendingUp },
    ],
  },
  {
    id: 3,
    icon: Sparkles,
    title: "¿Qué opción resuelve mejor tu problema actualmente?",
    subtitle: "Elige lo que más te duele hoy",
    options: [
      { id: "responder-rapido", label: "Responder más rápido", description: "Contestar al instante a cada comprador", icon: Zap },
      { id: "no-perder", label: "No perder mensajes de madrugada", description: "Atender aunque no esté frente al celular", icon: Clock },
      { id: "filtrar", label: "Filtrar curiosos", description: "Hablar solo con compradores reales", icon: Filter },
      { id: "escalar", label: "Escalar sin contratar", description: "Vender más sin ampliar mi equipo", icon: TrendingUp },
    ],
  },
];

const LandingTrustFace = () => {
  const [view, setView] = useState<"landing" | "quiz" | "form" | "done">("landing");
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const step = quizSteps[currentStep];
  const selected = answers[currentStep];
  const progress = ((currentStep + 1) / quizSteps.length) * 100;

  const fbEvent = (event: string, params?: Record<string, any>) => {
    if (typeof window.fbq === "function") window.fbq("track", event, params);
  };

  const startQuiz = () => {
    setView("quiz");
    setCurrentStep(0);
    fbEvent("StartQuiz", { content_name: "Quiz TrustFace Marketplace" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelect = (optionId: string) => {
    setAnswers((prev) => ({ ...prev, [currentStep]: optionId }));
  };

  const handleNext = () => {
    if (!selected) return;
    if (currentStep < quizSteps.length - 1) {
      setCurrentStep((s) => s + 1);
      fbEvent("QuizStep", { step: currentStep + 2, step_name: quizSteps[currentStep + 1]?.title });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setView("form");
      fbEvent("CompleteRegistration", { content_name: "Quiz TrustFace Completado" });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const getSummary = () => ({
    mensajes: quizSteps[0].options.find((o) => o.id === answers[0])?.label || "",
    inversion: quizSteps[1].options.find((o) => o.id === answers[1])?.label || "",
    problema: quizSteps[2].options.find((o) => o.id === answers[2])?.label || "",
  });

  const handleContactSubmit = () => {
    if (!contactName.trim() || !contactPhone.trim()) return;
    const summary = getSummary();

    fbEvent("Lead", { content_name: "Quiz TrustFace Finalizado" });

    // Guardar lead en Supabase (no bloqueante — si no hay conexión, el flujo continúa)
    try {
      supabase
        ?.from("quiz_submissions")
        .insert({
          name: contactName,
          phone: contactPhone,
          source: "TrustFace · Marketplace",
          selections: { mensajes_dia: summary.mensajes, inversion_ads_dia: summary.inversion, problema_principal: summary.problema },
        })
        .then(() => {}, (err) => console.warn("Supabase insert failed:", err));
    } catch (err) {
      console.warn("Supabase no disponible:", err);
    }

    // Notificar al CRM (bot de WhatsApp) — no bloqueante
    try {
      const normalizeWhatsapp = (raw: string): string => {
        const cleaned = (raw || "").replace(/[^\d+]/g, "");
        if (!cleaned) return "";
        if (cleaned.startsWith("+")) return cleaned;
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
            producto_interes: "TrustFace — Automatización de Marketplace",
            respuestas: summary,
          }),
        }).catch((err) => console.warn("CRM webhook failed (no bloqueante):", err));
      }
    } catch (err) {
      console.warn("CRM webhook error:", err);
    }

    setView("done");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ═══════════════════════ QUIZ ═══════════════════════
  if (view === "quiz") {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SEO title="TrustFace — Automatiza tus respuestas en Marketplace" description="Descubre cómo TrustFace puede automatizar la atención de tus ventas en Facebook Marketplace." path="/landing/trustface" />
        <Navbar />
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
          </div>
          <div className="container mx-auto px-4 z-10 max-w-3xl relative">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-2" style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}>
                Diagnóstico <span className="text-primary glow-text">TrustFace</span>
              </h2>
              <p className="text-muted-foreground">3 preguntas rápidas para encontrar tu mejor solución</p>
            </div>

            {/* Progress */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-muted-foreground">Paso {currentStep + 1} de {quizSteps.length}</span>
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

              <div className="space-y-4">
                {step.options.map((option) => {
                  const isSelected = selected === option.id;
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
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between mt-10">
                <button onClick={handleBack} disabled={currentStep === 0} className={`flex items-center gap-2 text-sm font-medium transition-colors ${currentStep === 0 ? "text-muted-foreground/30 cursor-not-allowed" : "text-muted-foreground hover:text-foreground"}`}>
                  <ArrowLeft className="w-4 h-4" /> Anterior
                </button>
                <Button onClick={handleNext} disabled={!selected} className={`relative px-8 py-6 font-bold tracking-wider uppercase group overflow-hidden transition-all ${!selected ? "bg-muted text-muted-foreground cursor-not-allowed" : "bg-primary hover:bg-cyan text-primary-foreground animate-halo"}`}>
                  <span className="relative z-10 flex items-center">
                    {currentStep === quizSteps.length - 1 ? "Ver mi solución" : "Siguiente"}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  {selected && <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />}
                </Button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // ═══════════════════════ FORMULARIO ═══════════════════════
  if (view === "form") {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 rounded-full blur-[80px]" />
          </div>
          <div className="container mx-auto px-4 z-10 text-center pt-24 pb-16">
            <div className="max-w-md mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan/40 bg-cyan/10 mb-6">
                <CheckCircle className="w-4 h-4 text-cyan" />
                <span className="text-xs font-bold tracking-wider uppercase text-cyan">Paso final</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 uppercase tracking-wider" style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}>
                ¿A dónde te enviamos <span className="text-primary">tu demo?</span>
              </h2>
              <p className="text-muted-foreground mb-8">Déjanos tus datos y te mostramos TrustFace funcionando con tu caso</p>

              <div className="space-y-4 text-left">
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wide mb-1 block">Nombre completo</label>
                  <input type="text" value={contactName} onChange={(e) => setContactName(e.target.value)} placeholder="Ej: Juan Pérez" className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-primary/20 text-white placeholder:text-muted-foreground focus:outline-none focus:border-cyan transition-colors" autoFocus />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wide mb-1 block">WhatsApp / Teléfono</label>
                  <input type="tel" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} placeholder="Ej: +51 999 888 777" className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-primary/20 text-white placeholder:text-muted-foreground focus:outline-none focus:border-cyan transition-colors" />
                </div>
              </div>

              <Button onClick={handleContactSubmit} disabled={!contactName.trim() || !contactPhone.trim()} size="lg" className="relative w-full mt-6 text-lg px-8 py-7 bg-primary hover:bg-cyan text-primary-foreground font-bold tracking-wider uppercase animate-halo group overflow-hidden disabled:opacity-40 disabled:cursor-not-allowed">
                <span className="relative z-10 flex items-center justify-center">
                  Ver mi demo
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />
              </Button>

              <button onClick={() => { setView("quiz"); setCurrentStep(quizSteps.length - 1); }} className="mt-4 text-sm text-muted-foreground hover:text-white transition-colors flex items-center justify-center gap-1 mx-auto">
                <ArrowLeft className="w-3 h-3" /> Volver al quiz
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // ═══════════════════════ RESULTADO ═══════════════════════
  if (view === "done") {
    const summary = getSummary();
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
              <CheckCircle className="w-5 h-5 text-cyan" />
              <span className="text-sm font-bold tracking-wider uppercase text-cyan">¡Listo, {contactName.split(" ")[0]}!</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text-double uppercase leading-tight max-w-4xl mx-auto" style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}>
              TrustFace es <span className="text-primary">justo lo que necesitas</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Con <strong className="text-cyan">{summary.mensajes.toLowerCase()}</strong> mensajes al día, TrustFace puede responderlos <strong className="text-cyan">todos automáticamente</strong> y ayudarte a <strong className="text-cyan">{summary.problema.toLowerCase()}</strong>. Agenda tu demo y velo funcionando con tu propia cuenta.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
              {[
                { label: "Mensajes/día", value: summary.mensajes, icon: MessagesSquare },
                { label: "Inversión en ads/día", value: summary.inversion, icon: DollarSign },
                { label: "Tu prioridad", value: summary.problema, icon: Target },
              ].map((card, i) => (
                <div key={i} className="glass-card-3d rounded-xl p-4 border border-cyan/20 text-center animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <card.icon className="w-5 h-5 text-cyan mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">{card.label}</p>
                  <p className="text-sm font-bold text-white mt-1">{card.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-4">
              <Button asChild size="lg" className="relative text-lg px-10 py-7 bg-primary hover:bg-cyan text-primary-foreground font-bold tracking-wider uppercase animate-halo group overflow-hidden">
                <a href={AGENDAR_URL} onClick={() => fbEvent("Schedule", { content_name: "Demo TrustFace" })}>
                  <span className="relative z-10 flex items-center">
                    Agendar mi demo ahora
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />
                </a>
              </Button>
              <span className="text-sm text-muted-foreground">Demo personalizada · Sin compromiso · 15 minutos</span>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // ═══════════════════════ LANDING ═══════════════════════
  return (
    <LandingTemplate
      onCtaClick={startQuiz}
      badge="TrustFace · Automatización de Facebook Marketplace"
      headlineTop="AUTOMATIZA TUS RESPUESTAS EN"
      headlineHighlight="MARKETPLACE"
      subheadline="TrustFace responde automáticamente cada mensaje de tus publicaciones en Facebook Marketplace — en segundos, 24/7. Deja de perder compradores por no contestar a tiempo y cierra más ventas en piloto automático."
      ctaText="Agenda tu demo gratis"
      ctaSubtext="Responde 3 preguntas y descubre tu mejor solución"
      finalCtaButtonText="Quiero automatizar mis ventas"
      stats={[
        { value: "24/7", label: "Respondiendo por ti" },
        { value: "<10s", label: "Tiempo de respuesta" },
        { value: "+300%", label: "Más conversaciones" },
        { value: "100%", label: "Mensajes atendidos" },
      ]}
      featuresTitle="Todo lo que hace"
      featuresHighlight="TrustFace"
      features={[
        { icon: Zap, title: "Respuesta instantánea", description: "Cada persona que escribe a tu publicación recibe respuesta en segundos, incluso de madrugada. El comprador nunca se enfría esperando." },
        { icon: Bot, title: "IA que vende como humano", description: "Respuestas naturales y personalizadas según el producto y la pregunta. Precio, stock, envío, ubicación — todo contestado sin que muevas un dedo." },
        { icon: Store, title: "Multi-publicación y multi-cuenta", description: "Gestiona todas tus publicaciones y varias cuentas de Facebook desde un solo lugar. Escala tu operación sin contratar más personas." },
        { icon: Filter, title: "Filtra compradores reales", description: "TrustFace califica a cada interesado y separa a los compradores serios de los curiosos. Tú solo hablas con quien de verdad quiere comprar." },
        { icon: Send, title: "Deriva al cierre en WhatsApp", description: "Cuando el comprador está listo, TrustFace lo pasa a tu WhatsApp con toda la conversación lista para cerrar la venta." },
        { icon: BarChart3, title: "Métricas y control total", description: "Dashboard con mensajes recibidos, respuestas, leads calificados y ventas derivadas. Sabes exactamente qué publicaciones venden." },
      ]}
      useCasesTitle="Para quién es"
      useCasesHighlight="TrustFace"
      useCases={[
        { icon: ShoppingBag, title: "Revendedores", description: "Vendes celulares, ropa, tecnología o cualquier producto por Marketplace. Recibes decenas de mensajes al día y no alcanzas a responderlos todos." },
        { icon: Users, title: "Tiendas y negocios", description: "Tu negocio depende de las ventas por Facebook. TrustFace atiende a cada cliente al instante y multiplica tus cierres sin ampliar tu equipo." },
        { icon: TrendingUp, title: "Emprendedores", description: "Estás empezando y no puedes estar pegado al celular todo el día. Automatiza la atención y enfócate en despachar y crecer." },
      ]}
      testimonials={[
        { name: "Kevin R.", role: "Revendedor de tecnología · Perú", text: "Antes se me escapaban clientes porque respondía tarde. Con TrustFace contesto al toque a todos y dupliqué mis ventas en un mes.", country: "🇵🇪" },
        { name: "Daniela M.", role: "Tienda de ropa · Colombia", text: "Recibo más de 60 mensajes diarios en Marketplace. TrustFace los responde todos y solo me pasa a WhatsApp a los que ya quieren comprar.", country: "🇨🇴" },
        { name: "Andrés G.", role: "Emprendedor · México", text: "Es como tener un vendedor trabajando 24 horas. Ni de madrugada pierdo una venta. La mejor inversión para mi negocio.", country: "🇲🇽" },
      ]}
      finalCtaTitle="Deja de perder ventas"
      finalCtaHighlight="por no responder"
      finalCtaSubtitle="TrustFace atiende cada mensaje de Marketplace por ti, 24/7 — responde 3 preguntas y agenda tu demo gratuita"
    />
  );
};

export default LandingTrustFace;
