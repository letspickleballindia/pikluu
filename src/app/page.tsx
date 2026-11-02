import HeroSection from "@/components/sections/HeroSection";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServicesGrid from "@/components/sections/ServicesGrid";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import VenueFeature from "@/components/sections/VenueFeature";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import JoinUs from "@/components/sections/JoinUs";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <ServicesGrid />
      <UpcomingEvents />
      <VenueFeature />
      <Testimonials />
      <FAQ />
      <JoinUs />
    </>
  );
}
