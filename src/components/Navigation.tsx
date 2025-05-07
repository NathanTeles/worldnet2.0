
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Home, Phone, BookOpen, MapPin, HelpCircle, User, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // WhatsApp link with pre-filled message - updated format
  const whatsappMessage = "Olá! Estou interessado(a) em contratar internet com a World Net aqui na Barra da Lagoa, e gostaria de ver os planos disponíveis e os valores. Pode me ajudar?";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=5541920042357&text=${encodeURIComponent(whatsappMessage)}`;

  const navItems = [
    { name: 'Início', href: '/', icon: <Home className="w-4 h-4 mr-1" /> },
    { name: 'Planos', href: '/planos', icon: <BookOpen className="w-4 h-4 mr-1" /> },
    { name: 'Sobre', href: '/sobre', icon: <Home className="w-4 h-4 mr-1" /> },
    { name: 'Suporte', href: '/suporte', icon: <HelpCircle className="w-4 h-4 mr-1" /> },
    { name: 'Contato', href: '/contato', icon: <Phone className="w-4 h-4 mr-1" /> },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'scrolled-header' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/1287acf7-f6c9-4ed8-a427-817fa3652588.png" 
            alt="World Net Logo" 
            className="h-10 w-auto drop-shadow-md logo-transparent"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.href}
              className="flex items-center text-white hover:text-worldnet-green transition-colors drop-shadow-sm"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button asChild className="bg-worldnet-green hover:bg-worldnet-green/90 text-white shadow-sm">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Phone className="w-4 h-4 mr-2" />
              Fale Conosco
            </a>
          </Button>
        </div>

        {/* Mobile trigger */}
        <button
          className="md:hidden p-2 text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 z-50 bg-white p-5 flex flex-col transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex justify-between items-center mb-8">
            <img 
              src="/lovable-uploads/1287acf7-f6c9-4ed8-a427-817fa3652588.png" 
              alt="World Net Logo" 
              className="h-8 w-auto logo-transparent"
            />
            <button onClick={toggleMenu} aria-label="Close menu">
              <X />
            </button>
          </div>

          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center text-worldnet-gray-dark hover:text-worldnet-blue transition-colors"
                onClick={toggleMenu}
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </Link>
            ))}
          </div>

          <div className="mt-auto space-y-4 pt-8">
            <Button className="w-full justify-center bg-worldnet-green hover:bg-worldnet-green/90" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
                <Phone className="w-4 h-4 mr-2" />
                Fale Conosco
              </a>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
