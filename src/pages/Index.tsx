import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PhilosophyBar from "@/components/PhilosophyBar";
import LatestInsights from "@/components/LatestInsights";
import FourFields from "@/components/FourFields";
import AboutSection from "@/components/AboutSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PhilosophyBar />
      <LatestInsights />
      <FourFields />
      <AboutSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
