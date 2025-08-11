import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  CheckCircle, 
  Clock, 
  Users, 
  Award, 
  BookOpen, 
  Video, 
  Download,
  Shield,
  Gift,
  ArrowRight,
  Play
} from "lucide-react";

const CourseInstructor = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img 
            src="/lovable-uploads/b76a84fe-732d-411a-bd17-4f98bfc1ca4c.png"
            alt="Fernanda Varella - Mentora"
            className="w-full h-[600px] object-cover object-top rounded-2xl shadow-elegant"
          />
          <div className="absolute -bottom-6 -right-6 bg-gradient-gold p-4 rounded-xl shadow-gold">
            <Award className="h-8 w-8 text-white" />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <Badge className="mb-4 bg-gradient-gold text-white">
              SUA MENTORA
            </Badge>
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              Fernanda Varella
            </h2>
            <p className="text-lg text-gray-medium leading-relaxed mb-6">
              Especialista com mais de 5 anos de experiência e certificações 
              internacionais. Já treinou centenas de profissionais que hoje 
              são referência no mercado da beleza.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-gradient-gray rounded-xl">
              <div className="text-2xl font-bold text-gold">200+</div>
              <div className="text-sm text-gray-medium">Alunas Formadas</div>
            </div>
            <div className="text-center p-4 bg-gradient-gray rounded-xl">
              <div className="text-2xl font-bold text-gold">5+</div>
              <div className="text-sm text-gray-medium">Certificações</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-gold" />
              <span>Certificada PhiBrows Academy</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-gold" />
              <span>Especialista em Powder Brows</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-gold" />
              <span>Master em Micropigmentação</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CourseContent = () => (
  <section className="py-20 bg-gradient-gray">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
          Conteúdo do <span className="bg-gradient-gold bg-clip-text text-transparent">Curso</span>
        </h2>
        <p className="text-lg text-gray-medium max-w-2xl mx-auto">
          Programa completo e estruturado para formar profissionais de excelência
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Módulos */}
        <div className="space-y-6">
          <h3 className="text-2xl font-serif font-bold text-primary">Módulos do Curso</h3>
          
          {[
            {
              title: "Módulo 1: Fundamentos",
              lessons: ["Anatomia da pele", "Teoria das cores", "Biossegurança", "Legislação"],
              duration: "4h"
            },
            {
              title: "Módulo 2: Técnicas Básicas",
              lessons: ["Design de sobrancelhas", "Visagismo", "Simetria facial", "Medições"],
              duration: "6h"
            },
            {
              title: "Módulo 3: Micropigmentação",
              lessons: ["Técnica fio a fio", "Powder Brows", "Ombré", "Correções"],
              duration: "8h"
            },
            {
              title: "Módulo 4: Prática Supervisionada",
              lessons: ["Atendimento real", "Correção de erros", "Dicas profissionais", "Portfólio"],
              duration: "6h"
            }
          ].map((module, index) => (
            <Card key={index} className="p-6 border-border/50">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-semibold text-primary">{module.title}</h4>
                <Badge variant="outline" className="border-gold text-gold">
                  {module.duration}
                </Badge>
              </div>
              <ul className="space-y-2">
                {module.lessons.map((lesson, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-medium">
                    <CheckCircle className="h-4 w-4 text-gold" />
                    {lesson}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Informações do Curso */}
        <div className="space-y-6">
          <h3 className="text-2xl font-serif font-bold text-primary">Detalhes do Curso</h3>
          
          <Card className="p-6 border-border/50">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-gold" />
                <div>
                  <div className="font-semibold">Carga Horária</div>
                  <div className="text-gray-medium">24 horas práticas + 12 horas teóricas</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-gold" />
                <div>
                  <div className="font-semibold">Turmas Reduzidas</div>
                  <div className="text-gray-medium">Máximo 6 alunas por turma</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-gold" />
                <div>
                  <div className="font-semibold">Certificação</div>
                  <div className="text-gray-medium">Certificado internacional reconhecido</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-gold" />
                <div>
                  <div className="font-semibold">Material Incluso</div>
                  <div className="text-gray-medium">Kit completo + apostila digital</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Video className="h-5 w-5 text-gold" />
                <div>
                  <div className="font-semibold">Acesso Online</div>
                  <div className="text-gray-medium">Plataforma com videoaulas vitalícias</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-gold" />
                <div>
                  <div className="font-semibold">Suporte</div>
                  <div className="text-gray-medium">Mentoria por 6 meses após o curso</div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-gold-subtle border-gold/20">
            <h4 className="font-serif font-bold text-lg text-primary mb-4">
              🎁 Bônus Exclusivos
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Gift className="h-4 w-4 text-gold" />
                <span>Kit profissional completo (R$ 800)</span>
              </li>
              <li className="flex items-center gap-2">
                <Gift className="h-4 w-4 text-gold" />
                <span>Curso de Marketing Digital (R$ 500)</span>
              </li>
              <li className="flex items-center gap-2">
                <Gift className="h-4 w-4 text-gold" />
                <span>Templates de contratos (R$ 200)</span>
              </li>
              <li className="flex items-center gap-2">
                <Gift className="h-4 w-4 text-gold" />
                <span>Grupo VIP no WhatsApp</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

const StudentTestimonials = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
          Depoimentos das <span className="bg-gradient-gold bg-clip-text text-transparent">Alunas</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            name: "Amanda Silva",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            text: "O curso mudou minha vida! Em 3 meses já estava faturando R$ 8.000 por mês. A Fernanda é uma professora incrível.",
            result: "R$ 8.000/mês"
          },
          {
            name: "Beatriz Costa",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            text: "Saí do curso super preparada. O método da Fernanda é único e me deu toda a confiança que eu precisava.",
            result: "Studio próprio"
          },
          {
            name: "Carolina Mendes",
            image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
            text: "Melhor investimento que já fiz! O curso é completo e o suporte pós-formação é excepcional.",
            result: "Agenda lotada"
          }
        ].map((testimonial, index) => (
          <Card key={index} className="p-6 border-border/50">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-gold fill-current" />
              ))}
            </div>
            <p className="text-gray-medium mb-4">"{testimonial.text}"</p>
            <div className="flex items-center gap-3">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-primary">{testimonial.name}</div>
                <div className="text-sm text-gold">{testimonial.result}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section className="py-20 bg-gradient-luxury text-white">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-8">
          Investimento no Seu <span className="bg-gradient-gold bg-clip-text text-transparent">Futuro</span>
        </h2>
        
        <Card className="bg-white/10 backdrop-blur-sm border-gold/20 p-8 mb-8">
          <div className="text-center mb-8">
            <div className="text-6xl font-bold text-gold mb-2">R$ 2.997</div>
            <div className="text-lg text-gray-light">ou 12x de R$ 299 sem juros</div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="text-left">
              <h4 className="font-semibold mb-4">✨ Incluso no curso:</h4>
              <ul className="space-y-2 text-sm">
                <li>• 36 horas de treinamento intensivo</li>
                <li>• Kit profissional completo (R$ 800)</li>
                <li>• Certificado internacional</li>
                <li>• Acesso vitalício à plataforma</li>
                <li>• 6 meses de mentoria</li>
              </ul>
            </div>
            <div className="text-left">
              <h4 className="font-semibold mb-4">🎁 Bônus exclusivos:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Curso de Marketing Digital (R$ 500)</li>
                <li>• Templates de contratos (R$ 200)</li>
                <li>• Grupo VIP no WhatsApp</li>
                <li>• Suporte técnico vitalício</li>
                <li>• Atualizações gratuitas</li>
              </ul>
            </div>
          </div>

          <Button size="lg" className="bg-gradient-gold hover:shadow-gold text-lg px-12 py-4 group">
            Quero Garantir Minha Vaga
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>

          <div className="mt-6 text-sm text-gray-light">
            <Shield className="h-4 w-4 inline mr-2" />
            Garantia de 7 dias ou seu dinheiro de volta
          </div>
        </Card>

        <div className="text-sm text-gray-light">
          Próxima turma: <strong className="text-gold">15 de Março de 2024</strong> | 
          Apenas <strong className="text-gold">6 vagas</strong> disponíveis
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
          Dúvidas <span className="bg-gradient-gold bg-clip-text text-transparent">Frequentes</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {[
          {
            question: "Preciso ter experiência prévia?",
            answer: "Não! O curso é desenvolvido para iniciantes. Começamos do zero e levamos você até o nível profissional."
          },
          {
            question: "O certificado é reconhecido?",
            answer: "Sim! Nosso certificado é reconhecido internacionalmente e aceito em todo território nacional."
          },
          {
            question: "Que materiais estão inclusos?",
            answer: "Kit completo com: dermógrafo, agulhas, pigmentos, anestésicos, e todos os materiais necessários para começar."
          },
          {
            question: "Como funciona o suporte pós-curso?",
            answer: "Oferecemos 6 meses de mentoria, grupo VIP no WhatsApp e acesso vitalício à plataforma online."
          },
          {
            question: "Posso parcelar o investimento?",
            answer: "Sim! Você pode parcelar em até 12x sem juros no cartão ou à vista com desconto especial."
          }
        ].map((faq, index) => (
          <Card key={index} className="p-6 border-border/50">
            <h3 className="font-semibold text-primary mb-2">{faq.question}</h3>
            <p className="text-gray-medium">{faq.answer}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const Course = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero type="course" />
      <CourseInstructor />
      <CourseContent />
      <StudentTestimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Course;