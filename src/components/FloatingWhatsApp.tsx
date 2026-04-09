import WhatsAppIcon from "./WhatsAppIcon";
import { getWhatsAppGeneralUrl } from "@/lib/whatsapp";

const FloatingWhatsApp = () => (
  <a
    href={getWhatsAppGeneralUrl()}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 btn-whatsapp rounded-full p-4 shadow-2xl animate-pulse-glow"
    aria-label="Chat on WhatsApp"
  >
    <WhatsAppIcon size={28} />
  </a>
);

export default FloatingWhatsApp;
