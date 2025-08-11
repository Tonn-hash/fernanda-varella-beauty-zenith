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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
            O Que Dizem Nossas <span className="bg-gradient-gold bg-clip-text text-transparent">Clientes</span>
          </h2>
          <p className="text-lg text-gray-medium max-w-2xl mx-auto">
            Histórias reais de transformação e satisfação. Veja o que nossas clientes 
            falam sobre nossa experiência única.
          </p>
        </div>

        {/* Premium Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="card-premium p-8 hover-glow group relative overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Decorative Quote Background */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-gold/10 rounded-full flex items-center justify-center opacity-50">
                <Quote className="h-8 w-8 text-gold" />
              </div>
              
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-medium mb-8 leading-relaxed text-lg relative z-10 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Premium Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gold/20">
                <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center text-white font-bold text-xl shadow-gold group-hover:scale-110 transition-transform duration-300">
                  {testimonial.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="font-serif font-semibold text-lg text-primary">{testimonial.name}</div>
                  <div className="text-sm text-gold font-medium">{testimonial.service}</div>
                  <div className="text-xs text-gray-medium mt-1">{testimonial.period}</div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-xl border-2 border-gold/0 group-hover:border-gold/30 transition-all duration-300 pointer-events-none"></div>
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