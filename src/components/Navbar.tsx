import { useState } from "react";
import { Menu, X } from "lucide-react";

const menuItems = [
  { name: "Agendar llamada", href: "/agendar" },
  { name: "MasterClass", href: "/masterclass" },
  { name: "Servicios", href: "/#servicios" },
  { name: "Resultados de Clientes", href: "/#resultados" },
  { name: "Blog", href: "/blog" },
  { name: "Aprende", href: "/#aprende" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="/" 
            className="text-2xl md:text-3xl font-bold tracking-[0.3em] text-foreground hover:text-primary transition-colors"
            style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
          >
            SCALING
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium tracking-wider uppercase text-white hover:text-primary transition-all duration-300 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(0,191,255,0.8)]" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 animate-fade-in border-t border-primary/10">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium tracking-wider uppercase text-white hover:text-primary transition-all duration-300 px-4 py-2 hover:bg-primary/5 rounded-lg"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
