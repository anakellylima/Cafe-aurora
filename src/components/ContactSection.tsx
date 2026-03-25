import { useState } from "react";
import { MessageCircle, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Preencha todos os campos", variant: "destructive" });
      return;
    }
    toast({ title: "Mensagem enviada!", description: "Entraremos em contato em breve." });
    setForm({ name: "", email: "", message: "" });
  };

  const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre o Café Aurora.")}`;

  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent uppercase tracking-[0.2em] text-sm mb-2">Fale</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Conosco</h2>
          <div className="gold-divider mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Nome</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors text-foreground"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">E-mail</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors text-foreground"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Mensagem</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors text-foreground resize-none"
                placeholder="Sua mensagem..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg uppercase tracking-wider text-sm"
            >
              Enviar Mensagem
            </button>
          </form>

          {/* Info + WhatsApp */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 border border-border/50 space-y-5">
              {[
                { icon: MapPin, label: "Endereço", value: "Rua das Flores, 123 - Centro" },
                { icon: Phone, label: "Telefone", value: "(11) 99999-9999" },
                { icon: Mail, label: "E-mail", value: "contato@cafeaurora.com.br" },
                { icon: Clock, label: "Horário", value: "Seg-Sex: 7h-20h | Sáb-Dom: 8h-18h" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    <p className="text-muted-foreground text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-[hsl(0,0%,100%)] font-semibold py-3.5 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              Fale pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
