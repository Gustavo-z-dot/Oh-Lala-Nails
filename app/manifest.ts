import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Oh Lalá! Nails",
        short_name: "Oh Lalá!",
        description:
            "Salón de uñas profesional en La Paz, Canelones. Esmaltado, kapping, soft gel, esculpidas y más.",
        start_url: "/",
        display: "standalone",
        background_color: "#faf3f0",
        theme_color: "#c27a7a",
        icons: [
            {
                src: "/logo.png",
                sizes: "any",
                type: "image/png",
            },
        ],
    };
}