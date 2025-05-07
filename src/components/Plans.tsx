
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PlanFeature {
  feature: string;
  included: boolean;
}

interface Plan {
  name: string;
  price: number;
  speed: number;
  featured?: boolean;
  description: string;
  features: PlanFeature[];
}

const Plans = () => {
  const plans: Plan[] = [
    {
      name: "Residencial Básico",
      price: 89.90,
      speed: 200,
      description: "Ideal para uso básico de internet, streaming e redes sociais.",
      features: [
        { feature: "200 Mbps de download", included: true },
        { feature: "100 Mbps de upload", included: true },
        { feature: "Wi-Fi de alta performance", included: true },
        { feature: "Suporte prioritário", included: false },
        { feature: "IP fixo", included: false },
      ],
    },
    {
      name: "Residencial Plus",
      price: 119.90,
      speed: 400,
      featured: true,
      description: "Perfeito para famílias e múltiplos dispositivos conectados.",
      features: [
        { feature: "400 Mbps de download", included: true },
        { feature: "200 Mbps de upload", included: true },
        { feature: "Wi-Fi de alta performance", included: true },
        { feature: "Suporte prioritário", included: true },
        { feature: "IP fixo", included: false },
      ],
    },
    {
      name: "Empresarial",
      price: 199.90,
      speed: 600,
      description: "Para empresas que necessitam de alta performance e confiabilidade.",
      features: [
        { feature: "600 Mbps de download", included: true },
        { feature: "300 Mbps de upload", included: true },
        { feature: "Wi-Fi de alta performance", included: true },
        { feature: "Suporte prioritário", included: true },
        { feature: "IP fixo", included: true },
      ],
    },
  ];

  return (
    <section id="plans" className="py-20 bg-worldnet-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-worldnet-blue mb-4">
            Planos para Você e sua Empresa
          </h2>
          <p className="text-worldnet-gray-dark max-w-2xl mx-auto">
            Escolha o plano ideal para suas necessidades com a qualidade e velocidade da fibra óptica World Net
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`plan-card group ${plan.featured ? 'featured' : ''}`}
            >
              {plan.featured && (
                <span className="absolute top-0 right-0 bg-worldnet-blue text-white text-xs px-3 py-1 uppercase font-bold">
                  Mais Popular
                </span>
              )}
              
              <h3 className="text-xl font-bold text-worldnet-blue mb-2">{plan.name}</h3>
              <p className="text-sm text-worldnet-gray mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <p className="text-sm text-worldnet-gray">A partir de</p>
                <div className="flex items-end">
                  <span className="text-3xl font-bold text-worldnet-blue">
                    R$ {plan.price.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-worldnet-gray text-sm ml-1">/mês</span>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-end mb-1">
                  <span className="text-4xl font-extrabold text-worldnet-blue">
                    {plan.speed}
                  </span>
                  <span className="text-worldnet-gray ml-1">Mbps</span>
                </div>
                <p className="text-sm text-worldnet-gray">Velocidade de Download</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check 
                      className={`w-5 h-5 mr-2 ${feature.included ? 'text-worldnet-green' : 'text-worldnet-gray-light'}`} 
                    />
                    <span className={feature.included ? 'text-worldnet-gray-dark' : 'text-worldnet-gray'}>
                      {feature.feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${plan.featured 
                  ? 'bg-worldnet-green hover:bg-worldnet-green/90' 
                  : 'bg-worldnet-blue hover:bg-worldnet-blue/90'}`}
              >
                Assinar agora
              </Button>
            </div>
          ))}
        </div>
        
        <p className="text-center text-worldnet-gray mt-10">
          * Todos os planos incluem instalação gratuita e equipamentos em comodato
        </p>
      </div>
    </section>
  );
};

export default Plans;
