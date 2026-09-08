import { memo } from "react";
import { contact } from "../_data";

const Location = memo(function Location() {
    return (
        <section className="location" id="location" aria-label="Ubicación del negocio en La Paz">
            <div className="container location-content">
                <h2>UBICACIÓN</h2>
                <p>Nos encontramos en {contact.address}.</p>

                <div className="map-container">
                    <iframe
                        src={contact.mapsEmbed}
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                <a
                    href={contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-location"
                >
                    VER EN GOOGLE MAPS
                </a>
            </div>
        </section>
    );
});

export default Location;