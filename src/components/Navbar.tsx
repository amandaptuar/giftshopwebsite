import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Heart, Menu, X, Gift } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/shop?category=Couple+Gifts", label: "Couple Gifts" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-xl shadow-lg border-b border-border py-0"
          : "bg-transparent pt-4"
      }`}
    >
      <div className={`container mx-auto px-4 flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16' : 'h-20'}`}>
        <Link to="/" className="flex items-center gap-2 group">
          <Gift className="text-primary" size={scrolled ? 24 : 28} />
          <span className={`font-display font-bold transition-colors ${scrolled ? 'text-xl md:text-2xl text-foreground' : 'text-2xl md:text-3xl text-white drop-shadow-md'}`}>
            Gift<span className="text-primary">Craft</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 bg-background/0 rounded-full px-6 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className={`p-2 rounded-full transition-colors ${scrolled ? 'hover:bg-secondary' : 'hover:bg-white/20'}`} aria-label="Search">
            <Search size={20} className={scrolled ? "text-muted-foreground" : "text-white"} />
          </button>
          <button className={`p-2 rounded-full transition-colors ${scrolled ? 'hover:bg-secondary' : 'hover:bg-white/20'}`} aria-label="Wishlist">
            <Heart size={20} className={scrolled ? "text-muted-foreground" : "text-white"} />
          </button>
          <button
            className={`md:hidden p-2 rounded-full transition-colors ${scrolled ? 'hover:bg-secondary' : 'hover:bg-white/20'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} className={scrolled ? "text-foreground" : "text-white"} /> : <Menu size={22} className={scrolled ? "text-foreground" : "text-white"} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-t border-border animate-fade-in-up">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="py-2 px-3 rounded-lg font-body text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
