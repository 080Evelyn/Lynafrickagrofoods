import AboutSection from "@/components/AboutSection.jsx";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductsSection from "@/components/ProductsSection";
import Testimonial from "@/components/TestimonialsSection";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductsSection />
      <BenefitsSection />
      <AboutSection />
      {/* <ProcessSection /> */}
      <Testimonial />
      <Footer />
    </div>
  );
}

export default LandingPage;
