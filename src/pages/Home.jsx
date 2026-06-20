import { motion } from "framer-motion";
import SEO from "../components/SEO.jsx";
import Hero from "../components/Hero.jsx";
import HighlightsStrip from "../components/HighlightsStrip.jsx";
import CategoryShowcase from "../components/CategoryShowcase.jsx";
import FeaturedProducts from "../components/FeaturedProducts.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import Testimonials from "../components/Testimonials.jsx";
import CTABanner from "../components/CTABanner.jsx";
import { company } from "../data/company.js";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Limras Sports",
  description:
    "Manufacturer and supplier of premium trophies, shields, medals and corporate awards based in Moradabad, India.",
  url: "https://www.limrassports.com",
  telephone: company.phone,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.line1,
    addressLocality: company.address.city,
    addressRegion: company.address.state,
    postalCode: company.address.pin,
    addressCountry: "IN",
  },
  areaServed: "IN",
};

export default function Home() {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SEO
        title="Premium Trophies, Shields & Corporate Awards"
        description="Limras Sports — premium manufacturer of trophies, shields, medals and corporate awards in Moradabad, India. 85+ designs, custom engraving, bulk orders, pan-India delivery."
        path="/"
        structuredData={structuredData}
      />
      <Hero />
      <HighlightsStrip />
      <CategoryShowcase />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </motion.div>
  );
}
