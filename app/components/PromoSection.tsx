"use client";

import { memo, useState, useEffect, useRef } from "react";
import { promo } from "../_data";

const PromoSection = memo(function PromoSection() {
    const cardRef = useRef<HTMLElement>(null);
    const [pricePop, setPricePop] = useState(false);

    // Sparkles after mount (avoids hydration mismatch)
    const [sparkles, setSparkles] = useState<React.ReactNode[]>([]);
    useEffect(() => {
        const items: React.ReactNode[] = [];
        for (let i = 0; i < 12; i++) {
            items.push(
                <span
                    key={i}
                    className="promo-sparkle"
                    style={{
                        "--sparkle-left": `${Math.random() * 95}%`,
                        "--sparkle-top": `${Math.random() * 90}%`,
                        "--sparkle-size": `${Math.random() * 5 + 3}px`,
                        "--sparkle-delay": `${Math.random() * 3.8}s`,
                        "--sparkle-duration": `${Math.random() * 2 + 3.6}s`,
                    } as React.CSSProperties}
                />
            );
        }
        setSparkles(items);
    }, []);

    // Price pop animation
    useEffect(() => {
        const popPrice = () => {
            setPricePop(true);
            // Force re-trigger animation by removing and re-adding class
            setTimeout(() => {
                setPricePop(false);
                requestAnimationFrame(() => setPricePop(true));
            }, 100);
        };
        popPrice();
        const interval = setInterval(popPrice, 3600);
        return () => clearInterval(interval);
    }, []);

    // 3D tilt on mouse move
    const handleMouseMove = (e: React.MouseEvent) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rotateY = (x - 0.5) * 6;
        const rotateX = (0.5 - y) * 6;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        if (cardRef.current) {
            cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
        }
    };

    return (
        <section
            className="promo-section reveal"
            id="benefits"
            aria-label="Promoción destacada de Soft Gel"
        >
            <div className="container promo-wrap">
                <article
                    ref={cardRef}
                    className="promo-card"
                    aria-label="Promo Soft Gel 2 por 1000 pesos"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={() => {
                        setPricePop(false);
                        requestAnimationFrame(() => setPricePop(true));
                    }}
                >
                    <p className="promo-kicker">{promo.kicker}</p>
                    <h2>{promo.title}</h2>
                    <p
                        className={`promo-price${pricePop ? " promo-pop" : ""}`}
                        aria-live="polite"
                    >
                        {promo.price}
                    </p>
                    <p className="promo-description">{promo.description}</p>
                    <div className="promo-actions">
                        <a
                            href={promo.ctaPrimary.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-promo btn-promo-primary"
                        >
                            {promo.ctaPrimary.label}
                        </a>
                        <a
                            href={promo.ctaSecondary.href}
                            className="btn-promo btn-promo-secondary"
                        >
                            {promo.ctaSecondary.label}
                        </a>
                    </div>
                    <div className="promo-sparkles" aria-hidden="true">
                        {sparkles}
                    </div>
                </article>
            </div>
        </section>
    );
});

export default PromoSection;