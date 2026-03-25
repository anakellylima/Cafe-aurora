import heroBg from "@/assets/hero-coffee.jpg";

const HeroSection = () => {
  const scrollToMenu = () => {
    document.querySelector("#cardapio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Café Aurora - Interior aconchegante"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/50 to-espresso/80" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p
          className="text-accent font-body text-sm md:text-base uppercase tracking-[0.3em] mb-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Bem-vindo ao
        </p>
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl text-cream font-bold mb-6 opacity-0 animate-fade-up text-shadow-hero"
          style={{ animationDelay: "0.4s" }}
        >
          Café Aurora
        </h1>
        <p
          className="text-cream/80 text-lg md:text-xl font-light max-w-xl mx-auto mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          Uma experiência única de sabores artesanais, preparados com paixão em cada xícara.
        </p>
        <button
          onClick={scrollToMenu}
          className="opacity-0 animate-fade-up inline-block bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25 uppercase tracking-wider text-sm"
          style={{ animationDelay: "0.8s" }}
        >
          Ver Cardápio
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2.5 bg-cream/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
