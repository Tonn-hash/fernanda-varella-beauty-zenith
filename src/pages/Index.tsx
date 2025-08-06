import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { BookingSection } from "@/components/BookingSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero type="home" />
      <About />
      <Portfolio />
      <Testimonials />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Index;
