"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Error capturado por error.tsx:", error);
    }, [error]);

    return (
        <div
            className="error-page"
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "20px",
                background:
                    "radial-gradient(circle at 15% 20%, rgba(246, 221, 221, 0.45), transparent 40%), radial-gradient(circle at 80% 10%, rgba(238, 224, 213, 0.55), transparent 45%), var(--surface)",
                color: "var(--neutral)",
                fontFamily: "var(--font-montserrat), sans-serif",
            }}
        >
            <h1
                style={{
                    fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
                    fontFamily: "var(--font-playfair), serif",
                    color: "var(--tertiary)",
                    margin: "0 0 10px",
                    lineHeight: 1.2,
                }}
            >
                Algo salió mal 😅
            </h1>
            <p
                style={{
                    fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                    maxWidth: "500px",
                    margin: "0 0 30px",
                    color: "var(--neutral-soft)",
                    lineHeight: 1.6,
                }}
            >
                Hubo un error inesperado. No te preocupes, nuestras uñas siguen intactas.
                Podés intentar de nuevo o volver al inicio.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
                <button
                    onClick={reset}
                    style={{
                        padding: "14px 40px",
                        background: "var(--primary)",
                        color: "var(--white)",
                        border: "none",
                        borderRadius: "50px",
                        fontSize: "1rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "background 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.background = "var(--secondary)";
                    }}
                    onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.background = "var(--primary)";
                    }}
                >
                    INTENTAR DE NUEVO
                </button>
                <Link
                    href="/"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "14px 40px",
                        background: "transparent",
                        color: "var(--primary)",
                        textDecoration: "none",
                        border: "2px solid var(--primary)",
                        borderRadius: "50px",
                        fontSize: "1rem",
                        fontWeight: 600,
                        transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                        const el = e.target as HTMLElement;
                        el.style.background = "var(--primary)";
                        el.style.color = "var(--white)";
                    }}
                    onMouseLeave={(e) => {
                        const el = e.target as HTMLElement;
                        el.style.background = "transparent";
                        el.style.color = "var(--primary)";
                    }}
                >
                    VOLVER AL INICIO
                </Link>
            </div>
            {error.digest && (
                <p
                    style={{
                        marginTop: "40px",
                        fontSize: "0.75rem",
                        color: "var(--surface-border)",
                    }}
                >
                    Código de error: {error.digest}
                </p>
            )}
        </div>
    );
}