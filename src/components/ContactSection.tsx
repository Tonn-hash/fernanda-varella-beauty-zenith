import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/message/DLP37RY6F3Y7E1', '_blank');
  };

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-medium max-w-3xl mx-auto">
            Agende seu horário pelo WhatsApp e transforme sua beleza com a expertise da Fernanda Varella
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 shadow-elegant border-border/50">
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Endereço</div>
                    <div className="text-gray-medium">
                      Avenida Senhor Do Bonfim 170<br />
                      Natal - RN
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Telefone</div>
                    <div className="text-gray-medium">
                      +55 84 99821-5389<br />
                      WhatsApp disponível
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">E-mail</div>
                    <div className="text-gray-medium">
                      contato@fernandavarella.com.br
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Horário de Funcionamento</div>
                    <div className="text-gray-medium">
                      Segunda a Sexta: 09:30 - 19:00<br />
                      Sábado: 09:30 - 19:30<br />
                      Domingo: Fechado
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-green-800 dark:text-green-200">
                      Agendamento via WhatsApp
                    </div>
                    <div className="text-green-600 dark:text-green-300 text-sm">
                      Resposta rápida e atendimento personalizado
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 hover:bg-green-600 text-white border-none"
                  size="lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar pelo WhatsApp
                </Button>
              </div>
            </Card>
          </div>

          {/* Google Maps */}
          <div className="space-y-8">
            <Card className="p-0 overflow-hidden shadow-elegant border-border/50 h-fit">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.6810455575883!2d-35.248505!3d-5.758962499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b3ab22621d9a0b%3A0xb238dd00a16b5f00!2sFernanda%20Varella%20Micropigmenta%C3%A7%C3%A3o%20Avan%C3%A7ada!5e0!3m2!1spt-BR!2sbr!4v1754615469793!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Fernanda Varella"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};