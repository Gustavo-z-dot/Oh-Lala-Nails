"use client";

import { useEffect } from "react";

export default function ClientScripts() {
    useEffect(() => {
        // Small delay to let React StrictMode double-mount cycle complete
        const timer = setTimeout(() => {
            console.log("[ClientScripts] Running effects");
            // ===== SIDEBAR (menú móvil) =======
            const openBtn = document.getElementById("menu-open");
            const closeBtn = document.getElementById("menu-close");
            const sidebar = document.getElementById("sidebar");

            if (openBtn && closeBtn && sidebar) {
                openBtn.addEventListener("click", () => sidebar.classList.add("active"));
                closeBtn.addEventListener("click", () => sidebar.classList.remove("active"));

                sidebar.querySelectorAll("ul li a").forEach((l) => {
                    l.addEventListener("click", () => sidebar.classList.remove("active"));
                });
            }

            // ===== INTERSECTION OBSERVER (reveal) =====
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("active");
                        }
                    });
                },
                { threshold: 0.2 }
            );

            document.querySelectorAll(".reveal").forEach((target) => observer.observe(target));
        });
        return () => clearTimeout(timer);
    }, []);

    return null;
}