
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Plans from '@/components/Plans';
import Testimonials from '@/components/Testimonials';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import WhatsappButton from '@/components/WhatsappButton';

const Index = () => {
  useEffect(() => {
    document.title = 'World Net | Internet de Alta Velocidade';
    
    // Adding structured data for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': 'World Net',
      'description': 'Provedor de internet de alta velocidade com fibra óptica',
      'url': window.location.href,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Av. Paulista, 1000',
        'addressLocality': 'São Paulo',
        'addressRegion': 'SP',
        'postalCode': '01310-000',
        'addressCountry': 'BR'
      },
      'telephone': '+55 41 92004-2357',
      'email': 'contato@worldnet.com.br',
      'openingHours': 'Mo-Fr 08:00-18:00, Sa 09:00-13:00'
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Hero />
      <Features />
      <Plans />
      <Testimonials />
      <Cta />
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default Index;
