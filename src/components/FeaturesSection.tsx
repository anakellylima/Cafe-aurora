import { Leaf, Award, Clock, Users, Wifi, MapPin } from "lucide-react";

const features = [
  { icon: Award, title: "Grãos Premium", desc: "Selecionados das melhores fazendas do Brasil" },
  { icon: Leaf, title: "Sustentável", desc: "Embalagens eco-friendly e compostagem" },
  { icon: Clock, title: "Aberto Cedo", desc: "Funcionamos a partir das 7h da manhã" },
  { icon: Users, title: "Ambiente Acolhedor", desc: "Espaço pensado para seu conforto" },
  { icon: Wifi, title: "Wi-Fi Gratuito", desc: "Internet de alta velocidade para você" },
  { icon: MapPin, title: "Localização Central", desc: "Fácil acesso no coração da cidade" },
];

const FeaturesSection = () => (
  <section id="diferenciais" className="section-padding bg-espresso text-cream">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="text-accent uppercase tracking-[0.2em] text-sm mb-2">Por que</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold">Nos Escolher</h2>
        <div className="gold-divider mt-4" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="text-center group"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/15 flex items-center justify-center group-hover:bg-accent/25 group-hover:scale-110 transition-all duration-300">
              <f.icon className="h-7 w-7 text-accent" />
            </div>
            <h4 className="font-display font-semibold text-lg mb-2">{f.title}</h4>
            <p className="text-cream/70 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
