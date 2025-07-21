import HeroSection from "@/components/sections/HeroSection";
import PopularDestinations from "@/components/sections/PopularDestinations";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CommunitySection from "@/components/sections/CommunitySection";

function Home() {
  return (
    <div className="flex flex-col gap-16">
      <HeroSection />
      <PopularDestinations />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CommunitySection />
    </div>
  );
}

export default Home;
