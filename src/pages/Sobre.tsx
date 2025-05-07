
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MessageSquare, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WhatsappButton from '@/components/WhatsappButton';
import Cta from '@/components/Cta';

const Sobre = () => {
  useEffect(() => {
    document.title = 'Sobre | World Net';
    
    // Adding structured data for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'World Net',
      'description': 'Provedor de internet de fibra óptica na Barra da Lagoa, Florianópolis',
      'url': window.location.href,
      'logo': window.location.origin + '/logo.png',
      'foundingDate': '2023',
      'founders': {
        '@type': 'Person',
        'name': 'World Net Fundadores'
      },
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Barra da Lagoa',
        'addressLocality': 'Florianópolis',
        'addressRegion': 'SC',
        'postalCode': '88000-000',
        'addressCountry': 'BR'
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const supportWhatsappLink = "https://wa.me/5541920042357?text=Olá,%20já%20sou%20cliente%20WorldNet%20e%20preciso%20de%20suporte.";
  const consultantWhatsappLink = "https://wa.me/5541920042357?text=Olá!%20Estou%20interessado(a)%20em%20contratar%20internet%20com%20a%20World%20Net%20aqui%20na%20Barra%20da%20Lagoa%2C%20e%20gostaria%20de%20ver%20os%20planos%20disponíveis%20e%20os%20valores.%20Pode%20me%20ajudar%3F";

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="bg-worldnet-blue py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1577359472653-792a974e547d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&h=1000&q=80"
              alt="Barra da Lagoa"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre a World Net</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                O provedor de internet que está revolucionando a conexão na Barra da Lagoa, Florianópolis.
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-worldnet-blue mb-8">
                Conectando você ao futuro, hoje mesmo!
              </h2>
              
              <div className="prose prose-lg max-w-none text-worldnet-gray-dark">
                <p className="mb-6">
                  A <strong className="text-worldnet-blue">World Net</strong> nasceu com um objetivo claro: transformar o acesso à internet na <strong className="text-worldnet-blue">Barra da Lagoa, Florianópolis</strong>.
                </p>
                
                <p className="mb-6">
                  Cansados de promessas não cumpridas e conexões instáveis, decidimos criar uma operadora moderna, próxima do cliente e, acima de tudo, <strong className="text-worldnet-blue">comprometida com qualidade real</strong>.
                </p>
                
                <p className="mb-6">
                  Nosso diferencial vai além da velocidade: oferecemos <strong className="text-worldnet-blue">atendimento humanizado</strong>, <strong className="text-worldnet-blue">suporte ágil via WhatsApp</strong>, e <strong className="text-worldnet-blue">planos pensados para a realidade da nossa região</strong> — tudo com <strong className="text-worldnet-blue">fibra óptica de verdade</strong>, sem enrolação.
                </p>
                
                <p className="mb-6">
                  Acreditamos que internet de qualidade não é luxo — é necessidade. E é por isso que estamos aqui: para <strong className="text-worldnet-blue">levar conexão estável e veloz para cada casa, empresa e pessoa da nossa comunidade</strong>.
                </p>
                
                <p className="mb-6">
                  Seja para trabalhar, estudar, jogar ou simplesmente se manter conectado com quem importa, a World Net é a escolha inteligente e próxima de você.
                </p>
                
                <p className="text-xl font-medium">
                  <strong className="text-worldnet-blue">Estamos só começando. Bem-vindo à nova era da internet na Barra da Lagoa.</strong>
                </p>
              </div>
              
              <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  asChild 
                  className="bg-worldnet-green hover:bg-worldnet-green/90 text-white shadow-md hover:shadow-lg transition-all"
                >
                  <a 
                    href={consultantWhatsappLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Falar com um consultor agora
                  </a>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  asChild
                  className="border-worldnet-blue text-worldnet-blue hover:bg-worldnet-blue/10"
                >
                  <a 
                    href={supportWhatsappLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Já sou cliente e preciso de suporte
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values */}
        <section className="py-16 bg-worldnet-gray-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-worldnet-blue mb-12">Nossos Valores</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-worldnet-blue-light/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-worldnet-blue-light text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-worldnet-blue mb-3">Compromisso Local</h3>
                <p className="text-worldnet-gray-dark">
                  Criada por moradores para moradores da Barra da Lagoa, entendemos as necessidades específicas da nossa comunidade.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-worldnet-blue-light/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-worldnet-blue-light text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-worldnet-blue mb-3">Transparência</h3>
                <p className="text-worldnet-gray-dark">
                  Sem letras miúdas ou surpresas. Tudo claro, desde os preços até o que você realmente recebe.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-worldnet-blue-light/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-worldnet-blue-light text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-worldnet-blue mb-3">Proximidade</h3>
                <p className="text-worldnet-gray-dark">
                  Suporte rápido via WhatsApp e equipe local que conhece cada rua e particularidade da região.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-worldnet-blue-light/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-worldnet-blue-light text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-worldnet-blue mb-3">Inovação</h3>
                <p className="text-worldnet-gray-dark">
                  Tecnologia de ponta com fibra óptica genuína para garantir a melhor experiência de internet possível.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Image and CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=800&q=80" 
                  alt="Barra da Lagoa, Florianópolis" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-worldnet-blue mb-6">Transformando a conectividade da Barra da Lagoa</h2>
                <p className="text-worldnet-gray-dark mb-6">
                  O que começou como um sonho de oferecer uma alternativa melhor para nossa comunidade, hoje é uma realidade. Com investimento em infraestrutura de fibra óptica de última geração, estamos conectando cada vez mais lares e empresas com uma internet que realmente funciona.
                </p>
                <p className="text-worldnet-gray-dark mb-8">
                  Estamos criando uma rede não apenas de fibras, mas de pessoas satisfeitas e conectadas ao que realmente importa.
                </p>
                
                <Button 
                  asChild 
                  className="bg-worldnet-green hover:bg-worldnet-green/90 text-white shadow-md hover:shadow-lg"
                >
                  <a 
                    href="/planos"
                  >
                    Ver nossos planos
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <Cta />
      </main>
      
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default Sobre;
