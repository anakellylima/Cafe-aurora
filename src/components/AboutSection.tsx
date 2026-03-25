import { Heart, Eye, Target, Star } from "lucide-react";
import aboutImg from "@/assets/about-coffee.jpg";

const values = [
  { icon: Heart, title: "Missão", text: "Proporcionar momentos memoráveis através de cafés excepcionais e um ambiente acolhedor." },
  { icon: Eye, title: "Visão", text: "Ser a cafeteria referência em qualidade e experiência na região." },
  { icon: Target, title: "Valores", text: "Paixão, qualidade, sustentabilidade, respeito e inovação em tudo o que fazemos." },
  { icon: Star, title: "Excelência", text: "Cada detalhe é pensado para superar expectativas e criar conexões genuínas." },
];

const AboutSection = () => (
  <section id="sobre" className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="text-accent uppercase tracking-[0.2em] text-sm mb-2">Conheça</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
          Nossa História
        </h2>
        <div className="gold-divider mt-4" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative">
          <div className="absolute -inset-4 bg-accent/10 rounded-2xl -rotate-2" />
          <img
            src={aboutImg}
            alt="Café Aurora exterior"
            className="relative rounded-xl shadow-2xl w-full object-cover aspect-[4/3]"
            loading="lazy"
            width={800}
            height={600}
          />
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            Desde 2015, uma paixão que virou tradição
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            O Café Aurora nasceu do sonho de criar um espaço onde cada xícara conta uma história. 
            Com grãos selecionados das melhores fazendas brasileiras, nossos baristas transformam 
            cada preparo em uma obra de arte.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Nosso ambiente foi pensado para ser um refúgio urbano — um lugar onde o tempo desacelera, 
            as conversas fluem e os sabores surpreendem. Aqui, café é mais do que uma bebida; é uma experiência.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((item, i) => (
          <div
            key={item.title}
            className="bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-border/50"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="w-12 h-12 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-4">
              <item.icon className="h-6 w-6 text-accent" />
            </div>
            <h4 className="font-display font-semibold text-foreground text-lg mb-2">{item.title}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
