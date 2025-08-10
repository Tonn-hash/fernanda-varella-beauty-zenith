import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Calendar, Clock, MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const BookingSection = () => {
  const { toast } = useToast();
  
  // Listen for service pre-selection from Services component
  useEffect(() => {
    const handlePreSelectService = (event: CustomEvent) => {
      setFormData(prev => ({ ...prev, service: event.detail }));
    };
    
    window.addEventListener('preSelectService', handlePreSelectService as EventListener);
    return () => window.removeEventListener('preSelectService', handlePreSelectService as EventListener);
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });

  const services = [
    // Design de Sobrancelhas
    "Design de Sobrancelhas",
    "Design com Henna",
    "Design com Tintura", 
    "Design Reconstrutivo",
    "Glow Brows",
    "Glow Up",
    // Micropigmentação
    "Avaliação de Micropigmentação",
    "Correção de Simetria ou Camuflagem",
    "Flor Brows Nano Fios",
    "Fio a Fio",
    "Shadingline",
    "Shadow",
    "Micropigmentação de Barba",
    "Micropigmentação de Lábios - Efeito Batom",
    "Hydra Gloss Color",
    "Neutralização Labial",
    // Estética Facial
    "Argiloterapia Facial",
    "Dermaplaning",
    "Hidratação Express Facial",
    "Limpeza de Pele + Dermaplaning",
    "Limpeza de Pele + Hydra Gloss",
    "Limpeza Premium",
    "Limpeza Ultrassônica",
    "Limpeza com Peeling de Diamante",
    "Peeling Enzimático",
    "Revitalização Facial",
    "Remoção de Cravos (indolor)",
    "Remoção de Sinais",
    "Spa Facial",
    // Depilação
    "Axilas",
    "Inguinal Completa",
    "Meia Perna",
    "Perna Completa",
    "Nariz",
    "Buço",
    "Virilha",
    "Rosto Total",
    "Queixo",
    // Combos
    "Design com Buço",
    "Design com Henna + Buço",
    "Design com Tintura + Buço",
    // Cílios
    "Cílios Look Francês",
    // Outros
    "Consulta Personalizada"
  ];

  const timeSlots = [
    "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Simular envio
    toast({
      title: "Agendamento solicitado!",
      description: "Entraremos em contato em breve para confirmar seu horário.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: ""
    });
  };

  return (
    <section className="py-20 bg-gradient-gray">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
                Agende Sua <span className="bg-gradient-gold bg-clip-text text-transparent">Consulta</span>
              </h2>
              <p className="text-lg text-gray-medium">
                Preencha o formulário abaixo e entraremos em contato para confirmar 
                seu agendamento. Primeira consulta é sempre gratuita!
              </p>
            </div>

            <Card className="p-8 shadow-elegant border-border/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-primary font-medium">
                    Nome Completo *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Seu nome completo"
                    className="border-border/50 focus:border-gold"
                  />
                </div>

                {/* Email e Telefone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-primary font-medium">
                      E-mail *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="seu@email.com"
                      className="border-border/50 focus:border-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-primary font-medium">
                      Telefone *
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="(11) 99999-9999"
                      className="border-border/50 focus:border-gold"
                    />
                  </div>
                </div>

                {/* Serviço */}
                <div className="space-y-2">
                  <Label className="text-primary font-medium">
                    Serviço Desejado *
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
                  >
                    <SelectTrigger className="border-border/50 focus:border-gold">
                      <SelectValue placeholder="Escolha o serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Data e Horário */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-primary font-medium">
                      Data Preferida
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                      className="border-border/50 focus:border-gold"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-primary font-medium">
                      Horário Preferido
                    </Label>
                    <Select
                      value={formData.time}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, time: value }))}
                    >
                      <SelectTrigger className="border-border/50 focus:border-gold">
                        <SelectValue placeholder="Escolha o horário" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Mensagem */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-primary font-medium">
                    Observações
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Alguma observação ou dúvida especial?"
                    className="border-border/50 focus:border-gold min-h-[100px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-gold hover:shadow-gold transition-all duration-300"
                  size="lg"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Solicitar Agendamento
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Information */}
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
            </Card>

            {/* Google Maps */}
            <Card className="p-0 overflow-hidden shadow-elegant border-border/50">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.6810455575883!2d-35.248505!3d-5.758962499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b3ab22621d9a0b%3A0xb238dd00a16b5f00!2sFernanda%20Varella%20Micropigmenta%C3%A7%C3%A3o%20Avan%C3%A7ada!5e0!3m2!1spt-BR!2sbr!4v1754615469793!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="300" 
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