import { Award, Heart, Star, Users } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src="/lovable-uploads/f26b2796-a343-4877-9209-3e9119c450fa.png"
                alt="Fernanda Varella - Profissional certificada"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Achievement */}
            <div className="absolute -top-6 -right-6 bg-gradient-gold p-4 rounded-xl shadow-gold">
              <Award className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary">
                Sobre <span className="bg-gradient-gold bg-clip-text text-transparent">Fernanda Varella</span>
              </h2>
              <p className="text-lg text-gray-medium leading-relaxed">
                Com mais de 5 anos de experiência no mercado da beleza, Fernanda Varella é especialista em 
                micropigmentação e design de sobrancelhas, formada pelas melhores academias internacionais.
              </p>
              <p className="text-lg text-gray-medium leading-relaxed">
                Sua missão é transformar a autoestima das mulheres através de técnicas avançadas e 
                personalizadas, sempre buscando resultados naturais e harmoniosos que realcem a 
                beleza única de cada cliente.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3 p-4 bg-gradient-gray rounded-xl">
                <div className="h-12 w-12 bg-gradient-gold rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-xl text-primary">500+</div>
                  <div className="text-sm text-gray-medium">Clientes Felizes</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gradient-gray rounded-xl">
                <div className="h-12 w-12 bg-gradient-gold rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-xl text-primary">4.9</div>
                  <div className="text-sm text-gray-medium">Avaliação</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gradient-gray rounded-xl">
                <div className="h-12 w-12 bg-gradient-gold rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-xl text-primary">5+</div>
                  <div className="text-sm text-gray-medium">Certificações</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gradient-gray rounded-xl">
                <div className="h-12 w-12 bg-gradient-gold rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-xl text-primary">100%</div>
                  <div className="text-sm text-gray-medium">Dedicação</div>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="p-6 bg-gradient-gold-subtle rounded-xl border-l-4 border-gold">
              <h3 className="font-serif font-bold text-lg text-primary mb-2">Nossa Missão</h3>
              <p className="text-gray-dark">
                "Realçar a beleza natural de cada mulher através de técnicas inovadoras e 
                personalizadas, sempre priorizando a naturalidade e harmonia do rosto."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};