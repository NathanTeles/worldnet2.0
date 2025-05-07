
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageSquare, Mail, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WhatsappButton from '@/components/WhatsappButton';

const Suporte = () => {
  useEffect(() => {
    document.title = 'Suporte | World Net';
  }, []);

  // WhatsApp links with pre-filled messages
  const whatsappUrl = "https://wa.me/5541920042357?text=Olá!%20Estou%20interessado(a)%20em%20contratar%20internet%20com%20a%20World%20Net%20aqui%20na%20Barra%20da%20Lagoa%2C%20e%20gostaria%20de%20ver%20os%20planos%20disponíveis%20e%20os%20valores.%20Pode%20me%20ajudar%3F";
  const supportWhatsappLink = "https://wa.me/5541920042357?text=Olá,%20já%20sou%20cliente%20WorldNet%20e%20preciso%20de%20suporte.";

  const faqItems = [
    {
      question: "Como contratar um plano World Net?",
      answer: "Entre em contato conosco pelo WhatsApp ou telefone. Um de nossos consultores irá auxiliar na escolha do melhor plano para sua necessidade e agendar a instalação."
    },
    {
      question: "Como obter a segunda via do boleto?",
      answer: "Você pode solicitar a segunda via do boleto através da nossa Área do Cliente no site ou entrar em contato com nosso suporte via WhatsApp."
    },
    {
      question: "Como testar a velocidade da minha internet?",
      answer: "Recomendamos usar o site speedtest.net para testes de velocidade. Para resultados mais precisos, conecte seu dispositivo via cabo de rede diretamente ao roteador."
    },
    {
      question: "O que fazer quando a internet está lenta?",
      answer: "Primeiro, reinicie seu roteador e verifique se o problema persiste. Se continuar lento, entre em contato com nosso suporte técnico para diagnóstico remoto."
    },
    {
      question: "Como funciona a instalação?",
      answer: "Após a contratação, agendamos a visita técnica. Nossos técnicos farão a instalação da fibra ótica até seu imóvel e configurarão o equipamento. Todo o processo leva cerca de 2 horas."
    },
    {
      question: "Posso transferir minha internet para outro endereço?",
      answer: "Sim, desde que o novo endereço tenha cobertura. Entre em contato com antecedência para verificarmos a disponibilidade e agendarmos a mudança."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="bg-worldnet-blue py-16">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Suporte World Net</h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Estamos aqui para te ajudar. Confira nossas opções de atendimento.
              </p>
            </div>
          </div>
        </section>
        
        {/* Support Options */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-worldnet-blue mb-12">Canais de Atendimento</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-worldnet-gray-light p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-worldnet-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-worldnet-blue mb-3">WhatsApp</h3>
                <p className="text-worldnet-gray-dark mb-4">
                  Atendimento rápido e prático via mensagem
                </p>
                <Button 
                  asChild 
                  className="bg-worldnet-green hover:bg-worldnet-green/90 text-white"
                >
                  <a 
                    href={whatsappUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Iniciar conversa
                  </a>
                </Button>
              </div>
              
              <div className="bg-worldnet-gray-light p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-worldnet-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-worldnet-blue mb-3">E-mail</h3>
                <p className="text-worldnet-gray-dark mb-4">
                  Envie sua dúvida para nossa equipe
                </p>
                <Button 
                  asChild 
                  className="bg-worldnet-green hover:bg-worldnet-green/90 text-white"
                >
                  <a href="mailto:suporte@worldnet.com.br">
                    suporte@worldnet.com.br
                  </a>
                </Button>
              </div>
              
              <div className="bg-worldnet-gray-light p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-worldnet-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-worldnet-blue mb-3">Telefone</h3>
                <p className="text-worldnet-gray-dark mb-4">
                  Atendimento por telefone
                </p>
                <Button 
                  asChild 
                  className="bg-worldnet-green hover:bg-worldnet-green/90 text-white"
                >
                  <a href="tel:41920042357">
                    (41) 92004-2357
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="mt-12 text-center bg-worldnet-gray-light p-6 rounded-lg max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-worldnet-blue mr-2" />
                <h3 className="text-xl font-bold text-worldnet-blue">Horário de Funcionamento</h3>
              </div>
              <div className="text-worldnet-gray-dark">
                <p className="mb-2"><strong>Suporte Técnico:</strong> Segunda a Domingo, 24 horas</p>
                <p className="mb-2"><strong>Atendimento Comercial:</strong> Segunda a Sexta, 8h às 18h</p>
                <p><strong>Atendimento WhatsApp:</strong> Segunda a Sábado, 8h às 22h</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-worldnet-gray-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-worldnet-blue mb-8">Perguntas Frequentes</h2>
            <p className="text-center text-worldnet-gray-dark mb-12 max-w-2xl mx-auto">
              Confira as respostas para as dúvidas mais comuns dos nossos clientes
            </p>
            
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-worldnet-blue hover:text-worldnet-blue-light">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-worldnet-gray-dark">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-worldnet-blue mb-6">
              Ainda com dúvidas?
            </h2>
            <p className="text-worldnet-gray-dark mb-8 max-w-xl mx-auto">
              Fale diretamente com um de nossos especialistas de atendimento
            </p>
            
            <Button 
              size="lg" 
              asChild 
              className="bg-worldnet-green hover:bg-worldnet-green/90 text-white shadow-md hover:shadow-lg"
            >
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Falar com atendente
              </a>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default Suporte;
