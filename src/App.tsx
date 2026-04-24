import { useEffect, lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";

const Agendar = lazy(() => import("./pages/Agendar"));
const Blog = lazy(() => import("./pages/Blog"));
const MasterClass = lazy(() => import("./pages/MasterClass"));
const BlogArticle = lazy(() => import("./pages/BlogArticle"));
const PoliticaPrivacidad = lazy(() => import("./pages/PoliticaPrivacidad"));
const TerminosServicio = lazy(() => import("./pages/TerminosServicio"));
const Quiz = lazy(() => import("./pages/Quiz"));
const NotFound = lazy(() => import("./pages/NotFound"));
const LandingRD = lazy(() => import("./pages/landing/RD"));
const LandingArgentina = lazy(() => import("./pages/landing/Argentina"));
const LandingPeru = lazy(() => import("./pages/landing/Peru"));
const LandingSpotify = lazy(() => import("./pages/landing/Spotify"));
const LandingTikTok = lazy(() => import("./pages/landing/TikTok"));
const LandingDante = lazy(() => import("./pages/landing/Dante"));

const queryClient = new QueryClient();

// Declare fbq type for TypeScript
declare global {
  interface Window {
    fbq: (action: string, eventName: string, params?: Record<string, any>) => void;
  }
}

// Component to track page views on route changes
const FacebookPixelTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize pixel on app load
    if (typeof window.fbq === 'function') {
      window.fbq('init', '1083067690620010');
    }
  }, []);

  useEffect(() => {
    // Track page view when route changes
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
      console.log('Facebook Pixel PageView tracked:', location.pathname);
    }
  }, [location]);

  return null;
};

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <FacebookPixelTracker />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/agendar" element={<Agendar />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/masterclass" element={<MasterClass />} />
            <Route path="/blog/:id" element={<BlogArticle />} />
            <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
            <Route path="/terminos-servicio" element={<TerminosServicio />} />
            {/* Landing pages por audiencia / A/B testing */}
            <Route path="/landing/rd" element={<LandingRD />} />
            <Route path="/landing/argentina" element={<LandingArgentina />} />
            <Route path="/landing/peru" element={<LandingPeru />} />
            <Route path="/landing/spotify" element={<LandingSpotify />} />
            <Route path="/landing/tiktok" element={<LandingTikTok />} />
            <Route path="/landing/dante" element={<LandingDante />} />
            <Route path="/quiz" element={<Quiz />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
