import Image from "next/image";
import { memo } from "react";
import { galleryImages } from "../_data";

const Gallery = memo(function Gallery() {
    return (
        <section className="gallery-section" id="galeria" aria-label="Galería de trabajos realizados">
            <div className="gallery-header">
                <h2>GALERÍA</h2>
                <span className="gallery-vertical">GALERÍA</span>
            </div>

            <div className="gallery-grid">
                {galleryImages.map((img, i) => (
                    <Image
                        key={i}
                        src={img.src}
                        alt={img.alt}
                        width={400}
                        height={500}
                        sizes="(max-width: 600px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                ))}
            </div>

            <div className="button" style={{ textAlign: "center", marginTop: "20px" }}>
                <a
                    href="https://www.instagram.com/ohlala_nails0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gallery"
                >
                    VER MÁS
                </a>
            </div>
        </section>
    );
});

export default Gallery;