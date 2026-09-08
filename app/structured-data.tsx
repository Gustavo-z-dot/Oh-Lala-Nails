import { services, contact } from "./_data";

export default function StructuredData() {
    const serviceList = services.map((s, i) => ({
        "@type": "Service",
        "@id": `#service-${i + 1}`,
        name: s.name,
        ...(s.price && {
            offers: {
                "@type": "Offer",
                price: s.price.replace("$", "").trim(),
                priceCurrency: "UYU",
            },
        }),
    }));

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://ohlalanails.com",
        name: "Oh Lalá! Nails",
        description:
            "Salón de uñas profesional en La Paz, Canelones. Esmaltado, kapping gel, soft gel, esculpidas, mantenimiento y más.",
        url: "https://ohlalanails.com",
        telephone: contact.phone,
        email: "ohlala_nails0@outlook.com",
        address: {
            "@type": "PostalAddress",
            streetAddress: contact.address,
            addressLocality: "La Paz",
            addressRegion: "Canelones",
            addressCountry: "UY",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: -34.7669,
            longitude: -56.2315,
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "09:00",
                closes: "13:00",
            },
        ],
        image: "/Portadas/Portada1.webp",
        priceRange: "$$",
        sameAs: [
            contact.whatsapp,
            contact.instagram,
        ],
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Servicios de uñas",
            itemListElement: serviceList,
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}