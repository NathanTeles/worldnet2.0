
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

const Cta = () => {
  // WhatsApp link with pre-filled message - updated format
  const whatsappMessage = "Olá! Estou interessado(a) em contratar internet com a World Net aqui na Barra da Lagoa, e gostaria de ver os planos disponíveis e os valores. Pode me ajudar?";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=5541920042357&text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-16 bg-worldnet-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para ter a melhor internet da região?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Fale com um especialista agora e descubra o melhor plano para sua região!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              asChild 
              className="bg-worldnet-green hover:bg-worldnet-green/90 text-white shadow-md hover:shadow-lg transition-shadow"
            >
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageSquare className="mr-2 w-4 h-4" />
                Falar com especialista
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="border-white bg-white/10 text-white hover:bg-white/20 hover:border-white shadow-md hover:shadow-lg transition-shadow"
            >
              <Link to="/planos">
                Ver planos
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-white/60">
            Sem taxas ocultas. Cancelamento a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cta;
