import { Link } from "react-router-dom";
import { getWhatsAppGeneralUrl } from "@/lib/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

const CTABanner = () => (
  <section className="py-20 md:py-28 gradient-primary relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white/20 blur-3xl" />
    </div>
    <div className="container mx-auto px-4 relative z-10 text-center space-y-6">
      <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground">
        Create Your Own Gift Today! 🎨
      </h2>
      <p className="text-primary-foreground/80 font-body text-lg max-w-xl mx-auto">
        Have a unique idea? We'll bring it to life with our custom gift design service.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
        <Link
          to="/shop"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-card text-foreground font-body font-semibold text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          Browse Collection
        </Link>
        <a
          href={getWhatsAppGeneralUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp justify-center px-8 py-3.5"
        >
          <WhatsAppIcon size={18} />
          Chat with Us
        </a>
      </div>
    </div>
  </section>
);

export default CTABanner;
