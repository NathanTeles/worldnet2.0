
import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MessageSquare, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import WhatsappButton from '@/components/WhatsappButton';

const Contato = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  // WhatsApp link with pre-filled message
  const whatsappUrl = "https://wa.me/5541920042357?text=Olá!%20Estou%20interessado(a)%20em%20contratar%20internet%20com%20a%20World%20Net%20aqui%20na%20Barra%20da%20Lagoa%2C%20e%20gostaria%20de%20ver%20os%20planos%20disponíveis%20e%20os%20valores.%20Pode%20me%20ajudar%3F";

  useEffect(() => {
    document.title = 'Contato | World Net';
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !phone || !message) {
      toast({
        title: "Dados incompletos",
        description: "Por favor, preencha todos os campos do formulário",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Mensagem enviada!",
      description: "Agradecemos seu contato. Retornaremos em breve.",
      variant: "default",
    });
    
    // Reset form
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="bg-worldnet-blue py-16">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Estamos prontos para te atender e tirar todas as suas dúvidas
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Info & Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-worldnet-blue mb-8">Informações de Contato</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-worldnet-blue-light/10 p-3 rounded-full mr-4">
                      <MapPin className="w-6 h-6 text-worldnet-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-worldnet-blue mb-2">Endereço</h3>
                      <p className="text-worldnet-gray-dark">
                        Barra da Lagoa, Florianópolis - SC<br />
                        CEP: 88061-000
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-worldnet-blue-light/10 p-3 rounded-full mr-4">
                      <Phone className="w-6 h-6 text-worldnet-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-worldnet-blue mb-2">Telefone</h3>
                      <p className="text-worldnet-gray-dark">
                        (41) 92004-2357
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-worldnet-blue-light/10 p-3 rounded-full mr-4">
                      <Mail className="w-6 h-6 text-worldnet-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-worldnet-blue mb-2">E-mail</h3>
                      <p className="text-worldnet-gray-dark">
                        contato@worldnet.com.br<br />
                        suporte@worldnet.com.br
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-worldnet-blue mb-4">Atendimento Rápido</h3>
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
                      Falar pelo WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-worldnet-gray-light p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-worldnet-blue mb-6">Envie uma Mensagem</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-worldnet-gray-dark mb-1">
                      Nome Completo
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-worldnet-gray-dark mb-1">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-worldnet-gray-dark mb-1">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-worldnet-gray-dark mb-1">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full min-h-[120px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-worldnet-blue hover:bg-worldnet-blue/90">
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default Contato;
