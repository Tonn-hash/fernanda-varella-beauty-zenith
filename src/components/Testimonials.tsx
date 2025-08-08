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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-gold/20">
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="h-8 w-8 text-gold opacity-50" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gold fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-medium mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-gold">{testimonial.service}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-gold-subtle p-8 rounded-2xl border border-gold/20">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
              Pronta para Sua Transformação?
            </h3>
            <p className="text-gray-medium mb-6 max-w-2xl mx-auto">
              Junte-se às centenas de mulheres que já transformaram seu olhar e autoestima 
              com nossas técnicas exclusivas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-gold text-white px-8 py-3 rounded-lg font-semibold hover:shadow-gold transition-all duration-300">
                Agendar Consulta Gratuita
              </button>
              <button className="border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-white transition-all duration-300">
                Ver Mais Depoimentos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};