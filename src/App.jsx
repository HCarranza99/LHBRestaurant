import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import FeaturedDishes from "./components/FeaturedDishes.jsx";
import AboutSection from "./components/AboutSection.jsx";
import BranchesSection from "./components/BranchesSection.jsx";
import MenuPreview from "./components/MenuPreview.jsx";
import PromotionsSection from "./components/PromotionsSection.jsx";
import SignatureSection from "./components/SignatureSection.jsx";
import RitualSection from "./components/RitualSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import MobileDock from "./components/MobileDock.jsx";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 820);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const animated = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    animated.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scrollToHash = () => {
      if (!window.location.hash) return;
      const target = document.querySelector(window.location.hash);
      if (target) requestAnimationFrame(() => target.scrollIntoView());
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <>
      <div className={`brand-loader ${isLoading ? "" : "is-hidden"}`} aria-hidden="true">
        <span>LH</span>
        <i />
      </div>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <SignatureSection />
        <FeaturedDishes />
        <RitualSection />
        <MenuPreview />
        <PromotionsSection />
        <BranchesSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <MobileDock />
      <Footer />
    </>
  );
}
