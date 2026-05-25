import { Smartphone, Settings, Truck, ShieldCheck, DollarSign, Headphones, Mic, Coffee, Camera, Building2 } from "lucide-react";
import LandingTemplate from "@/components/LandingTemplate";

const LandingRD = () => (
  <LandingTemplate
    countryFlag="🇩🇴"
    badge="Hub Caribe · Mercado #1 de Scaling LATAM"
    headlineTop="ARMA TU GRANJA DE BOTS"
    headlineHighlight="PERSONALIZADA EN RD"
    subheadline="Te configuramos una granja física de dispositivos reales según tu negocio: música, multicuenta, streamer o agencia. Te llega lista a tu casa en Santo Domingo, Santiago o Punta Cana — y arrancas a facturar."
    ctaText="Arma tu Granja de Bots Personalizada"
    ctaSubtext="Quiz de 60 segundos · Te decimos exactamente qué granja necesitas"
    ctaLink="/quiz"
    finalCtaButtonText="Arma tu Granja Ahora"
    stats={[
      { value: "19.2%", label: "De nuestros clientes son RD" },
      { value: "3,597", label: "Dominicanos en comunidad" },
      { value: "$2K-6K", label: "Rango de granja personalizada" },
      { value: "7 días", label: "Envío + instalación" },
    ]}
    featuresTitle="Tu granja, hecha"
    featuresHighlight="a tu medida"
    features={[
      { icon: Smartphone, title: "Dispositivos Samsung reales", description: "Galaxy S8, S10, Note 8, Z Flip 4. Probados, configurados y rackeados. No emuladores, no software trucho — hardware real que escala." },
      { icon: Settings, title: "Configuración personalizada", description: "El quiz nos dice tu nicho (música, multicuenta, streamer, agencia, e-commerce). Configuramos la granja específica para ese caso." },
      { icon: Truck, title: "Envío a toda RD", description: "Santo Domingo, Santiago, Puerto Plata, Punta Cana, San Pedro. Llega en menos de 7 días con manual paso a paso." },
      { icon: ShieldCheck, title: "Software TrustMind incluido", description: "Cada granja viene con TrustMind preinstalado: panel de control, IA que recomienda, automatizaciones anti-baneo. Sin costo extra." },
      { icon: DollarSign, title: "Pago en USD o transferencia", description: "Stripe, crypto, transferencia bancaria. Facturas formales vía Scaling Tech Farm LLC. ROI promedio: 30-45 días." },
      { icon: Headphones, title: "Soporte dominicano 24/7", description: "Equipo local atiende por WhatsApp en horario RD. Te acompañamos los primeros 90 días para que tu granja produzca de verdad." },
    ]}
    useCasesTitle="¿Para quién es la granja"
    useCasesHighlight="personalizada?"
    useCases={[
      { icon: Mic, title: "Artistas urbanos dominicanos", description: "Granja optimizada para Spotify y YouTube Music. Streams reales, regalías reales. Dembowseros, traperos, bachateros — vive de tu música." },
      { icon: Coffee, title: "Negocios locales SD y Santiago", description: "Granja para crecer Instagram local. Llena tu salón, restaurante o tienda con dominicanos reales que viven cerca de ti." },
      { icon: Camera, title: "Influencers y creadores RD", description: "Granja para subir tu autoridad rápido. Más seguidores, más engagement, más deals con marcas. Sube tu ticket por post." },
      { icon: Building2, title: "Agencias y revendedores", description: "Granja para ofrecer servicios a tus clientes. Margen 60-70%. Construye un negocio completo sobre tu granja." },
    ]}
    testimonials={[
      { name: "Carlos M.", role: "Artista urbano · Santo Domingo", text: "Pedí mi granja personalizada para Spotify. 47K streams en 2 semanas, $312 en regalías. Recuperé la inversión en 30 días. Ahora voy por la segunda granja.", country: "🇩🇴" },
      { name: "María P.", role: "Dueña de salón · Santiago", text: "Mi granja llegó configurada para mi salón. Instagram pasó de 2,400 a 18,000 seguidores reales en 30 días. Lista de espera para citas. Vale cada centavo.", country: "🇩🇴" },
      { name: "Junior R.", role: "Influencer · Punta Cana", text: "Mi granja personalizada me dio la autoridad que necesitaba. Antes cobraba $50 por post, ahora $400. ROI brutal en menos de 2 meses.", country: "🇩🇴" },
    ]}
    finalCtaTitle="¿Listo para armar tu granja en"
    finalCtaHighlight="República Dominicana?"
    finalCtaSubtitle="Empresa formal · Soporte 100% dominicano · Quiz de 60 segundos te dice exactamente qué granja necesitas"
  />
);

export default LandingRD;
