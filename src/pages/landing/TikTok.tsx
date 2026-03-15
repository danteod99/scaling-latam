import { Eye, Heart, RefreshCw, Bot, Users, MessageSquare, Clapperboard, Store, Music, Lightbulb, TrendingUp } from "lucide-react";
import LandingTemplate from "@/components/LandingTemplate";

const LandingTikTok = () => (
  <LandingTemplate
    badge="Especialistas en TikTok Growth · +100M views entregados"
    headlineTop="EXPLOTA EN"
    headlineHighlight="TIKTOK"
    subheadline="Views, seguidores, likes y shares que activan el algoritmo. La plataforma que usan creadores en toda Latam para viralizar su contenido."
    ctaText="Agenda tu llamada gratis"
    ctaSubtext="Consultoría gratuita · Resultados desde el día 1"
    stats={[
      { value: "100M+", label: "Views entregados" },
      { value: "5,000+", label: "Creadores activos" },
      { value: "70%+", label: "Retención promedio" },
      { value: "$0.10", label: "Precio desde / 1K views" },
    ]}
    featuresTitle="Todo para dominar"
    featuresHighlight="TikTok"
    features={[
      { icon: Eye, title: "Views con retención", description: "Views reales con 70%+ de retención. Esto le dice al algoritmo que tu contenido vale la pena. Resultados en minutos." },
      { icon: Heart, title: "Likes y engagement", description: "Likes rápidos que activan el efecto bola de nieve. Mientras más rápido llegas al umbral, más te empuja el FYP." },
      { icon: RefreshCw, title: "Shares y saves", description: "Las dos métricas que TikTok más valora. Shares = viralidad. Saves = contenido de valor. Ambos disparan tu alcance." },
      { icon: Bot, title: "Bots para TikTok", description: "Granjas de bots especializadas en el algoritmo de TikTok. Anti-detección avanzada. Te dice cuándo publicar y qué impulsar." },
      { icon: Users, title: "Seguidores reales", description: "Seguidores que se quedan y aumentan tu credibilidad. Perfiles reales con fotos y actividad. Cero bots obvios." },
      { icon: MessageSquare, title: "Comentarios", description: "Comentarios relevantes en español que generan conversación y empujan el video en el algoritmo. Tú eliges los textos." },
    ]}
    useCasesTitle="Cómo usan Scaling para"
    useCasesHighlight="TikTok"
    useCases={[
      { icon: Clapperboard, title: "Creadores", description: "Impulsa tus mejores videos para que el algoritmo los note. Un push inicial inteligente puede convertir un video en viral." },
      { icon: Store, title: "Negocios", description: "TikTok es la red de mayor conversión para comercios. Más views = más clientes. Impulsa tus videos de productos." },
      { icon: Music, title: "Artistas", description: "Un TikTok viral puede cambiar tu carrera. Impulsa videos con tu música para que el sonido se vuelva tendencia." },
    ]}
    testimonials={[
      { name: "Daniela M.", role: "Creadora de contenido · México", text: "Un video que tenía 200 views lo impulsé y llegó a 500K. Gané 8K seguidores en una semana. El ROI es brutal.", country: "🇲🇽" },
      { name: "Roberto S.", role: "Tienda de ropa · Colombia", text: "Mis TikToks de productos ahora llegan al FYP. Las ventas por TikTok Shop subieron 5x. Vale cada centavo.", country: "🇨🇴" },
      { name: "Fer G.", role: "Músico · Argentina", text: "Mi canción se volvió tendencia en TikTok gracias al push inicial. De 0 a 2M de plays en un mes. Una locura.", country: "🇦🇷" },
    ]}
    finalCtaTitle="¿Listo para ser viral en"
    finalCtaHighlight="TikTok?"
    finalCtaSubtitle="Más de 5,000 creadores ya crecen con Scaling — agenda tu llamada gratuita"
  />
);

export default LandingTikTok;
