import { Award, Heart, Star, Users } from "lucide-react";

export const About = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-background to-gold-light/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dots opacity-10"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-gold rounded-full blur-3xl opacity-5 animate-float"></div>
      
      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Premium Image Section */}
          <div className="relative animate-slide-in-left">
            {/* Main Image Container */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-gold opacity-20 rounded-3xl blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-elegant group-hover:shadow-gold transition-all duration-500">
                <img 
                  src="/lovable-uploads/f26b2796-a343-4877-9209-3e9119c450fa.png"
                  alt="Fernanda Varella - Profissional certificada"
                  className="w-full h-[700px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-gold/10"></div>
              </div>
            </div>
            
            {/* Premium Floating Achievement */}
            <div className="absolute -top-8 -right-8 card-premium p-6 animate-float bg-card/95 backdrop-blur-sm border-gold/20">
              <div className="h-16 w-16 bg-gradient-gold rounded-2xl flex items-center justify-center shadow-gold">
                <Award className="h-8 w-8 text-white" />
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-luxury rounded-full blur-2xl opacity-30 animate-pulse-glow"></div>
          </div>

          {/* Premium Content */}
          <div className="space-y-12 animate-fade-in-up">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-gold-subtle border border-gold/20 rounded-full text-sm font-medium text-gold-dark">
                <Star className="w-4 h-4" />
                Especialista Certificada
              </div>

              <h2 className="heading-section">
                Sobre <span className="text-luxury">Fernanda Varella</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-xl text-gray-medium leading-relaxed font-light">
                  Com mais de <span className="text-gold font-medium">5 anos de excelência</span> no mercado da beleza, 
                  Fernanda Varella é especialista reconhecida em micropigmentação e design de sobrancelhas, 
                  <span className="text-gold font-medium"> formada pelas melhores academias internacionais</span>.
                </p>
                <p className="text-xl text-gray-medium leading-relaxed font-light">
                  Sua missão é <span className="text-gold font-medium">transformar a autoestima</span> das mulheres através de 
                  técnicas avançadas e personalizadas, sempre buscando resultados naturais que realcem a 
                  <span className="text-luxury"> beleza única</span> de cada cliente.
                </p>
              </div>
            </div>

            {/* Premium Achievements Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="card-premium p-6 hover-glow group">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 bg-gradient-gold rounded-2xl flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-2xl text-luxury">500+</div>
                    <div className="text-sm text-gray-medium font-medium tracking-wide">Clientes Transformadas</div>
                  </div>
                </div>
              </div>

              <div className="card-premium p-6 hover-glow group">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 bg-gradient-gold rounded-2xl flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-2xl text-luxury">4.9</div>
                    <div className="text-sm text-gray-medium font-medium tracking-wide">Avaliação Excelência</div>
                  </div>
                </div>
              </div>

              <div className="card-premium p-6 hover-glow group">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 bg-gradient-gold rounded-2xl flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-2xl text-luxury">5+</div>
                    <div className="text-sm text-gray-medium font-medium tracking-wide">Certificações Internacionais</div>
                  </div>
                </div>
              </div>

              <div className="card-premium p-6 hover-glow group">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 bg-gradient-gold rounded-2xl flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-2xl text-luxury">100%</div>
                    <div className="text-sm text-gray-medium font-medium tracking-wide">Dedicação Total</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Mission Card */}
            <div className="card-premium p-8 bg-gradient-to-r from-gold-light/10 to-gold/5 border-l-4 border-gold relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-gold rounded-full blur-3xl opacity-10"></div>
              <div className="relative z-10">
                <h3 className="font-serif font-bold text-2xl text-luxury mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-gold rounded-full"></div>
                  Nossa Missão
                </h3>
                <blockquote className="text-lg text-gray-dark leading-relaxed italic">
                  "Realçar a <span className="text-gold font-medium">beleza natural</span> de cada mulher através de 
                  <span className="text-luxury"> técnicas inovadoras</span> e personalizadas, sempre priorizando a 
                  naturalidade e harmonia que celebra a <span className="text-gold font-medium">individualidade única</span> 
                  de cada cliente."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};