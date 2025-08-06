import { Star, Quote } from "lucide-react";
import { Card } from "./ui/card";

const testimonials = [
  {
    id: 1,
    name: "Marina Silva",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Fernanda é simplesmente incrível! Minha sobrancelha ficou perfeita, exatamente como eu sempre sonhei. O resultado é muito natural e duradouro.",
    service: "Micropigmentação Fio a Fio"
  },
  {
    id: 2,
    name: "Carla Mendes",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Profissional excepcional! Explicou todo o processo, me deixou muito tranquila. O ambiente é acolhedor e o resultado superou minhas expectativas.",
    service: "Design + Micropigmentação"
  },
  {
    id: 3,
    name: "Ana Paula",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Depois de anos tentando fazer minha sobrancelha em casa, finalmente encontrei a Fernanda. Mudou completamente meu rosto! Recomendo demais.",
    service: "Correção de Assimetria"
  },
  {
    id: 4,
    name: "Juliana Costa",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Atendimento impecável desde o primeiro contato. Fernanda tem um olhar artístico único. Minha autoestima aumentou muito depois do procedimento!",
    service: "Powder Brows"
  },
  {
    id: 5,
    name: "Roberta Lima",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Experiência maravilhosa! Fernanda é muito cuidadosa, usa produtos de qualidade e o resultado é incrível. Vale cada centavo investido.",
    service: "Micropigmentação Completa"
  },
  {
    id: 6,
    name: "Camila Santos",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Sempre tive vergonha das minhas sobrancelhas. A Fernanda transformou não só meu olhar, mas minha confiança. Profissional top!",
    service: "Reconstrução Total"
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
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
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