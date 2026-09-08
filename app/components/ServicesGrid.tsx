import Image from "next/image";
import { memo } from "react";
import { services } from "../_data";

const ServicesGrid = memo(function ServicesGrid() {
    return (
        <section className="services" id="servicios" aria-label="Listado de servicios y precios">
            <div className="container">
                <h2>SERVICIOS Y PRECIOS</h2>
                <p className="services-subtitle">Elegí el servicio ideal para vos</p>

                <div className="services-grid">
                    {services.map((service) => (
                        <article
                            key={service.name}
                            className="service-card"
                            aria-label={`Servicio de ${service.name.toLowerCase()}`}
                        >
                            <figure className="service-img-wrapper">
                                <Image
                                    src={service.image}
                                    alt={service.alt}
                                    className="service-img"
                                    width={400}
                                    height={500}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </figure>
                            <div className="service-info" aria-label="Información y precio del servicio">
                                <h3>{service.name}</h3>
                                {service.price && <p className="price">{service.price}</p>}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default ServicesGrid;