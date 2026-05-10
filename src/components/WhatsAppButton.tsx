import { whatsappUrl } from "@/data/siteContent";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href={whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform"
    aria-label="Chat WhatsApp"
  >
    <MessageCircle size={28} className="text-foreground" />
  </a>
);

export default WhatsAppButton;
