import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const portfolioImages = [
  {
    id: 1,
    image: "/lovable-uploads/644ab699-da90-4902-8735-a7fdfaa134ff.png",
    title: "Micropigmentação Fio a Fio",
    description: "Técnica natural que imita os pelos da sobrancelha"
  },
  {
    id: 2,
    image: "/lovable-uploads/a5bcc927-318a-4ac8-a47f-ff05feb471ad.png",
    title: "Design Personalizado",
    description: "Formato único para cada rosto"
  },
  {
    id: 3,
    image: "/lovable-uploads/80264689-3300-43f5-8f78-f46af0a924b0.png",
    title: "Efeito Powder Brows",
    description: "Resultado sombreado e natural"
  },
  {
    id: 4,
    image: "/lovable-uploads/ee5c1e1f-a94c-4aee-ba29-f0ee9e2c79db.png",
    title: "Correção de Assimetria",
    description: "Harmonização facial completa"
  }
];

export const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
  };

  const currentImage = portfolioImages[currentIndex];

  return (
    <section className="py-20 bg-gradient-gray">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
            Nosso <span className="bg-gradient-gold bg-clip-text text-transparent">Portfólio</span>
          </h2>
          <p className="text-lg text-gray-medium max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos e veja a transformação incrível que 
            proporcionamos às nossas clientes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Image Display */}
          <div className="relative mb-8">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant aspect-video">
              <img
                src={currentImage.image}
                alt={currentImage.title}
                className={`w-full h-full transition-all duration-500 ${
                  currentIndex === 3 ? 'object-cover object-top' : 'object-cover'
                }`}
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-soft hover:bg-white transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-soft hover:bg-white transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Image Info */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif font-bold text-primary mb-2">
              {currentImage.title}
            </h3>
            <p className="text-gray-medium">
              {currentImage.description}
            </p>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-4 mb-8">
            {portfolioImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setCurrentIndex(index)}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === currentIndex 
                    ? 'border-gold shadow-gold scale-110' 
                    : 'border-transparent hover:border-gold/50'
                }`}
              >
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-gold hover:shadow-gold transition-all duration-300"
            >
              Agendar Minha Transformação
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};