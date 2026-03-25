import { Coffee } from "lucide-react";

const Footer = () => (
  <footer className="bg-espresso text-cream/60 py-10">
    <div className="container mx-auto text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Coffee className="h-5 w-5 text-accent" />
        <span className="font-display text-lg text-cream font-semibold">Café Aurora</span>
      </div>
      <p className="text-sm">© {new Date().getFullYear()} Café Aurora. Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default Footer;
