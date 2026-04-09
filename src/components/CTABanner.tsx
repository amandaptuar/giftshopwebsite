import { Link } from "react-router-dom";
import { getWhatsAppGeneralUrl } from "@/lib/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";
import bgImg from "@/assets/product-gift-hamper.jpg";

const CTABanner = () => (
  <section className="py-24 md:py-32 relative overflow-hidden flex items-center justify-center min-h-[450px]">
    <div className="absolute inset-0">
      <img src={bgImg} alt="Create your customized gift" className="w-full h-full object-cover" />
    </div>

    {/* Overlays to ensure text visibility and maintain theme */}
    <div className="absolute inset-0 bg-black/50" />
    <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/40 to-accent/60 mix-blend-multiply filter contrast-125" />

    {/* Glow effects */}
    <div className="absolute inset-0 opacity-40">
      <div className="absolute top-0 right-10 w-64 h-64 rounded-full bg-accent/30 blur-[80px]" />
      <div className="absolute bottom-0 left-10 w-64 h-64 rounded-full bg-white/20 blur-[80px]" />
    </div>

    <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
      <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md text-white font-body text-sm font-semibold border border-white/20 uppercase tracking-widest shadow-[0_0_15px_rgba(255,255,255,0.1)]">
        For Special Occasions
      </span>
      
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white drop-shadow-xl max-w-4xl mx-auto leading-tight">
        Create Your Own Gift <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent filter drop-shadow-lg gold-shimmer block mt-2">
          Today! 🎨
        </span>
      </h2>
      
      <p className="text-lg md:text-xl text-white/95 font-body font-medium max-w-2xl mx-auto drop-shadow-md leading-relaxed">
        Have a unique idea? We'll bring it to life with our custom gift design service, tailored perfectly to your loved ones.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
        <Link
          to="/shop"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-primary font-body font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] border border-transparent"
        >
          Browse Collection
        </Link>
        <a
          href={getWhatsAppGeneralUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-foreground font-body font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--accent)/0.6)]"
        >
          <WhatsAppIcon size={20} />
          Chat with Us
        </a>
      </div>
    </div>
  </section>
);

export default CTABanner;
