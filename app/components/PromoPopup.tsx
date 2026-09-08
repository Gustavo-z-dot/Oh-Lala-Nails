"use client";

import { memo, useState, useEffect } from "react";
import Image from "next/image";
import { promoPopup } from "../_data";

const PromoPopup = memo(function PromoPopup() {
    const [isOpen, setIsOpen] = useState(false);

    // Open popup after mount (avoids hydration mismatch)
    useEffect(() => {
        const timer = setTimeout(() => setIsOpen(true), 600);
        return () => clearTimeout(timer);
    }, []);

    // Block body scroll while open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = "";
            };
        }
    }, [isOpen]);

    // Close on Escape
    useEffect(() => {
        if (!isOpen) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [isOpen]);

    const closePopup = () => setIsOpen(false);

    // Generate sparkles after mount
    const [sparkles, setSparkles] = useState<React.ReactNode[]>([]);
    useEffect(() => {
        const items: React.ReactNode[] = [];
        for (let i = 0; i < 20; i++) {
            items.push(
                <span
                    key={i}
                    className="promo-sparkle"
                    style={{
                        "--sparkle-left": `${Math.random() * 98}%`,
                        "--sparkle-top": `${Math.random() * 98}%`,
                        "--sparkle-size": `${Math.random() * 6 + 3}px`,
                        "--sparkle-delay": `${Math.random() * 4}s`,
                        "--sparkle-duration": `${Math.random() * 2 + 3}s`,
                    } as React.CSSProperties}
                />
            );
        }
        setSparkles(items);
    }, []);

    return (
        <div
            className={`promo-popup${isOpen ? " active" : ""}`}
            id="promoPopup"
            role="dialog"
            aria-modal="true"
            aria-label="Promoción SemiPermanente"
            aria-hidden={!isOpen}
            onClick={(e) => {
                if (e.target === e.currentTarget) closePopup();
            }}
        >
            <div className="promo-sparkles" aria-hidden="true">
                {sparkles}
            </div>
            <div className="promo-popup-wrapper">
                <button
                    className="promo-popup-close"
                    id="closePromoPopup"
                    type="button"
                    aria-label="Cerrar promoción"
                    onClick={closePopup}
                >
                    &times;
                </button>
                <Image
                    src={promoPopup.image}
                    alt={promoPopup.alt}
                    className="promo-popup-img"
                    width={680}
                    height={800}
                    priority
                />
            </div>
        </div>
    );
});

export default PromoPopup;