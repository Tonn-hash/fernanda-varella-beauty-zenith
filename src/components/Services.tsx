import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Scissors, 
  Palette, 
  Sparkles, 
  Zap, 
  Package, 
  Eye,
  Clock,
  DollarSign,
  Calendar
} from "lucide-react";

interface Service {
  name: string;
  price: string;
  duration: string;
  description: string;
  highlight?: boolean;
  packageInfo?: string;
}

interface ServiceCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  services: Service[];
}

export const Services = () => {
  const [activeCategory, setActiveCategory] = useState("design");

  const handleBooking = (serviceName: string) => {
    const message = `Olá! Gostaria de agendar o serviço: ${serviceName}`;
    const whatsappUrl = `https://wa.me/message/DLP37RY6F3Y7E1?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const categories: ServiceCategory[] = [
    {
      id: "design",
      name: "Design de Sobrancelhas",
      icon: <Scissors className="h-5 w-5" />,
      services: [
        {
          name: "Design de Sobrancelhas",
          price: "R$ 40,00",
          duration: "25 min",
          description: "Mapeamento adequado para tipo de rosto, spa das sobrancelhas e massagem no local."
        },
        {
          name: "Design com Henna",
          price: "R$ 55,00",
          duration: "30 min",
          description: "Mapeamento personalizado, design e aplicação de henna (cor de acordo com cada fototipo)."
        },
        {
          name: "Design com Tintura",
          price: "R$ 55,00",
          duration: "30 min",
          description: "Ideal para cobrir fios brancos, com duração de até 6 semanas."
        },
        {
          name: "Design Reconstrutivo",
          price: "R$ 56,00",
          duration: "30 min",
          description: "Indicado para sobrancelhas com falhas, oleosas ou com caspa."
        },
        {
          name: "Glow Brows",
          price: "R$ 55,00",
          duration: "30 min",
          description: "Banho de brilho nos fios para aspecto saudável."
        },
        {
          name: "Glow Up",
          price: "R$ 175,00",
          duration: "40 min",
          description: "Técnica com vitaminas para crescimento de novos fios.",
          highlight: true,
          packageInfo: "Pacote com 3 sessões: R$ 400,00"
        }
      ]
    },
    {
      id: "micropigmentacao",
      name: "Micropigmentação",
      icon: <Palette className="h-5 w-5" />,
      services: [
        {
          name: "Avaliação de Micropigmentação",
          price: "R$ 60,00",
          duration: "30 min",
          description: "Valor descontado caso a cliente feche o procedimento em até 8 dias."
        },
        {
          name: "Correção de Simetria ou Camuflagem",
          price: "R$ 180,00",
          duration: "50 min",
          description: "Não inclui micropigmentação."
        },
        {
          name: "Flor Brows Nano Fios",
          price: "R$ 600,00",
          duration: "1h",
          description: "Técnica de fios hiper realistas. Inclui retorno de 30 dias.",
          highlight: true
        },
        {
          name: "Fio a Fio",
          price: "R$ 450,00",
          duration: "1h30min",
          description: "Simula fios naturais. Inclui retorno + pomada."
        },
        {
          name: "Shadingline",
          price: "R$ 500,00",
          duration: "2h",
          description: "Fios + sombreado suave. Duração até 18 meses."
        },
        {
          name: "Shadow",
          price: "R$ 450,00",
          duration: "2h",
          description: "Efeito esfumado e translúcido. Duração até 18 meses."
        },
        {
          name: "Micropigmentação de Barba",
          price: "R$ 600,00",
          duration: "2h",
          description: "Preenchimento de falhas na barba. Valor pode variar."
        },
        {
          name: "Micropigmentação de Lábios - Efeito Batom",
          price: "R$ 550,00",
          duration: "1h30min",
          description: "Redefine contorno dos lábios com cor natural. Dura até 3 anos."
        },
        {
          name: "Hydra Gloss Color",
          price: "R$ 117,00",
          duration: "30 min",
          description: "Hidratação + cor. Dura de 30 a 60 dias. (não é micropigmentação)"
        },
        {
          name: "Neutralização Labial",
          price: "R$ 400,00",
          duration: "1h30min",
          description: "Corrige manchas e tonalidades arroxeadas dos lábios."
        }
      ]
    },
    {
      id: "facial",
      name: "Estética Facial",
      icon: <Sparkles className="h-5 w-5" />,
      services: [
        {
          name: "Argiloterapia Facial",
          price: "R$ 40,00",
          duration: "30 min",
          description: "Tratamento com argila para purificação e revitalização da pele."
        },
        {
          name: "Dermaplaning",
          price: "R$ 89,00",
          duration: "40 min",
          description: "Esfoliação profunda para remoção de células mortas e pelos faciais."
        },
        {
          name: "Hidratação Express Facial",
          price: "R$ 30,00",
          duration: "30 min",
          description: "Hidratação rápida e eficaz para todos os tipos de pele."
        },
        {
          name: "Limpeza de Pele + Dermaplaning",
          price: "R$ 179,99",
          duration: "1h20min",
          description: "Combinação de limpeza profunda com esfoliação avançada.",
          highlight: true
        },
        {
          name: "Limpeza de Pele + Hydra Gloss",
          price: "R$ 165,00",
          duration: "1h",
          description: "Limpeza completa com hidratação intensiva."
        },
        {
          name: "Limpeza Premium",
          price: "R$ 130,00",
          duration: "1h",
          description: "Limpeza de pele completa com produtos premium."
        },
        {
          name: "Limpeza Ultrassônica",
          price: "R$ 150,00",
          duration: "1h",
          description: "Limpeza profunda com tecnologia ultrassônica."
        },
        {
          name: "Limpeza com Peeling de Diamante",
          price: "R$ 160,00",
          duration: "1h",
          description: "Limpeza com microdermoabrasão para renovação celular."
        },
        {
          name: "Peeling Enzimático",
          price: "R$ 60,00",
          duration: "30 min",
          description: "Renovação celular suave com enzimas naturais."
        },
        {
          name: "Revitalização Facial",
          price: "R$ 65,00",
          duration: "30 min",
          description: "Tratamento revitalizante para peles cansadas."
        },
        {
          name: "Remoção de Cravos (indolor)",
          price: "R$ 25,00",
          duration: "15 min",
          description: "Remoção cuidadosa e indolor de cravos."
        },
        {
          name: "Remoção de Sinais",
          price: "R$ 70,00",
          duration: "30 min",
          description: "Remoção segura de sinais (valor por sinal)."
        },
        {
          name: "Spa Facial",
          price: "R$ 35,00",
          duration: "25 min",
          description: "Relaxamento e cuidados especiais para o rosto."
        }
      ]
    },
    {
      id: "depilacao",
      name: "Depilação",
      icon: <Zap className="h-5 w-5" />,
      services: [
        {
          name: "Axilas",
          price: "R$ 25,00",
          duration: "20 min",
          description: "Depilação completa das axilas com cera de qualidade."
        },
        {
          name: "Inguinal Completa",
          price: "R$ 60,00",
          duration: "30 min",
          description: "Depilação completa da região inguinal."
        },
        {
          name: "Meia Perna",
          price: "R$ 30,00",
          duration: "30 min",
          description: "Depilação da canela até o joelho."
        },
        {
          name: "Perna Completa",
          price: "R$ 60,00",
          duration: "30 min",
          description: "Depilação completa das pernas."
        },
        {
          name: "Nariz",
          price: "R$ 15,00",
          duration: "5 min",
          description: "Remoção cuidadosa dos pelos do nariz."
        },
        {
          name: "Buço",
          price: "R$ 15,00",
          duration: "5 min",
          description: "Depilação delicada da região do buço."
        },
        {
          name: "Virilha",
          price: "R$ 30,00",
          duration: "30 min",
          description: "Depilação da região da virilha."
        },
        {
          name: "Rosto Total",
          price: "R$ 50,00",
          duration: "30 min",
          description: "Depilação completa de todo o rosto."
        },
        {
          name: "Queixo",
          price: "R$ 15,00",
          duration: "10 min",
          description: "Remoção dos pelos do queixo."
        }
      ]
    },
    {
      id: "combos",
      name: "Combos",
      icon: <Package className="h-5 w-5" />,
      services: [
        {
          name: "Design com Buço",
          price: "R$ 50,00",
          duration: "30 min",
          description: "Design de sobrancelhas + depilação do buço.",
          highlight: true
        },
        {
          name: "Design com Henna + Buço",
          price: "R$ 65,00",
          duration: "30 min",
          description: "Design com henna + depilação do buço.",
          highlight: true
        },
        {
          name: "Design com Tintura + Buço",
          price: "R$ 65,00",
          duration: "30 min",
          description: "Design com tintura + depilação do buço.",
          highlight: true
        }
      ]
    },
    {
      id: "cilios",
      name: "Cílios",
      icon: <Eye className="h-5 w-5" />,
      services: [
        {
          name: "Cílios Look Francês",
          price: "R$ 40,00",
          duration: "30 min",
          description: "Efeito tela, duração de 10 a 20 dias, aplicação express."
        }
      ]
    }
  ];

  const ServiceCard = ({ service }: { service: Service }) => (
    <Card className={`h-full transition-all duration-300 hover:shadow-elegant border-border/50 ${
      service.highlight ? 'border-gold/50 bg-gradient-to-br from-background to-gold/5' : ''
    }`}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-lg leading-tight text-primary">
            {service.name}
          </CardTitle>
          {service.highlight && (
            <Badge variant="secondary" className="bg-gradient-gold text-white text-xs">
              Popular
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-medium">
          <div className="flex items-center gap-1">
            <DollarSign className="h-4 w-4" />
            <span className="font-semibold text-gold">{service.price}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{service.duration}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-gray-medium mb-4 leading-relaxed">
          {service.description}
        </p>
        {service.packageInfo && (
          <div className="mb-4 p-3 bg-gold/10 rounded-lg border border-gold/20">
            <p className="text-sm text-gold font-medium">{service.packageInfo}</p>
          </div>
        )}
        <Button 
          onClick={() => handleBooking(service.name)}
          className="w-full bg-gradient-gold hover:shadow-gold transition-all duration-300"
          size="sm"
        >
          <Calendar className="mr-2 h-4 w-4" />
          Agendar
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
            Nossos <span className="bg-gradient-gold bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de serviços de beleza e estética, 
            sempre com a excelência e cuidado que você merece.
          </p>
        </div>

        {/* Services Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-12 h-auto p-1 bg-gray-light/50">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex flex-col items-center gap-2 p-4 text-xs data-[state=active]:bg-gradient-gold data-[state=active]:text-white"
              >
                {category.icon}
                <span className="leading-tight text-center">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-gray-medium mb-6">
              Entre em contato conosco para consultas personalizadas e outros serviços especiais.
            </p>
            <Button 
              onClick={() => handleBooking("Consulta Personalizada")}
              variant="outline" 
              size="lg"
              className="border-gold text-gold hover:bg-gradient-gold hover:text-white hover:border-gold"
            >
              Consulta Personalizada
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};