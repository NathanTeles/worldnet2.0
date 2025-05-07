
import React from 'react';
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  location: string;
  stars: number;
  text: string;
  image: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Carlos Silva",
      location: "São Paulo, SP",
      stars: 5,
      text: "A instalação foi rápida e desde então a internet nunca caiu. Velocidade consistente mesmo em horários de pico. Recomendo muito!",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Ana Ferreira",
      location: "Rio de Janeiro, RJ",
      stars: 5,
      text: "Finalmente uma internet que me permite trabalhar de casa sem interrupções. O suporte técnico é muito eficiente e rápido.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Ricardo Gomes",
      location: "Belo Horizonte, MG",
      stars: 4,
      text: "Depois de testar vários provedores, encontrei na World Net a estabilidade que precisava para minhas videoconferências.",
      image: "https://randomuser.me/api/portraits/men/62.jpg"
    }
  ];

  return (
    <section className="py-20 bg-worldnet-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-worldnet-blue mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-worldnet-gray-dark max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior orgulho
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-worldnet-blue">{testimonial.name}</h3>
                  <p className="text-sm text-worldnet-gray">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-worldnet-gray"
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-worldnet-gray-dark">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
