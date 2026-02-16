import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogArticles = [
  {
    id: "que-son-granjas-de-bots",
    title: "¿Qué son las Granjas de Bots y cómo funcionan?",
    excerpt: "Descubre cómo las granjas de bots están revolucionando el marketing digital, generando interacciones reales y escalando la presencia de marcas en redes sociales.",
    date: "2026-02-10",
    readTime: "5 min",
    category: "Introducción",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
  },
  {
    id: "beneficios-bot-farms",
    title: "5 Beneficios de usar Bot Farms para tu negocio",
    excerpt: "Desde aumentar tu alcance orgánico hasta automatizar interacciones, conoce las ventajas competitivas que una granja de bots puede darte frente a tu competencia.",
    date: "2026-02-05",
    readTime: "4 min",
    category: "Estrategia",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
  },
  {
    id: "boxphonefarms-sistema",
    title: "BoxPhoneFarms: El sistema que genera $9,700+ mensuales",
    excerpt: "Conoce el sistema BoxPhoneFarms que está cambiando las reglas del juego en el marketing de redes sociales y cómo puedes implementarlo en tu negocio.",
    date: "2026-01-28",
    readTime: "7 min",
    category: "Caso de Éxito",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
  },
  {
    id: "automatizacion-redes-sociales",
    title: "Automatización en Redes Sociales: Guía Completa 2026",
    excerpt: "Todo lo que necesitas saber sobre la automatización de redes sociales usando granjas de bots, desde la configuración inicial hasta la escalabilidad.",
    date: "2026-01-20",
    readTime: "8 min",
    category: "Guía",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop"
  },
  {
    id: "politicos-granjas-bots",
    title: "Cómo los Políticos usan Granjas de Bots para ganar elecciones",
    excerpt: "Las campañas políticas modernas aprovechan la tecnología de bot farms para amplificar mensajes, generar tendencias y dominar la conversación digital.",
    date: "2026-01-15",
    readTime: "6 min",
    category: "Casos de Uso",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop"
  },
  {
    id: "musicos-artistas-bots",
    title: "Músicos y Artistas: Impulsa tu carrera con Bot Farms",
    excerpt: "Descubre cómo artistas emergentes están usando granjas de bots para aumentar reproducciones, seguidores y visibilidad en plataformas como Spotify y YouTube.",
    date: "2026-01-08",
    readTime: "5 min",
    category: "Casos de Uso",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop"
  },
];

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
};

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h1
            className="text-4xl md:text-6xl font-bold text-center text-foreground mb-4 tracking-wider"
            style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
          >
            BLOG
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto text-lg">
            Artículos, guías y casos de éxito sobre granjas de bots, automatización y crecimiento digital.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.id}`}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,191,255,0.1)] flex flex-col"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(article.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
