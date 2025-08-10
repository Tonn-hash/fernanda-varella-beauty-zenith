import { Button } from "./ui/button";
import { ArrowRight, Calendar, Star } from "lucide-react";

interface HeroProps {
  type: "home" | "course";
}

export const Hero = ({ type }: HeroProps) => {
  if (type === "home") {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-gold-light/5 overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 bg-dots opacity-20"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-gold rounded-full blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-luxury rounded-full blur-3xl opacity-5"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold rounded-full animate-float opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gold-light rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-gold-dark rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container-luxury section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            {/* Content */}
            <div className="text-center lg:text-left space-y-10 animate-fade-in-up">
              <div className="space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-gold-subtle border border-gold/20 rounded-full text-sm font-medium text-gold-dark">
                  <Star className="w-4 h-4" />
                  Especialista Certificada
                </div>
                
                <h1 className="heading-hero">
                  <span className="text-primary block">Sobrancelhas</span>
                  <span className="text-luxury block mt-2">Perfeitas</span>
                  <span className="text-gray-medium text-xl lg:text-2xl font-sans font-light block mt-4">
                    que realçam sua beleza natural
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-medium font-light max-w-2xl leading-relaxed">
                  Transforme seu olhar com técnicas exclusivas de <span className="text-gold font-medium">micropigmentação premium</span>. 
                  Resultados naturais que valorizam sua identidade única.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Button 
                  variant="premium"
                  size="xl" 
                  className="group"
                  onClick={() => {
                    window.open('https://wa.me/message/DLP37RY6F3Y7E1', '_blank');
                  }}
                >
                  Agendar pelo WhatsApp
                  <Calendar className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  className="border-2 border-gold/30 text-gold hover:bg-gold hover:text-white hover:border-gold"
                >
                  Ver Portfólio
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>

              {/* Premium Stats */}
              <div className="flex justify-center lg:justify-start gap-12 pt-12">
                <div className="text-center group hover-lift">
                  <div className="text-4xl xl:text-5xl font-serif font-bold text-luxury mb-2">500+</div>
                  <div className="text-sm text-gray-medium font-medium tracking-wide uppercase">Clientes Transformadas</div>
                </div>
                <div className="text-center group hover-lift">
                  <div className="text-4xl xl:text-5xl font-serif font-bold text-luxury mb-2">5</div>
                  <div className="text-sm text-gray-medium font-medium tracking-wide uppercase">Anos de Excelência</div>
                </div>
                <div className="text-center group hover-lift">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Star className="h-7 w-7 text-gold fill-current" />
                    <span className="text-4xl xl:text-5xl font-serif font-bold text-luxury">4.9</span>
                  </div>
                  <div className="text-sm text-gray-medium font-medium tracking-wide uppercase">Avaliação Média</div>
                </div>
              </div>
            </div>

            {/* Premium Image Section */}
            <div className="relative animate-slide-in-right">
              {/* Main Image Container */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-gold opacity-20 rounded-3xl blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-elegant group-hover:shadow-gold transition-all duration-500">
                  <img 
                    src="/lovable-uploads/2a825609-9219-4a97-a2dd-c435d6233d91.png"
                    alt="Fernanda Varella - Especialista em Micropigmentação"
                    className="w-full h-[700px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-gold/10"></div>
                </div>
              </div>
              
              {/* Premium Floating Cards */}
              <div className="absolute -bottom-8 -left-8 card-premium p-6 animate-float backdrop-blur-sm bg-card/95 border-gold/20">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 bg-gradient-gold rounded-2xl flex items-center justify-center shadow-gold">
                    <Star className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <div className="font-serif font-semibold text-lg text-primary">Certificação</div>
                    <div className="text-gold font-medium">PhiBrows Academy</div>
                    <div className="text-xs text-gray-medium">Internacional</div>
                  </div>
                </div>
              </div>

              {/* Secondary Floating Element */}
              <div className="absolute -top-6 -right-6 card-glass p-4 text-white animate-pulse-glow">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gold rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Atendimento Premium</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Course Hero
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-luxury text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-gradient-gold text-primary rounded-full text-sm font-semibold">
              🎓 CURSO PROFISSIONAL
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight">
              <span className="text-white">Master em</span>
              <br />
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Micropigmentação
              </span>
            </h1>
            
            <p className="text-xl text-gray-light font-light max-w-3xl mx-auto">
              Domine as técnicas mais avançadas de micropigmentação e design de sobrancelhas. 
              Torne-se uma profissional de alto padrão no mercado da beleza.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-gold hover:shadow-gold transition-all duration-300 text-lg px-8 py-4 group"
              onClick={() => {
                window.open('https://wa.me/message/DLP37RY6F3Y7E1', '_blank');
              }}
            >
              Garantir Minha Vaga
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold text-gold">R$ 2.997</div>
              <div className="text-sm text-gray-light">ou 12x de R$ 299</div>
            </div>
          </div>

          {/* Course Benefits */}
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="h-4 w-4 text-gold" />
              <span className="text-sm">Certificado Internacional</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="h-4 w-4 text-gold" />
              <span className="text-sm">Kit Profissional Incluso</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="h-4 w-4 text-gold" />
              <span className="text-sm">Suporte Vitalício</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};