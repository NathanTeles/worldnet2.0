
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Página não encontrada | World Net";
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1 flex items-center justify-center bg-worldnet-gray-light py-20">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-extrabold text-worldnet-blue">404</h1>
          <p className="text-2xl text-worldnet-gray-dark mb-8">
            Oops! Página não encontrada
          </p>
          <p className="text-worldnet-gray-dark mb-8 max-w-md mx-auto">
            A página que você está procurando pode ter sido removida, renomeada ou está temporariamente indisponível.
          </p>
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para a página inicial
            </Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
