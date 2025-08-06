import { Logo } from "./Logo";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Logo className="text-white" size="md" />
            <p className="text-gray-light max-w-md leading-relaxed">
              Especialista em micropigmentação e design de sobrancelhas de alto padrão. 
              Transformando olhares com técnicas exclusivas e resultados naturais.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-gold transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-gold transition-all duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-gold transition-all duration-300"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-light hover:text-gold transition-colors">
                  Sobre Fernanda
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-light hover:text-gold transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-light hover:text-gold transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#booking" className="text-gray-light hover:text-gold transition-colors">
                  Agendamento
                </a>
              </li>
              <li>
                <a href="/curso" className="text-gray-light hover:text-gold transition-colors">
                  Curso Profissional
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                <div className="text-gray-light text-sm">
                  Rua das Flores, 123 - Sala 45<br />
                  Vila Madalena, São Paulo - SP
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <div className="text-gray-light text-sm">
                  (11) 99999-9999
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <div className="text-gray-light text-sm">
                  contato@fernandavarella.com.br
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-light text-sm">
              © 2024 Fernanda Varella Beauty Academy. Todos os direitos reservados.
            </div>
            
            <div className="text-gray-light text-sm">
              CNPJ: 12.345.678/0001-90
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-light hover:text-gold transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-light hover:text-gold transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};