import Image from "next/image";
import { memo } from "react";
import { navLinks } from "../_data";

const Header = memo(function Header() {
    return (
        <header id="header-color" aria-label="Encabezado principal">
            <div className="header-inner">
                <a href="#" className="logo">
                    <Image src="/logo.png" alt="Oh Lalá! Nails" width={34} height={34} style={{ width: "auto", height: "34px" }} />
                    <span>OH LALÁ! NAILS</span>
                </a>

                <nav className="main-nav" aria-label="Navegación principal">
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    className="menu-toggle"
                    id="menu-open"
                    type="button"
                    aria-label="Abrir menú de navegación"
                >
                    ☰
                </button>
            </div>
        </header>
    );
});

export default Header;