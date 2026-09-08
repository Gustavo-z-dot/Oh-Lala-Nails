"use client";

import { memo, useState, useEffect, useCallback } from "react";
import Image from "next/image";

// Extract the original image path from a (possibly Next.js-optimized) image src.
// In dev/prod, next/image wraps srcs as /_next/image?url=... — the modal must
// re-optimize the ORIGINAL path, not the already-optimized full URL.
const getOriginalSrc = (el: HTMLImageElement): string => {
    const resolved = el.currentSrc || el.src;
    try {
        const url = new URL(resolved, window.location.origin);
        const original = url.searchParams.get("url");
        if (original) return original;
    } catch {
        /* ignore */
    }
    return el.getAttribute("src") || resolved;
};

const ImageModal = memo(function ImageModal() {
    const [modalSrc, setModalSrc] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const openModal = useCallback((src: string) => {
        setModalSrc(src);
        setIsOpen(true);
        document.body.style.overflow = "hidden";
    }, []);

    const closeModal = useCallback(() => {
        setIsOpen(false);
        document.body.style.overflow = "";
        // Delay clearing src so the fade-out plays nicely
        setTimeout(() => setModalSrc(""), 200);
    }, []);

    // Attach click handler to gallery & service images
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            const img = (e.target as HTMLElement).closest("img");
            if (!img) return;
            if (img.closest(".gallery-grid") || img.classList.contains("service-img")) {
                openModal(getOriginalSrc(img));
            }
        };
        document.addEventListener("click", handler);
        return () => document.removeEventListener("click", handler);
    }, [openModal]);

    // Close on Escape
    useEffect(() => {
        if (!isOpen) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        };
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [isOpen, closeModal]);

    return (
        <div
            className={`image-modal${isOpen ? " active" : ""}`}
            id="imageModal"
            role="dialog"
            aria-modal="true"
            aria-label="Vista ampliada de imagen"
            onClick={(e) => {
                if (e.target === e.currentTarget) closeModal();
            }}
        >
            <button
                className="close-modal"
                id="closeModal"
                onClick={closeModal}
                type="button"
                aria-label="Cerrar imagen ampliada"
            >
                &times;
            </button>
            {modalSrc && (
                <div className="modal-content-wrapper">
                    <Image
                        src={modalSrc}
                        alt="Imagen ampliada de diseño de uñas"
                        fill
                        sizes="(max-width: 900px) 92vw, 900px"
                        className="modal-content-img"
                        style={{ objectFit: "contain" }}
                    />
                </div>
            )}
        </div>
    );
});

export default ImageModal;