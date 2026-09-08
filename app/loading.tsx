export default function Loading() {
    return (
        <div
            className="loading-page"
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                background:
                    "radial-gradient(circle at 15% 20%, rgba(246, 221, 221, 0.45), transparent 40%), radial-gradient(circle at 80% 10%, rgba(238, 224, 213, 0.55), transparent 45%), var(--surface)",
                color: "var(--primary)",
                fontFamily: "var(--font-montserrat), sans-serif",
            }}
        >
            <div
                className="loading-spinner"
                style={{
                    width: "50px",
                    height: "50px",
                    border: "4px solid var(--surface-border)",
                    borderTopColor: "var(--primary)",
                    borderRadius: "50%",
                    animation: "spin 0.8s linear infinite",
                }}
            />
            <p
                style={{
                    fontSize: "1.1rem",
                    color: "var(--neutral-soft)",
                    animation: "pulse 1.5s ease-in-out infinite",
                }}
            >
                Cargando...
            </p>

            <style>{`
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
            `}</style>
        </div>
    );
}