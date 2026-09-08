import Image from "next/image";
import { memo } from "react";
import { contact } from "../_data";

const ContactSection = memo(function ContactSection() {
    return (
        <section className="contact-section" id="contacto" aria-label="Sección de contacto y reservas">
            <div className="container contact-content">
                <h2>AGENDA TU CITA</h2>
                <p>Contactanos directamente por:</p>

                <div className="contact-buttons">
                    <a
                        href={contact.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-contact whatsapp"
                    >
                        WhatsApp
                    </a>
                    <a
                        href={contact.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-contact instagram"
                    >
                        Instagram
                    </a>
                </div>

                <div className="footer-content">
                    <section className="footer-brand" aria-label="Marca del negocio">
                        <h3>OH LALÁ! NAILS</h3>
                        <p>Elegancia y cuidado profesional para tus uñas.</p>
                    </section>

                    <address className="footer-info" aria-label="Datos de contacto">
                        <h4>Contacto</h4>
                        <p>📍 {contact.address}</p>
                        <p>
                            📞{" "}
                            <a href={`tel:${contact.phoneRaw}`} aria-label={`Llamar al ${contact.phone}`}>
                                {contact.phone}
                            </a>
                        </p>
                    </address>

                    <section className="footer-social" aria-label="Redes sociales">
                        <h4>Seguinos</h4>
                        <div className="social-icons">
                            <a
                                href={contact.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visitar perfil de Instagram de Oh Lalá! Nails"
                            >
                                <Image src={contact.instagramIcon} alt="Instagram" width={32} height={32} />
                            </a>
                            <a
                                href={contact.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Iniciar chat de WhatsApp con Oh Lalá! Nails"
                            >
                                <Image src={contact.whatsappIcon} alt="WhatsApp" width={32} height={32} />
                            </a>
                        </div>
                    </section>
                </div>

                <div className="footer-bottom">
                    &copy; {new Date().getFullYear()} Oh Lalá! Nails - Todos los derechos reservados.
                </div>
            </div>
        </section>
    );
});

export default ContactSection;