import { Link } from "react-router-dom";
import { Gift, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground/[0.03] border-t border-border py-12 md:py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2">
            <Gift className="text-primary" size={24} />
            <span className="font-display text-xl font-bold text-foreground">
              Gift<span className="text-primary">Craft</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Handcrafted personalized gifts for every occasion. Made with love in India.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">Shop</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Categories</h4>
          <div className="flex flex-col gap-2">
            {["Photo Frames", "Custom Mugs", "LED Lamps", "Gift Hampers"].map((c) => (
              <Link key={c} to={`/shop?category=${encodeURIComponent(c)}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{c}</Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Follow Us</h4>
          <div className="flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-6 text-center">
        <p className="text-sm text-muted-foreground">© 2026 GiftCraft. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
