import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { LucideIcon } from "lucide-react";

export interface LandingFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface LandingTestimonial {
  name: string;
  role: string;
  text: string;
  country: string;
}

export interface LandingStat {
  value: string;
  label: string;
}

export interface LandingUseCase {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface LandingProps {
  // Hero
  badge: string;
  headlineTop: string;
  headlineHighlight: string;
  subheadline: string;
  ctaText?: string;
  ctaSubtext?: string;
  countryFlag?: string;

  // Stats
  stats: LandingStat[];

  // Benefits/Features
  featuresTitle: string;
  featuresHighlight: string;
  features: LandingFeature[];

  // Use Cases
  useCasesTitle: string;
  useCasesHighlight: string;
  useCases: LandingUseCase[];

  // Testimonials
  testimonials: LandingTestimonial[];

  // Final CTA
  finalCtaTitle: string;
  finalCtaHighlight: string;
  finalCtaSubtitle: string;
}

const LandingTemplate = ({
  badge,
  headlineTop,
  headlineHighlight,
  subheadline,
  ctaText = "Agenda una llamada",
  ctaSubtext,
  countryFlag,
  stats,
  featuresTitle,
  featuresHighlight,
  features,
  useCasesTitle,
  useCasesHighlight,
  useCases,
  testimonials,
  finalCtaTitle,
  finalCtaHighlight,
  finalCtaSubtitle,
}: LandingProps) => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* === HERO === */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background z-0" />
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/15 rounded-full blur-[150px] animate-glow-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/20 rounded-full blur-[100px] animate-pulse" />
        </div>

        {/* Particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full animate-particle-float"
              style={{
                left: `${(i * 12.5)}%`,
                top: `${(i * 10)}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${4 + (i % 3)}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 z-10 text-center animate-fade-in-up pt-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
            {countryFlag && <span className="text-lg">{countryFlag}</span>}
            <span className="text-xs md:text-sm font-medium tracking-wider uppercase text-primary">
              {badge}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glow-text-double uppercase leading-tight max-w-5xl mx-auto animate-glow-dynamic"
            style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
          >
            {headlineTop}{" "}
            <span className="text-primary font-bold">{headlineHighlight}</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-white mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            {subheadline}
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4">
            <a href="/agendar">
              <Button
                size="lg"
                className="relative text-lg px-8 py-7 bg-primary hover:bg-cyan text-primary-foreground font-bold tracking-wider uppercase animate-halo group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  {ctaText}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />
              </Button>
            </a>
            {ctaSubtext && (
              <span className="text-sm text-muted-foreground">{ctaSubtext}</span>
            )}
          </div>
        </div>
      </section>

      {/* === STATS === */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass-card-3d p-6 rounded-2xl text-center border border-primary/20 hover:border-cyan/50 transition-all animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary glow-text mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FEATURES === */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2
              className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-wider"
              style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
            >
              {featuresTitle}{" "}
              <span className="text-primary glow-text">{featuresHighlight}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card-3d p-8 rounded-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 animate-fade-in border border-primary/20 hover:border-cyan/50 group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent group-hover:via-cyan/70 transition-all" />
                <div className="mb-6 inline-block p-4 bg-primary/10 rounded-xl group-hover:bg-cyan/20 transition-all group-hover:shadow-[0_0_30px_rgba(0,122,191,0.4)] relative z-10">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-cyan transition-colors" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-wide relative z-10">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === USE CASES === */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2
              className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-wider"
              style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
            >
              {useCasesTitle}{" "}
              <span className="text-primary glow-text">{useCasesHighlight}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-50 group-hover:opacity-70 transition-opacity" />
                <div className="relative glass-card-3d p-8 h-full flex flex-col items-center text-center border border-primary/10 group-hover:border-cyan/40 transition-all hover:-translate-y-2">
                  <div className="mb-6 p-5 bg-background/50 rounded-2xl group-hover:scale-110 transition-transform group-hover:shadow-[0_0_25px_rgba(0,122,191,0.5)] relative z-10">
                    <useCase.icon className="w-10 h-10 text-primary group-hover:text-cyan transition-colors" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-wider relative z-10">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed relative z-10">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2
              className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-wider"
              style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
            >
              Resultados <span className="text-primary glow-text">reales</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lo que dicen nuestros clientes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="glass-card-3d p-8 rounded-2xl border border-primary/20 hover:border-cyan/50 transition-all animate-fade-in group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan/60 to-transparent group-hover:via-cyan/90 transition-all" />

                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>

                <div className="pt-4 border-t border-primary/10">
                  <p className="font-bold text-foreground">
                    {t.name} <span className="text-base">{t.country}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[800px] h-[800px] bg-primary/10 rounded-full blur-[180px] animate-tunnel" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 uppercase tracking-wider glow-text-double"
              style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
            >
              {finalCtaTitle}{" "}
              <span className="text-primary">{finalCtaHighlight}</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              {finalCtaSubtitle}
            </p>

            <a href="/agendar">
              <Button
                size="lg"
                className="relative text-lg px-10 py-7 bg-primary hover:bg-cyan text-primary-foreground font-bold tracking-wider uppercase animate-halo group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Agendar ahora
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />
              </Button>
            </a>

            <div className="mt-20 pt-10 border-t border-primary/20">
              <p className="text-sm md:text-base text-muted-foreground uppercase tracking-[0.2em]">
                <span className="text-foreground font-bold">SCALING</span> — donde la automatización se vuelve poder digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingTemplate;
