"use client";

import { memo, useState, useEffect, useCallback, useRef } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored === "light" || stored === "dark") return stored;
    return "light";
}

export const ThemeToggle = memo(function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>("light");
    const mounted = useRef(false);

    useEffect(() => {
        setTheme(getInitialTheme());
        mounted.current = true;
    }, []);

    // Sync theme to <html> data attribute
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggle = useCallback(() => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }, []);

    // Don't render until mounted to avoid hydration mismatch
    if (!mounted.current) return null;

    return (
        <button
            type="button"
            className="theme-toggle"
            onClick={toggle}
            aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
            aria-live="polite"
        >
            <span className="theme-toggle-track">
                <span className={`theme-toggle-thumb ${theme}`}>
                    {/* Sun icon */}
                    <svg
                        className="theme-icon sun"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <circle cx="12" cy="12" r="5" />
                        <line x1="12" y1="1" x2="12" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1="1" y1="12" x2="3" y2="12" />
                        <line x1="21" y1="12" x2="23" y2="12" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>
                    {/* Moon icon */}
                    <svg
                        className="theme-icon moon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                </span>
            </span>
        </button>
    );
});

export default ThemeToggle;
