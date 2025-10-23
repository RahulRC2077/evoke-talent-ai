import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import FeaturedArtists from "@/components/FeaturedArtists";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CategorySection />
      <FeaturedArtists />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
