// ===== NAVEGACIÓN =====
export const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#benefits", label: "Promoción" },
    { href: "#servicios", label: "Servicios" },
    { href: "#location", label: "Ubicación" },
    { href: "#galeria", label: "Galería" },
    { href: "#contacto", label: "Contacto" },
] as const;

// ===== HERO SLIDER =====
export interface Slide {
    image: string;
    title: string;
    subtitle: string;
    cta: { href: string; label: string; external?: boolean };
    ariaLabel: string;
}

export const slides: Slide[] = [
    {
        image: "/Portadas/Portada1.webp",
        title: "EXPERIENCIA EN EL CUIDADO DE LAS UÑAS",
        subtitle: "Ofrecemos servicios de manicura con una precisión impecable.",
        cta: { href: "https://wa.me/59891040117", label: "RESERVAR CITA", external: true },
        ariaLabel: "Slide 1: experiencia experta",
    },
    {
        image: "/Portadas/34.jpg",
        title: "Plasmamos tus ideas",
        subtitle: "Diseños únicos y personalizados que reflejan tu estilo y personalidad.",
        cta: { href: "#galeria", label: "GALERÍA" },
        ariaLabel: "Slide 2: diseños exclusivos",
    },
    {
        image: "/Portadas/38.jpg",
        title: "PRODUCTOS DE ALTA CALIDAD",
        subtitle: "Cuidamos la salud de tus uñas utilizando solo marcas líderes y seguras.",
        cta: { href: "https://www.instagram.com/ohlala_nails0/", label: "CONOCER MÁS", external: true },
        ariaLabel: "Slide 3: productos de alta calidad",
    },
];

// ===== SERVICIOS =====
export interface Service {
    name: string;
    price?: string;
    image: string;
    alt: string;
}

export const services: Service[] = [
    { name: "Esmaltado", price: "$400", image: "/Unas/16.webp", alt: "Servicio de esmaltado de uñas" },
    { name: "Kapping Gel", price: "$700", image: "/Unas/Kapping-Gel.webp", alt: "Servicio de kapping gel" },
    { name: "Kapping Acrílico / Polygel", price: "$750", image: "/Unas/31.jpg", alt: "Servicio de kapping acrílico o polygel" },
    { name: "Soft Gel", price: "$700", image: "/Unas/7.webp", alt: "Servicio de soft gel" },
    { name: "Esculpidas", price: "$850", image: "/Unas/30.webp", alt: "Servicio de uñas esculpidas" },
    { name: "Retiro", price: "$300", image: "/Unas/retiro.jpg", alt: "Servicio de retiro de material" },
    { name: "Mantenimiento", price: undefined, image: "/Unas/mantenimiento.jpg", alt: "Servicio de mantenimiento" },
];

// ===== GALERÍA =====
export const galleryImages: { src: string; alt: string }[] = [
    { src: "/Unas/4.webp", alt: "Diseño de uñas elegante en tonos claros" },
    { src: "/Unas/6.webp", alt: "Decoración de uñas con acabado profesional" },
    { src: "/Unas/21.webp", alt: "Diseño de uñas con detalle artístico" },
    { src: "/Unas/9.webp", alt: "Uñas esmaltadas con estilo moderno" },
    { src: "/Unas/13.webp", alt: "Aplicación de soft gel en uñas" },
    { src: "/Unas/39.jpg", alt: "Diseño personalizado de uñas" },
    { src: "/Unas/34.jpg", alt: "Trabajo de manicura profesional" },
    { src: "/Unas/10.webp", alt: "Manicura con diseño de tendencia" },
    { src: "/Unas/1.webp", alt: "Diseño de uñas con terminación prolija" },
    { src: "/Unas/38.jpg", alt: "Uñas con acabado brillante y uniforme" },
    { src: "/Unas/16.webp", alt: "Servicio profesional de uñas en La Paz" },
    { src: "/Unas/19.webp", alt: "Muestra de diseños exclusivos de Oh Lalá! Nails" },
];

// ===== PROMO =====
export const promo = {
    kicker: "PROMOCION ESPECIAL",
    title: "Promo Soft Gel",
    price: "2 x $1000",
    description: "Veni con quien quieras y disfrutá de nuestra promoción especial.",
    ctaPrimary: { href: "https://wa.me/59891040117", label: "RESERVAR AHORA" },
    ctaSecondary: { href: "#galeria", label: "VER TRABAJOS" },
};

// ===== PROMO POPUP =====
export const promoPopup = {
    image: "/Promos/SemiPermanente.jpeg",
    alt: "Promoción SemiPermanente",
};

// ===== CONTACTO =====
export const contact = {
    whatsapp: "https://wa.me/59891040117",
    instagram: "https://www.instagram.com/ohlala_nails0/",
    phone: "091 040 117",
    phoneRaw: "091040117",
    address: "Rincón 196 esquina Ortiz, La Paz",
    mapsUrl: "https://maps.app.goo.gl/9WGATshMiha6SXjr9",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d819.3878503833027!2d-56.23146514998283!3d-34.76689161622858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a1d30055e18acb%3A0x5a079d5336d66df4!2sOh%20Lal%C3%A1%20Nails!5e0!3m2!1ses!2suy!4v1778001029236!5m2!1ses!2suy",
    instagramIcon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
    whatsappIcon: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
};