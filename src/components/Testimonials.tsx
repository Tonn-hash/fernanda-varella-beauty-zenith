import { Star, Quote } from "lucide-react";
import { Card } from "./ui/card";

const testimonials = [
  {
    id: 1,
    name: "Zingara Nascimento",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Estava extremamente insegura, não por receio de que o resultado ficasse ruim, mas por se tratar de algo no meu rosto. Sempre fui uma pessoa discreta e, por isso, não queria nada que chamasse atenção ou alterasse minha identidade visual.",
    service: "Micropigmentação",
    period: "2 meses atrás"
  },
  {
    id: 2,
    name: "Ana Raquel Barros Deziderio",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Atendimento maravilhoso, excelente profissional e entrega um resultado impecável. Amei minha micropigmentação na sobrancelha e na boca. Indico de olhos fechados!",
    service: "Micropigmentação Sobrancelha e Lábios",
    period: "1 mês atrás"
  },
  {
    id: 3,
    name: "Waléria Barreto",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Espaço super aconchegante, atendimento atencioso e delicado, cafezinho com biscoitos especiais 🥰 A especialista tem mãos de fadas que deixa todo procedimento light. Ameiiiii de mais 🫶🏻",
    service: "Micropigmentação",
    period: "Recente"
  },
  {
    id: 4,
    name: "Albanita Alves",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Eu amo o seu trabalho, você é uma excelente profissional, eu me sinto em casa, ficou tão à vontade que você se tornou uma amiga.",
    service: "Micropigmentação",
    period: "Recente"
  },
  {
    id: 5,
    name: "Thainara Alita",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Ótimo atendimento, muito profissional e excelente trabalho! Amei e recomendo 😍",
    service: "Micropigmentação",
    period: "Recente"
  },
  {
    id: 6,
    name: "Gleyce Oliveira",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Eu, Gleyce Oliveira, amei minha micropigmentação fio a fio e irei voltar novamente, ficou perfeita o antes e o depois.",
    service: "Micropigmentação Fio a Fio",
    period: "Recente"
  }
];

export const Testimonials = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-background to-gold-light/2 relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 bg-dots opacity-6"></div>
      <div className="absolute top-32 right-32 w-80 h-80 bg-gradient-gold rounded-full blur-3xl opacity-4 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-luxury rounded-full blur-3xl opacity-3"></div>
      
      <div className="container-luxury relative z-10">
        {/* Luxury Header */}
        <div className="text-center mb-20 space-luxury">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-gold-subtle border border-gold/25 rounded-full text-sm font-semibold text-gold-dark shadow-soft backdrop-blur-sm mb-8">
            <Quote className="w-4 h-4" />
            Experiências Reais
          </div>
          
          <h2 className="heading-section text-balance mb-8">
            O Que Dizem Nossas <span className="text-luxury">Clientes</span>
          </h2>
          <p className="text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed text-balance">
            Histórias reais de transformação e satisfação. Veja o que nossas clientes 
            falam sobre nossa experiência única e sofisticada.
          </p>
        </div>

        {/* Luxury Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="card-testimonial hover-glow group relative overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Luxury Quote Background */}
              <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-gold/8 rounded-full flex items-center justify-center opacity-60">
                <Quote className="h-10 w-10 text-gold" />
              </div>
              
              {/* Premium Rating Stars */}
              <div className="flex gap-2 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-gold fill-current" />
                ))}
              </div>

              {/* Elegant Testimonial Text */}
              <blockquote className="text-gray-medium mb-10 leading-relaxed text-lg relative z-10 italic font-light text-balance">
                "{testimonial.text}"
              </blockquote>

              {/* Luxury Client Info */}
              <div className="flex items-center gap-5 pt-6 border-t border-gold/15">
                <div className="w-16 h-16 rounded-3xl bg-gradient-premium flex items-center justify-center text-background font-bold text-xl shadow-gold group-hover:scale-110 transition-transform duration-400">
                  {testimonial.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="font-serif font-semibold text-xl text-primary">{testimonial.name}</div>
                  <div className="text-sm text-gold font-semibold">{testimonial.service}</div>
                  <div className="text-xs text-gray-medium mt-1.5">{testimonial.period}</div>
                </div>
              </div>

              {/* Luxury Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-gold/0 group-hover:border-gold/25 transition-all duration-400 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Premium CTA Section */}
        <div className="mt-20">
          <div className="card-premium p-12 bg-gradient-to-r from-gold-light/10 to-gold/5 border-l-4 border-gold relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-gold rounded-full blur-3xl opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-luxury rounded-full blur-3xl opacity-5"></div>
            
            <div className="relative z-10 space-y-8">
              <div>
                <h3 className="font-serif font-bold text-3xl lg:text-4xl text-luxury mb-4">
                  Pronta para Sua Transformação?
                </h3>
                <p className="text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed font-light">
                  Junte-se às centenas de mulheres que já <span className="text-gold font-medium">transformaram 
                  seu olhar e autoestima</span> com nossas técnicas exclusivas e personalizadas.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                  className="btn-premium"
                  onClick={() => window.open('https://wa.me/message/DLP37RY6F3Y7E1', '_blank')}
                >
                  Agendar pelo WhatsApp
                </button>
                <button className="btn-glass border border-gold/30 text-gold hover:bg-gold hover:text-white">
                  Ver Mais Depoimentos
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 pt-6 border-t border-gold/20">
                <div className="flex items-center gap-2 text-sm text-gray-medium">
                  <Star className="w-4 h-4 text-gold" />
                  <span>Atendimento personalizado</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-medium">
                  <Star className="w-4 h-4 text-gold" />
                  <span>Certificação internacional</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-medium">
                  <Star className="w-4 h-4 text-gold" />
                  <span>Resultados garantidos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};