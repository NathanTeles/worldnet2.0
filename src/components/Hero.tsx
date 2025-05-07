import React from 'react';
import { Button } from "@/components/ui/button";
import { WifiHigh, MessageSquare } from "lucide-react";

const Hero = () => {
  // WhatsApp message and number with updated format
  const whatsappMessage = "Olá! Estou interessado(a) em contratar internet com a World Net aqui na Barra da Lagoa, e gostaria de ver os planos disponíveis e os valores. Pode me ajudar?";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=5541920042357&text=${encodeURIComponent(whatsappMessage)}`;
  
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-worldnet-blue-dark/90 to-worldnet-blue/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80" 
          alt="Pessoa usando internet" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="custom-shape-divider-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          <div className="text-center md:text-left md:w-1/2">
            <p className="inline-flex items-center text-white/90 font-medium mb-4 px-4 py-1 bg-worldnet-blue-light/30 rounded-full">
              <WifiHigh className="mr-2 h-4 w-4" />
              Internet de alta velocidade
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Internet <span className="text-worldnet-green">Ultra Rápida</span> para sua Casa e Empresa
            </h1>
            
            <p className="text-lg text-white/80 mb-8 max-w-md mx-auto md:mx-0">
              Conexão estável, suporte 24h e os melhores planos de fibra óptica da região. 
              Experimente a melhor experiência online.
            </p>
          </div>
          
          <div className="w-full md:w-5/12 bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-2xl font-bold text-worldnet-blue mb-2">
              Fale com um Especialista
            </h3>
            <p className="text-worldnet-gray-dark mb-6">
              Descubra o melhor plano para sua região e necessidades com nosso time especializado
            </p>
            
            <div className="space-y-6">
              <p className="text-worldnet-gray-dark">
                Temos as melhores opções de internet para sua casa ou empresa com:
              </p>
              
              <ul className="space-y-2 text-worldnet-gray-dark">
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-worldnet-green rounded-full mr-2"></span>
                  Internet 100% Fibra Óptica
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-worldnet-green rounded-full mr-2"></span>
                  Atendimento personalizado
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-worldnet-green rounded-full mr-2"></span>
                  Instalação rápida e profissional
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-worldnet-green rounded-full mr-2"></span>
                  Suporte técnico 24h
                </li>
              </ul>
              
              <Button 
                asChild 
                className="w-full bg-worldnet-green hover:bg-worldnet-green/90 text-white shadow-md hover:shadow-lg"
              >
                <a 
                  href={whatsappUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Fale com um especialista
                </a>
              </Button>
            </div>
            
            <p className="mt-4 text-xs text-worldnet-gray text-center">
              Atendimento rápido via WhatsApp com nossa equipe especializada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
