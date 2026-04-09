import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Crown, Users, Sparkles, Shield, Target, DollarSign, Clock, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ──────────────────────────
   Sistema de puntuación
   - Máximo: 18 puntos (6 preguntas puntuadas × 3pts)
   - Califica: 12+ puntos
   - Filtro duro: pregunta 4 (capital) opciones c/d → no califica
   - Pregunta 7 es informativa (0pts)
   ────────────────────────── */

interface Option {
  text: string;
  points: number;
}

interface Question {
  id: number;
  icon: React.ElementType;
  question: string;
  subtitle: string;
  options: Option[];
}

const questions: Question[] = [
  {
    id: 1,
    icon: Target,
    question: "¿Cuál es tu situación actual?",
    subtitle: "Queremos entender en qué punto te encuentras",
    options: [
      { text: "Tengo un negocio funcionando y quiero escalar", points: 3 },
      { text: "Quiero abrir una nueva línea de negocio", points: 3 },
      { text: "Estoy explorando opciones de ingreso", points: 1 },
      { text: "Solo tengo curiosidad", points: 0 },
    ],
  },
  {
    id: 2,
    icon: Shield,
    question: "¿Qué tanto conoces sobre granjas de bots?",
    subtitle: "No importa tu nivel — tenemos soluciones para cada perfil",
    options: [
      { text: "Nada, pero me interesa aprender", points: 2 },
      { text: "He visto contenido al respecto", points: 2 },
      { text: "Ya tengo experiencia operando bots", points: 3 },
      { text: "No sé qué es eso", points: 0 },
    ],
  },
  {
    id: 3,
    icon: Sparkles,
    question: "¿Cuál es tu objetivo principal?",
    subtitle: "Esto nos ayuda a personalizar tu experiencia",
    options: [
      { text: "Generar ingresos recurrentes automatizados", points: 3 },
      { text: "Escalar mi negocio actual con automatización", points: 3 },
      { text: "Aprender sobre el modelo", points: 1 },
      { text: "No estoy seguro aún", points: 0 },
    ],
  },
  {
    id: 4,
    icon: DollarSign,
    question: "¿Cuánto capital tienes disponible para invertir?",
    subtitle: "Esto determina el tipo de programa ideal para ti",
    options: [
      { text: "Más de $5,000 USD", points: 3 },
      { text: "Entre $2,000 y $5,000 USD", points: 2 },
      { text: "Entre $500 y $2,000 USD", points: 1 },
      { text: "Menos de $500 USD", points: 0 },
    ],
  },
  {
    id: 5,
    icon: Clock,
    question: "¿Cuántas horas semanales puedes dedicar a este proyecto?",
    subtitle: "El éxito requiere dedicación — sé honesto contigo mismo",
    options: [
      { text: "Tiempo completo (+30 horas)", points: 3 },
      { text: "10 a 20 horas semanales", points: 2 },
      { text: "5 a 10 horas semanales", points: 1 },
      { text: "Menos de 5 horas", points: 0 },
    ],
  },
  {
    id: 6,
    icon: Crown,
    question: "¿Qué nivel de compromiso tienes con este proyecto?",
    subtitle: "Solo trabajamos con personas comprometidas",
    options: [
      { text: "Estoy listo para invertir y ejecutar", points: 3 },
      { text: "Estoy decidido pero necesito orientación", points: 2 },
      { text: "Me interesa pero aún tengo dudas", points: 1 },
      { text: "Solo estoy viendo opciones", points: 0 },
    ],
  },
  {
    id: 7,
    icon: MessageCircle,
    question: "¿Cómo te enteraste de Scaling?",
    subtitle: "Última pregunta — esto nos ayuda a mejorar",
    options: [
      { text: "Redes sociales (ads o contenido)", points: 0 },
      { text: "Recomendación de alguien", points: 0 },
      { text: "Búsqueda en internet", points: 0 },
      { text: "Otro", points: 0 },
    ],
  },
];

const QUALIFY_THRESHOLD = 12;
const CAPITAL_QUESTION_ID = 4;
const CAPITAL_DISQUALIFY_OPTIONS = [2, 3]; // índices de opciones c y d (0-based)

const SKOOL_URL = "https://www.skool.com/artificial-humans-7653";
const AGENDAR_URL = "https://calendly.com/d/328-gbq-zqx/reunion-de-asesoria-1-1-creacion-app";

const Quiz = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [processing, setProcessing] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setFinished(true);
      setProcessing(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      const newAnswers = [...answers];
      const previousAnswer = newAnswers.pop();
      setAnswers(newAnswers);
      setSelectedOption(previousAnswer ?? null);
    }
  };

  useEffect(() => {
    if (processing) {
      const timer = setTimeout(() => {
        setProcessing(false);
        setShowResult(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [processing]);

  const calculateResult = () => {
    let totalPoints = 0;
    answers.forEach((optionIndex, questionIndex) => {
      totalPoints += questions[questionIndex].options[optionIndex].points;
    });

    // Filtro duro: capital < $2,000
    const capitalAnswer = answers[CAPITAL_QUESTION_ID - 1];
    if (CAPITAL_DISQUALIFY_OPTIONS.includes(capitalAnswer)) {
      return { qualifies: false, points: totalPoints };
    }

    return { qualifies: totalPoints >= QUALIFY_THRESHOLD, points: totalPoints };
  };

  const question = questions[currentQuestion];
  const QuestionIcon = question?.icon;

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
              <Crown className="w-4 h-4 text-primary" />
              <span className="text-xs md:text-sm font-medium tracking-wider uppercase text-primary">
                Programa Privado · Cupos Limitados
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glow-text-double uppercase leading-tight max-w-5xl mx-auto animate-glow-dynamic"
              style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
            >
              ¿Calificas para el{" "}
              <span className="text-primary font-bold">Programa Privado</span>{" "}
              de Scaling?
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-white mb-4 max-w-3xl mx-auto font-light leading-relaxed">
              No trabajamos con cualquiera. Este programa está diseñado para
              emprendedores serios que quieren escalar con granjas de bots
              inteligentes.
            </p>

            <p className="text-base md:text-lg text-cyan mb-12 max-w-2xl mx-auto font-semibold">
              Completa esta evaluación de 7 preguntas y descubre si tu perfil es
              compatible.
            </p>

            <div className="flex flex-col items-center gap-4">
              <Button
                size="lg"
                onClick={() => setStarted(true)}
                className="relative text-lg px-8 py-7 bg-primary hover:bg-cyan text-primary-foreground font-bold tracking-wider uppercase animate-halo group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Comenzar Evaluación
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />
              </Button>
              <span className="text-sm text-muted-foreground">
                Toma menos de 2 minutos · 100% confidencial
              </span>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { value: "500+", label: "Evaluados" },
                { value: "1:1", label: "Asesoría privada" },
                { value: "Elite", label: "Solo perfiles serios" },
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
          </div>
        </section>
      )}

      {/* ═══ PREGUNTAS ═══ */}
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
                  Pregunta {currentQuestion + 1} de {questions.length}
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

            {/* Question card */}
            <div className="glass-card-3d rounded-2xl p-8 md:p-12 border border-primary/20 animate-fade-in">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-primary/10">
                  <QuestionIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2
                    className="text-2xl md:text-3xl font-bold uppercase tracking-wider"
                    style={{
                      fontFamily: "'Bebas Neue', 'Anton', sans-serif",
                    }}
                  >
                    {question.question}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    {question.subtitle}
                  </p>
                </div>
              </div>

              {/* Options */}
              <div className="space-y-4">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelect(index)}
                    className={`w-full text-left p-5 rounded-xl border transition-all duration-300 group ${
                      selectedOption === index
                        ? "border-cyan/70 bg-cyan/10 shadow-[0_0_25px_hsl(204_67%_61%/0.2)]"
                        : "border-primary/10 bg-muted/30 hover:border-primary/40 hover:bg-primary/5"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                          selectedOption === index
                            ? "border-cyan bg-cyan"
                            : "border-muted-foreground/40"
                        }`}
                      >
                        {selectedOption === index && (
                          <div className="w-2 h-2 rounded-full bg-white" />
                        )}
                      </div>
                      <span
                        className={`text-sm md:text-base font-medium transition-colors ${
                          selectedOption === index
                            ? "text-foreground"
                            : "text-muted-foreground group-hover:text-foreground"
                        }`}
                      >
                        {option.text}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-10">
                <button
                  onClick={handleBack}
                  disabled={currentQuestion === 0}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                    currentQuestion === 0
                      ? "text-muted-foreground/30 cursor-not-allowed"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Anterior
                </button>

                <Button
                  onClick={handleNext}
                  disabled={selectedOption === null}
                  className={`relative px-8 py-6 font-bold tracking-wider uppercase group overflow-hidden transition-all ${
                    selectedOption === null
                      ? "bg-muted text-muted-foreground cursor-not-allowed"
                      : "bg-primary hover:bg-cyan text-primary-foreground animate-halo"
                  }`}
                >
                  <span className="relative z-10 flex items-center">
                    {currentQuestion === questions.length - 1
                      ? "Ver Resultado"
                      : "Siguiente"}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  {selectedOption !== null && (
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
              {/* Spinner */}
              <div className="relative w-24 h-24 mx-auto mb-10">
                <div className="absolute inset-0 rounded-full border-4 border-muted" />
                <div
                  className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-cyan animate-spin"
                  style={{ animationDuration: "1s" }}
                />
                <div className="absolute inset-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary animate-pulse" />
                </div>
              </div>

              <h2
                className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider"
                style={{
                  fontFamily: "'Bebas Neue', 'Anton', sans-serif",
                }}
              >
                Analizando tu perfil...
              </h2>
              <p className="text-muted-foreground text-lg">
                Evaluando compatibilidad con el programa privado
              </p>

              {/* Animated dots */}
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

      {/* ═══ RESULTADO: CALIFICA ═══ */}
      {showResult && calculateResult().qualifies && (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/15 rounded-full blur-[150px] animate-glow-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/20 rounded-full blur-[100px] animate-pulse" />
          </div>

          <div className="container mx-auto px-4 z-10 text-center pt-20 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan/40 bg-cyan/10 mb-8">
              <Crown className="w-5 h-5 text-cyan" />
              <span className="text-sm font-bold tracking-wider uppercase text-cyan">
                Perfil Aprobado
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glow-text-double uppercase leading-tight max-w-4xl mx-auto"
              style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
            >
              Has sido seleccionado para una{" "}
              <span className="text-primary font-bold">
                Asesoría Privada 1 a 1
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white mb-4 max-w-2xl mx-auto font-light leading-relaxed">
              Tu perfil muestra que estás listo para escalar con granjas de bots
              inteligentes. Nuestro equipo te espera.
            </p>

            <p className="text-base text-cyan mb-8 max-w-xl mx-auto font-semibold">
              Los cupos para asesorías privadas son limitados — agenda ahora para
              asegurar tu lugar.
            </p>

            {/* Resultados reales — prueba social */}
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4 font-semibold">
                Personas reales que están obteniendo estos resultados con su granja
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="glass-card-3d rounded-2xl p-4 border border-cyan/20 overflow-hidden">
                  <img
                    src="/youtube-results.png"
                    alt="Resultados: 6.3M views, $1,407.56 en un día"
                    className="w-full rounded-xl"
                  />
                  <p className="text-sm text-cyan mt-3 font-medium">
                    6.3M views · $1,407.56 en un solo día
                  </p>
                </div>
                <div className="glass-card-3d rounded-2xl p-4 border border-cyan/20 overflow-hidden">
                  <img
                    src="/youtube-results-2.png"
                    alt="Resultados: 57.4K views, $8,640 en 28 días"
                    className="w-full rounded-xl"
                  />
                  <p className="text-sm text-cyan mt-3 font-medium">
                    57.4K views · $8,640 en 28 días · +707 subs
                  </p>
                </div>
                <div className="glass-card-3d rounded-2xl p-4 border border-cyan/20 overflow-hidden">
                  <img
                    src="/earnings-results.png"
                    alt="Resultados: $15,942 en 6 días"
                    className="w-full rounded-xl"
                  />
                  <p className="text-sm text-cyan mt-3 font-medium">
                    $15,942 en 6 días · +74.2% crecimiento
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <a href={AGENDAR_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="relative text-lg px-10 py-7 bg-primary hover:bg-cyan text-primary-foreground font-bold tracking-wider uppercase animate-halo group overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Agendar Mi Asesoría Privada
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />
                </Button>
              </a>
              <span className="text-sm text-muted-foreground">
                Sin compromiso · 100% personalizada · Cupos limitados
              </span>
            </div>

            {/* Trust */}
            <div className="mt-16 glass-card-3d rounded-2xl p-8 max-w-2xl mx-auto border border-cyan/20">
              <h3
                className="text-xl font-bold uppercase tracking-wider mb-4"
                style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
              >
                ¿Qué sucede en la asesoría?
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-left">
                {[
                  "Analizamos tu situación actual y objetivos",
                  "Diseñamos un plan personalizado para tu granja",
                  "Te mostramos el ROI proyectado de tu inversión",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">
                        {i + 1}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══ RESULTADO: NO CALIFICA ═══ */}
      {showResult && !calculateResult().qualifies && (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/15 rounded-full blur-[150px]" />
          </div>

          <div className="container mx-auto px-4 z-10 text-center pt-20 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 bg-primary/10 mb-8">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold tracking-wider uppercase text-primary">
                Tu Siguiente Paso
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 uppercase leading-tight max-w-4xl mx-auto"
              style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
            >
              Aún no es tu momento para la{" "}
              <span className="text-primary glow-text">asesoría privada</span>
            </h1>

            <p className="text-lg md:text-xl text-white mb-4 max-w-2xl mx-auto font-light leading-relaxed">
              Pero eso no significa que te quedes fuera. Nuestra comunidad
              exclusiva es el lugar perfecto para prepararte y dar el siguiente
              paso cuando estés listo.
            </p>

            <p className="text-base text-cyan mb-12 max-w-xl mx-auto font-semibold">
              Únete a la comunidad, aprende de los que ya están escalando y
              vuelve cuando estés listo.
            </p>

            <div className="flex flex-col items-center gap-4">
              <a
                href={SKOOL_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="relative text-lg px-10 py-7 bg-primary hover:bg-cyan text-primary-foreground font-bold tracking-wider uppercase animate-halo group overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Unirme a la Comunidad
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />
                </Button>
              </a>
              <span className="text-sm text-muted-foreground">
                Acceso gratuito · Comunidad activa · Contenido exclusivo
              </span>
            </div>

            {/* What you get */}
            <div className="mt-16 glass-card-3d rounded-2xl p-8 max-w-2xl mx-auto border border-primary/20">
              <h3
                className="text-xl font-bold uppercase tracking-wider mb-4"
                style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
              >
                ¿Qué encontrarás en la comunidad?
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-left">
                {[
                  "Tutoriales y guías paso a paso sobre granjas de bots",
                  "Networking con emprendedores que ya están escalando",
                  "Acceso prioritario cuando estés listo para el programa",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">
                        {i + 1}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Quiz;
