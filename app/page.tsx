import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import PromoSection from "./components/PromoSection";
import ServicesGrid from "./components/ServicesGrid";
import Location from "./components/Location";
import ImageModal from "./components/ImageModal";
import Gallery from "./components/Gallery";
import ContactSection from "./components/ContactSection";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import PromoPopup from "./components/PromoPopup";

export default function Home() {
  return (
    <>
      <Header />
      <MobileMenu />

      <main aria-label="Contenido principal del sitio">
        <Hero />
        <PromoSection />
        <ServicesGrid />
        <Location />
        <ImageModal />
        <Gallery />
        <ContactSection />
        <FloatingWhatsApp />
        <PromoPopup />
      </main>
    </>
  );
}