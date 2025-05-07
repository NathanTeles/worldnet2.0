
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Coverage = () => {
  const [cep, setCep] = useState('');
  const { toast } = useToast();

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length > 5) {
      value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    }
    
    if (value.length > 9) {
      value = value.slice(0, 9);
    }
    
    setCep(value);
  };

  const checkCoverage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cep.length < 8) {
      toast({
        title: "CEP incompleto",
        description: "Por favor, digite um CEP válido",
        variant: "destructive",
      });
      return;
    }
    
    // Simulating a coverage check
    toast({
      title: "Verificação de Cobertura",
      description: "Temos cobertura na sua região! Um consultor entrará em contato em breve.",
    });
    
    setCep('');
  };

  return (
    <section id="coverage" className="py-20 bg-worldnet-blue text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Verifique a cobertura World Net na sua região
            </h2>
            <p className="text-white/80 mb-8">
              Estamos expandindo nossa rede de fibra óptica para levar internet de alta velocidade a cada vez mais lugares. 
              Verifique se já atendemos sua região.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8">
              <form onSubmit={checkCoverage} className="space-y-4">
                <div>
                  <label htmlFor="coverage-cep" className="block text-sm font-medium text-white/90 mb-1">
                    Digite seu CEP
                  </label>
                  <div className="flex space-x-2">
                    <Input
                      id="coverage-cep"
                      type="text"
                      placeholder="00000-000"
                      value={cep}
                      onChange={handleCepChange}
                      className="bg-white/20 border-white/30 placeholder:text-white/50 text-white"
                    />
                    <Button type="submit" className="bg-worldnet-green hover:bg-worldnet-green/90">
                      Verificar
                    </Button>
                  </div>
                </div>
              </form>
              
              <div className="mt-6 flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-worldnet-green" />
                <p className="text-sm text-white/80">
                  Atendemos principalmente as regiões de São Paulo, Rio de Janeiro, Belo Horizonte e cidades próximas.
                  Entre em contato para saber sobre planos de expansão.
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Mapa de cobertura World Net" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
