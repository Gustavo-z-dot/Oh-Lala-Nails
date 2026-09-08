import { memo } from "react";
import { navLinks } from "../_data";

const MobileMenu = memo(function MobileMenu() {
    return (
        <nav className="sidebar" id="sidebar" aria-label="Menú móvil">
            <button
                className="menu-close"
                id="menu-close"
                type="button"
                aria-label="Cerrar menú de navegación"
            >
                ✕
            </button>
            <ul>
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <a href={link.href}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
});

export default MobileMenu;