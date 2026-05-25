import { Smartphone, Landmark, DollarSign, Truck, Brain, Headphones, Mic, UtensilsCrossed, Briefcase, Home } from "lucide-react";
import LandingTemplate from "@/components/LandingTemplate";

const LandingMiami = () => (
  <LandingTemplate
    countryFlag="🇺🇸"
    badge="Made for Latinos in USA · Granjas en USD"
    headlineTop="ARMA TU GRANJA DE BOTS"
    headlineHighlight="PERSONALIZADA EN USA"
    subheadline="Eres latino en USA y quieres autoridad real en redes. Te configuramos una granja física de dispositivos reales según tu negocio. Operación legal vía Scaling Tech Farm LLC (Wyoming). Envío a Miami, Houston, NY, LA y Chicago."
    ctaText="Arma tu Granja de Bots Personalizada"
    ctaSubtext="Quiz de 60 segundos · Te decimos qué granja necesitas según tu negocio"
    ctaLink="/quiz"
    finalCtaButtonText="Arma tu Granja Ahora"
    stats={[
      { value: "$50K-80K", label: "Ingreso promedio latino USA" },
      { value: "60M+", label: "Latinos en USA que hablan tu español" },
      { value: "$3K-8K", label: "Rango de granja premium USA" },
      { value: "LLC USA", label: "Empresa formal Wyoming" },
    ]}
    featuresTitle="Tu granja premium,"
    featuresHighlight="hecha en USA"
    features={[
      { icon: Smartphone, title: "Dispositivos Samsung premium", description: "Galaxy S10, Note 9, Z Flip 4. Configurados para nichos USA: bienes raíces, food, salud, finance. Hardware real, no software emulado." },
      { icon: Landmark, title: "Operación 100% legal en USA", description: "Scaling Tech Farm LLC en Wyoming, EIN del IRS, cuenta Mercury Bank, Stripe activo. Facturas formales que sirven para tus impuestos USA." },
      { icon: DollarSign, title: "Pagas en USD, recibes en USD", description: "Stripe USA, tarjetas internacionales, transferencias ACH. Tu granja te genera USD directo a tu cuenta. Ticket ROI: 30-60 días." },
      { icon: Truck, title: "Envío directo a tu ciudad", description: "Miami, Houston, NY, LA, Chicago, Orlando, Atlanta. Llega configurada en menos de 10 días. Manual paso a paso en español." },
      { icon: Brain, title: "Software TrustMind incluido", description: "IA preinstalada que comanda tu granja, rota dispositivos, evita baneos. Sin costo extra. Setup en español por nuestro equipo." },
      { icon: Headphones, title: "Soporte bilingüe USA-LATAM", description: "Closer dedicado en horario USA. Te acompañamos los primeros 90 días para que tu granja produzca de verdad sin que tengas que tocar nada." },
    ]}
    useCasesTitle="¿Para quién es la granja"
    useCasesHighlight="personalizada USA?"
    useCases={[
      { icon: UtensilsCrossed, title: "Negocios latinos en USA", description: "Restaurantes, food trucks, salones, talleres, contratistas. Granja para llenar tu Instagram con latinos de tu ciudad que pagan en dólares." },
      { icon: Mic, title: "Artistas latinos en USA", description: "Bachateros, reggaetoneros, urban latino. Granja optimizada para Spotify USA y YouTube USA. Regalías en dólares directo a Stripe." },
      { icon: Briefcase, title: "Coaches y consultores latinos", description: "Granja para construir autoridad rápido y cobrar consultorías premium en dólares. Pasa de ser desconocido a referente en 60 días." },
      { icon: Home, title: "Realtors, brokers, agentes", description: "Mercado inmobiliario latino USA cierra con confianza social. Granja que construye tu autoridad para que el cliente te elija sobre la competencia." },
    ]}
    testimonials={[
      { name: "Ana V.", role: "Realtor · Miami", text: "Pedí mi granja personalizada para bienes raíces. Cerré 3 propiedades en mes 1: comisión de $42,000. ROI de la granja en menos de 2 semanas.", country: "🇺🇸" },
      { name: "Pedro G.", role: "Food truck · Houston", text: "Mi granja llegó configurada para gastronomía. Mi food truck pasó de 5 clientes/día a fila de 30 personas. Compré la segunda granja en mes 3.", country: "🇺🇸" },
      { name: "Luz F.", role: "Coach financiera · NYC", text: "Granja premium para coach. Subí mi ticket de $200 a $1,500 por sesión. Agenda llena 3 meses. Mejor inversión de los últimos 5 años.", country: "🇺🇸" },
    ]}
    finalCtaTitle="¿Listo para armar tu granja en"
    finalCtaHighlight="USA?"
    finalCtaSubtitle="Empresa formal en Wyoming · Pago en USD · Quiz de 60 segundos te dice exactamente qué granja necesitas según tu negocio"
  />
);

export default LandingMiami;
