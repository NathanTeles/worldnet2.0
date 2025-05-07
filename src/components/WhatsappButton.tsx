
import React, { useState } from 'react';
import { MessageSquare, X } from "lucide-react";

const WhatsappButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  // WhatsApp message and number - updated format for better mobile compatibility
  const whatsappMessage = "Olá! Estou interessado(a) em contratar internet com a World Net aqui na Barra da Lagoa, e gostaria de ver os planos disponíveis e os valores. Pode me ajudar?";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=5541920042357&text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {showTooltip && (
        <div className="absolute bottom-20 right-0 bg-white p-4 rounded-lg shadow-lg w-64 text-left animate-fade-in">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-bold text-worldnet-blue">Atendimento via WhatsApp</h4>
            <button onClick={toggleTooltip} className="text-gray-500 hover:text-gray-700">
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-worldnet-gray-dark mb-2">
            Estamos online das 8h às 22h. Como podemos ajudar?
          </p>
          <p className="text-xs text-worldnet-gray mb-3">
            Resposta em até 5 minutos durante o horário comercial.
          </p>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-2 px-3 bg-green-500 hover:bg-green-600 transition-colors text-white text-center rounded font-medium text-sm"
          >
            Iniciar conversa
          </a>
        </div>
      )}
      
      <a 
        href={whatsappUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:shadow-xl"
        aria-label="Contato via WhatsApp"
        onClick={(e) => {
          if (!showTooltip) {
            e.preventDefault();
            toggleTooltip();
          }
        }}
      >
        <MessageSquare className="w-7 h-7 text-white" />
        
        <span className="absolute top-0 -right-1 w-5 h-5 bg-red-500 border-2 border-white rounded-full animate-pulse"></span>
      </a>
    </div>
  );
};

export default WhatsappButton;
