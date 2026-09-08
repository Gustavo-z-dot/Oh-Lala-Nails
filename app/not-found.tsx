import Link from "next/link";

export default function NotFound() {
    return (
        <div
            className="not-found"
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
                    fontSize: "clamp(5rem, 12vw, 8rem)",
                    fontFamily: "var(--font-playfair), serif",
                    color: "var(--primary)",
                    margin: "0 0 10px",
                    lineHeight: 1,
                }}
            >
                404
            </h1>
            <p
                style={{
                    fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
                    maxWidth: "500px",
                    margin: "0 0 30px",
                    color: "var(--neutral-soft)",
                }}
            >
                Upa... parece que esta página no existe o fue esmaltada y se fue a otra parte 💅
            </p>
            <Link
                href="/"
                className="not-found-link"
                style={{
                    display: "inline-block",
                    padding: "14px 40px",
                    background: "var(--primary)",
                    color: "var(--white)",
                    textDecoration: "none",
                    borderRadius: "50px",
                    fontSize: "1rem",
                    fontWeight: 600,
                    transition: "background 0.3s ease",
                }}
            >
                VOLVER AL INICIO
            </Link>

            <style>{`
                .not-found-link:hover {
                    background: var(--secondary) !important;
                }
            `}</style>
        </div>
    );
}