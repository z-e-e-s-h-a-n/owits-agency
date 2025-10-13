import HeroSection from "@/components/sections/Hero";
import DestinationSection from "@/components/sections/Destination";
import ServicesSection from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/About";
import TestimonialsSection from "@/components/sections/Testimonial";
import FaqSection from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

function Home() {
  return (
    <>
      <HeroSection />
      <DestinationSection />
      <ServicesSection />
      <WhyChooseUs />
      <FaqSection />
      {/* <TestimonialsSection /> */}
      <Contact />
    </>
  );
}

export default Home;
