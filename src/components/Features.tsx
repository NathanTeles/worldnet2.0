
import React, { useEffect, useRef } from 'react';
import { Wifi, Globe, Shield, Zap, HeadphonesIcon, CheckCircle } from "lucide-react";

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.animate-on-scroll');
          elements.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add('animated');
            }, i * 100);
          });
        }
      });
    }, {
      threshold: 0.3
    });
    
    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }
    
    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <Wifi className="w-10 h-10 text-worldnet-blue" />,
      title: "Internet Fibra Óptica",
      description: "Tecnologia de ponta com conexão estável e velocidade consistente."
    },
    {
      icon: <Zap className="w-10 h-10 text-worldnet-blue" />,
      title: "Alta Velocidade",
      description: "Navegue, baixe arquivos e faça streaming sem interrupções."
    },
    {
      icon: <Shield className="w-10 h-10 text-worldnet-blue" />,
      title: "Conexão Segura",
      description: "Proteção avançada contra malwares e ameaças online."
    },
    {
      icon: <Globe className="w-10 h-10 text-worldnet-blue" />,
      title: "Ampla Cobertura",
      description: "Atendemos diversas regiões com a mesma qualidade e eficiência."
    },
    {
      icon: <HeadphonesIcon className="w-10 h-10 text-worldnet-blue" />,
      title: "Suporte 24 horas",
      description: "Equipe técnica disponível todos os dias para te atender."
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-worldnet-blue" />,
      title: "Sem Fidelidade",
      description: "Liberdade para você escolher quanto tempo quer ficar com a gente."
    }
  ];

  return (
    <section className="py-20 bg-white" ref={featuresRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-worldnet-blue mb-4">
            Por que escolher a World Net?
          </h2>
          <p className="text-worldnet-gray-dark max-w-2xl mx-auto">
            A melhor experiência em internet com tecnologia de ponta e serviço incomparável
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="animate-on-scroll p-6 border border-worldnet-gray-light rounded-lg hover:shadow-md transition-all"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-worldnet-blue mb-2">
                {feature.title}
              </h3>
              <p className="text-worldnet-gray-dark">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
