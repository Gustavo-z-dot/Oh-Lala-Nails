"use client";

import { memo, useState, useEffect, useCallback } from "react";
import { slides } from "../_data";

const Hero = memo(function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    // Auto-advance every 5 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <section className="hero" id="inicio" aria-label="Presentación principal del negocio">
            {slides.map((slide, index) => (
                <article
                    key={index}
                    className={`slide${index === currentSlide ? " active" : ""}`}
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${slide.image}')`,
                    }}
                    aria-label={slide.ariaLabel}
                    role="group"
                    aria-roledescription="slide"
                    aria-hidden={index !== currentSlide}
                    aria-current={index === currentSlide ? "true" : undefined}
                >
                    <div className="container hero-content">
                        {index === 0 ? (
                            <h1>{slide.title}</h1>
                        ) : (
                            <h2>{slide.title}</h2>
                        )}
                        <p>{slide.subtitle}</p>
                        <a
                            href={slide.cta.href}
                            target={slide.cta.external ? "_blank" : undefined}
                            rel={slide.cta.external ? "noopener noreferrer" : undefined}
                            className="btn-hero"
                        >
                            {slide.cta.label}
                        </a>
                    </div>
                </article>
            ))}

            <button
                className="slider-arrow prev"
                id="prevSlide"
                type="button"
                aria-label="Slide anterior"
                onClick={prevSlide}
            >
                ❮
            </button>
            <button
                className="slider-arrow next"
                id="nextSlide"
                type="button"
                aria-label="Siguiente slide"
                onClick={nextSlide}
            >
                ❯
            </button>
        </section>
    );
});

export default Hero;