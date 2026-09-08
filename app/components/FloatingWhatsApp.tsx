import Image from "next/image";
import { memo } from "react";
import { contact } from "../_data";

const FloatingWhatsApp = memo(function FloatingWhatsApp() {
    return (
        <a
            href={contact.whatsapp}
            className="floating-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
        >
            <Image src={contact.whatsappIcon} alt="WhatsApp" width={32} height={32} />
        </a>
    );
});

export default FloatingWhatsApp;