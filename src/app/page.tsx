import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import MusicSchoolTestimonial from "@/components/MusicSchoolTestimonial";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedSection />
      <WhyChooseUs />
      <MusicSchoolTestimonial />
      <UpcomingWebinars />
      <Instructor />
      <Footer />
    </main>
  );
}
