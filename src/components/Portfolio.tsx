import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

const portfolioImages = [
  {
    id: 1,
    before: "https://images.unsplash.com/photo-1580618308533-5f2f4ff5a6a3?w=400&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1577880216142-8549e9488dad?w=400&h=400&fit=crop",
    title: "Micropigmentação Fio a Fio",
    description: "Técnica natural que imita os pelos da sobrancelha"
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=400&fit=crop",
    title: "Design Personalizado",
    description: "Formato único para cada rosto"
  },
  {
    id: 3,
    before: "https://images.unsplash.com/photo-1570662953942-c5bc8b4b2bb5?w=400&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop",
    title: "Efeito Powder Brows",
    description: "Resultado sombreado e natural"
  },
  {
    id: 4,
    before: "https://images.unsplash.com/photo-1605462863769-848ce4f37b59?w=400&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=400&fit=crop",
    title: "Correção de Assimetria",
    description: "Harmonização facial completa"
  }
];

export const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBefore, setShowBefore] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioImages.length);
    setShowBefore(true);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
    setShowBefore(true);
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
                src={showBefore ? currentImage.before : currentImage.after}
                alt={currentImage.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              
              {/* Before/After Toggle */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  showBefore 
                    ? 'bg-red-500 text-white' 
                    : 'bg-gradient-gold text-white'
                }`}>
                  {showBefore ? 'ANTES' : 'DEPOIS'}
                </span>
              </div>

              {/* Toggle Button */}
              <button
                onClick={() => setShowBefore(!showBefore)}
                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white transition-colors duration-200 flex items-center gap-2"
              >
                <Eye className="h-4 w-4" />
                Ver {showBefore ? 'Depois' : 'Antes'}
              </button>
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
                onClick={() => {
                  setCurrentIndex(index);
                  setShowBefore(true);
                }}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === currentIndex 
                    ? 'border-gold shadow-gold scale-110' 
                    : 'border-transparent hover:border-gold/50'
                }`}
              >
                <img
                  src={image.after}
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