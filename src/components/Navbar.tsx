import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const menuItems = [
  { name: "Agendar llamada", href: "/agendar" },
  { name: "Servicios", href: "/#servicios" },
  { name: "Resultados de Clientes", href: "/#resultados" },
  { name: "Blog", href: "/blog" },
  {
    name: "Aprende",
    href: "/#aprende",
    submenu: [
      { name: "MasterClass", href: "/masterclass" },
    ],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const submenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (submenuRef.current && !submenuRef.current.contains(e.target as Node)) {
        setOpenSubmenu(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

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
            {menuItems.map((item) =>
              item.submenu ? (
                <div key={item.name} className="relative" ref={submenuRef}>
                  <button
                    onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                    className="relative flex items-center gap-1 text-sm font-medium tracking-wider uppercase text-white hover:text-primary transition-all duration-300 group"
                  >
                    {item.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openSubmenu === item.name ? "rotate-180" : ""}`} />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(0,122,191,0.8)]" />
                  </button>
                  {openSubmenu === item.name && (
                    <div className="absolute top-full right-0 mt-2 min-w-[180px] bg-card/95 backdrop-blur-xl border border-border rounded-xl shadow-lg overflow-hidden animate-fade-in">
                      <a
                        href={item.href}
                        className="block px-4 py-3 text-sm font-medium tracking-wider uppercase text-white hover:text-primary hover:bg-primary/5 transition-all"
                        onClick={() => setOpenSubmenu(null)}
                      >
                        {item.name}
                      </a>
                      <div className="h-px bg-border" />
                      {item.submenu.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-3 text-sm font-medium tracking-wider uppercase text-white hover:text-primary hover:bg-primary/5 transition-all"
                          onClick={() => setOpenSubmenu(null)}
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-sm font-medium tracking-wider uppercase text-white hover:text-primary transition-all duration-300 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(0,122,191,0.8)]" />
                </a>
              )
            )}
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
            <div className="flex flex-col space-y-1">
              {menuItems.map((item) =>
                item.submenu ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                      className="w-full flex items-center justify-between text-sm font-medium tracking-wider uppercase text-white hover:text-primary transition-all duration-300 px-4 py-2 hover:bg-primary/5 rounded-lg"
                    >
                      {item.name}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openSubmenu === item.name ? "rotate-180" : ""}`} />
                    </button>
                    {openSubmenu === item.name && (
                      <div className="pl-6 space-y-1 mt-1">
                        <a
                          href={item.href}
                          onClick={() => { setIsOpen(false); setOpenSubmenu(null); }}
                          className="block text-sm font-medium tracking-wider uppercase text-muted-foreground hover:text-primary transition-all duration-300 px-4 py-2 hover:bg-primary/5 rounded-lg"
                        >
                          {item.name}
                        </a>
                        {item.submenu.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            onClick={() => { setIsOpen(false); setOpenSubmenu(null); }}
                            className="block text-sm font-medium tracking-wider uppercase text-muted-foreground hover:text-primary transition-all duration-300 px-4 py-2 hover:bg-primary/5 rounded-lg"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium tracking-wider uppercase text-white hover:text-primary transition-all duration-300 px-4 py-2 hover:bg-primary/5 rounded-lg"
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
