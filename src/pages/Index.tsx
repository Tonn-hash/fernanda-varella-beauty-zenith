import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
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
      <Services />
      <Testimonials />
      <div data-booking-section>
        <BookingSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
