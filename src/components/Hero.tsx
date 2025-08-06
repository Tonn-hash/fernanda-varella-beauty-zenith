import { Button } from "./ui/button";
import { ArrowRight, Calendar, Star } from "lucide-react";

interface HeroProps {
  type: "home" | "course";
}

export const Hero = ({ type }: HeroProps) => {
  if (type === "home") {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-gray overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight">
                  <span className="text-primary">Sobrancelhas</span>
                  <br />
                  <span className="bg-gradient-gold bg-clip-text text-transparent">
                    Perfeitas
                  </span>
                </h1>
                <p className="text-xl text-gray-medium font-light max-w-2xl">
                  Especialista em micropigmentação e design de sobrancelhas de alto padrão. 
                  Transformando olhares com técnicas exclusivas e resultados naturais.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-gradient-gold hover:shadow-gold transition-all duration-300 group"
                >
                  Agendar Consulta
                  <Calendar className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Ver Portfólio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Stats */}
              <div className="flex justify-center lg:justify-start gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">500+</div>
                  <div className="text-sm text-gray-medium">Clientes Atendidas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">5</div>
                  <div className="text-sm text-gray-medium">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Star className="h-6 w-6 text-gold fill-current" />
                    <span className="text-3xl font-bold text-gold">4.9</span>
                  </div>
                  <div className="text-sm text-gray-medium">Avaliação</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                <img 
                  src="/lovable-uploads/2a825609-9219-4a97-a2dd-c435d6233d91.png"
                  alt="Fernanda Varella - Especialista em Micropigmentação"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-elegant border border-border">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-gradient-gold rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Certificação Internacional</div>
                    <div className="text-sm text-gray-medium">PhiBrows Academy</div>
                  </div>
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