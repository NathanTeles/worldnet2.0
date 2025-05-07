import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  Clock
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-worldnet-gray-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src="/lovable-uploads/1287acf7-f6c9-4ed8-a427-817fa3652588.png" 
                alt="World Net Logo" 
                className="h-12 w-auto logo-transparent"
              />
            </div>
            <p className="text-white/70 mb-6">
              Seu provedor de internet de alta velocidade com fibra óptica, 
              oferecendo os melhores planos para residências e empresas.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-white/70 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-white/70 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white/70 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="YouTube" className="text-white/70 hover:text-white">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/planos" className="text-white/70 hover:text-white transition-colors">
                  Planos e Preços
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-white/70 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/70 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/termos" className="text-white/70 hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-white/70 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-white/70 hover:text-white transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link to="/lgpd" className="text-white/70 hover:text-white transition-colors">
                  LGPD
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-worldnet-green shrink-0" />
                <span className="text-white/70">
                  41 92004-2357
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-worldnet-green shrink-0" />
                <span className="text-white/70">
                  contato@worldnet.com.br
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-worldnet-green shrink-0" />
                <span className="text-white/70">
                  Av. Paulista, 1000, São Paulo, SP
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-worldnet-green shrink-0" />
                <span className="text-white/70">
                  Seg-Sex: 8h às 18h<br />
                  Sáb: 9h às 13h
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50">
            © {currentYear} World Net. Todos os direitos reservados. CNPJ: 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
