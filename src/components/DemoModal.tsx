
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const DemoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Verificar se o usuário já viu o aviso (usando localStorage)
    const hasSeenNotice = localStorage.getItem("worldnet-demo-notice-seen");
    
    if (!hasSeenNotice) {
      setIsOpen(true);
    }
  }, []);

  const handleConfirm = () => {
    // Marcar que o usuário já viu o aviso
    localStorage.setItem("worldnet-demo-notice-seen", "true");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">
            🔧 Aviso importante
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>
            Este site é uma versão demonstrativa desenvolvida especialmente para apresentar o conceito visual, a estrutura e a proposta de comunicação da World Net.
          </p>
          <p>
            Ainda não é o site definitivo — todos os textos, imagens, planos e informações podem ser ajustados conforme a necessidade da empresa.
          </p>
          <p>
            Também é possível personalizar seções, adicionar novas páginas e integrar recursos adicionais, como pagamento online, área do cliente ou atendimento automatizado via WhatsApp.
          </p>
          <p>
            Nosso objetivo neste estágio é validar o layout, a navegabilidade e a linguagem estratégica para garantir que tudo esteja perfeitamente alinhado com a identidade e os objetivos da World Net.
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <Button onClick={handleConfirm} className="px-6">
            Ok, estou ciente que este site é apenas uma demonstração
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;
