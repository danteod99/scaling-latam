import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Agendar from "./pages/Agendar";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import TerminosServicio from "./pages/TerminosServicio";
import NotFound from "./pages/NotFound";

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
    // Initialize both pixels on app load
    if (typeof window.fbq === 'function') {
      window.fbq('init', '1922514418521214');
      window.fbq('init', '817240111230065');
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
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <FacebookPixelTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/agendar" element={<Agendar />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/terminos-servicio" element={<TerminosServicio />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
