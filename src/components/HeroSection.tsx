import { Link } from "react-router-dom";
import { getWhatsAppGeneralUrl } from "@/lib/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";
import heroImg from "@/assets/hero-gifts.jpg";

const HeroSection = () => (
  <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Personalized gifts collection" className="w-full h-full object-cover" width={1920} height={1080} />
    </div>
    
    {/* Dark overlay for contrast */}
    <div className="absolute inset-0 bg-black/60" />
    
    {/* Vibrant gradient overlay matching the red/yellow theme */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-accent/30 mix-blend-overlay" />
    
    {/* Darker top gradient to ensure Navbar visibility when transparent */}
    <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />

    <div className="container mx-auto px-4 relative z-10 text-center py-32 space-y-8">
      <span className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-md text-white font-body text-sm font-semibold border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:bg-white/20 transition-colors">
        ✨ Handcrafted with Love
      </span>
      
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-tight text-white drop-shadow-xl max-w-5xl mx-auto">
        Make Every Gift <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent filter drop-shadow-lg gold-shimmer block mt-2">
          Truly Special 💝
        </span>
      </h1>
      
      <p className="text-lg md:text-xl md:text-2xl text-white/95 max-w-3xl mx-auto font-body font-medium drop-shadow-md leading-relaxed">
        Personalized gifts crafted with love — from custom photo frames to printed t-shirts, mugs, cushions & more.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
        <Link
          to="/shop"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-body font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)]"
        >
          Shop Collection
        </Link>
        <a
          href={getWhatsAppGeneralUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-foreground font-body font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] border border-transparent"
        >
          <WhatsAppIcon size={20} />
          Order on WhatsApp
        </a>
      </div>
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
