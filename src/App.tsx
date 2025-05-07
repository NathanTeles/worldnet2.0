
import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Sobre from "./pages/Sobre";
import Suporte from "./pages/Suporte";
import Contato from "./pages/Contato";
import ScrollToTop from "./components/ScrollToTop";
import { initSecurityMeasures } from "./utils/securityMeasures";
import DemoModal from "./components/DemoModal";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Inicializar medidas de segurança quando o componente é montado
    initSecurityMeasures();
  }, []);

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/planos" element={<Navigate to="/#plans" replace />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/suporte" element={<Suporte />} />
              <Route path="/contato" element={<Contato />} />
              {/* Redirect /blog to the homepage */}
              <Route path="/blog" element={<Navigate to="/" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <DemoModal />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
