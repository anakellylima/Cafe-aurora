import { useState } from "react";
import { Coffee, CakeSlice, IceCream, Sandwich } from "lucide-react";

type Category = "cafes" | "doces" | "gelados" | "salgados";

const categories: { key: Category; label: string; icon: React.ElementType }[] = [
  { key: "cafes", label: "Cafés", icon: Coffee },
  { key: "doces", label: "Doces", icon: CakeSlice },
  { key: "gelados", label: "Gelados", icon: IceCream },
  { key: "salgados", label: "Salgados", icon: Sandwich },
];

const menuItems: Record<Category, { name: string; desc: string; price: string }[]> = {
  cafes: [
    { name: "Espresso Clássico", desc: "Shot duplo de café arábica premium", price: "R$ 8,90" },
    { name: "Cappuccino Aurora", desc: "Espresso, leite vaporizado e canela", price: "R$ 14,90" },
    { name: "Latte Caramelo", desc: "Café com leite e calda de caramelo artesanal", price: "R$ 16,90" },
    { name: "Mocha Especial", desc: "Espresso, chocolate belga e chantilly", price: "R$ 18,90" },
    { name: "Cold Brew", desc: "Café extraído a frio por 12 horas", price: "R$ 15,90" },
    { name: "Café Coado Especial", desc: "Grãos single origin, coado na hora", price: "R$ 12,90" },
  ],
  doces: [
    { name: "Bolo de Cenoura", desc: "Com cobertura de chocolate meio amargo", price: "R$ 12,90" },
    { name: "Cheesecake de Frutas", desc: "Base crocante com frutas vermelhas frescas", price: "R$ 16,90" },
    { name: "Brownie Duplo Chocolate", desc: "Servido morno com sorvete de baunilha", price: "R$ 14,90" },
    { name: "Croissant de Amêndoas", desc: "Folhado artesanal com creme de amêndoas", price: "R$ 13,90" },
  ],
  gelados: [
    { name: "Frappuccino Clássico", desc: "Café gelado cremoso com chantilly", price: "R$ 19,90" },
    { name: "Smoothie Tropical", desc: "Manga, maracujá e iogurte natural", price: "R$ 17,90" },
    { name: "Iced Matcha Latte", desc: "Matcha premium com leite gelado", price: "R$ 18,90" },
    { name: "Limonada Especial", desc: "Limão siciliano com hortelã e gengibre", price: "R$ 13,90" },
  ],
  salgados: [
    { name: "Pão na Chapa Especial", desc: "Pão artesanal com manteiga e queijo", price: "R$ 9,90" },
    { name: "Croissant Presunto e Queijo", desc: "Folhado com recheio generoso", price: "R$ 15,90" },
    { name: "Wrap Frango Grelhado", desc: "Com molho pesto e rúcula fresca", price: "R$ 22,90" },
    { name: "Quiche Lorraine", desc: "Massa crocante, bacon e queijo gruyère", price: "R$ 18,90" },
  ],
};

const MenuSection = () => {
  const [active, setActive] = useState<Category>("cafes");

  return (
    <section id="cardapio" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent uppercase tracking-[0.2em] text-sm mb-2">Nosso</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Cardápio</h2>
          <div className="gold-divider mt-4" />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                active === cat.key
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              <cat.icon className="h-4 w-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {menuItems[active].map((item, i) => (
            <div
              key={item.name}
              className="bg-background rounded-xl p-5 border border-border/50 hover:border-accent/30 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 opacity-0 animate-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-display font-semibold text-foreground">{item.name}</h4>
                <span className="text-accent font-bold text-sm whitespace-nowrap ml-3">{item.price}</span>
              </div>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
