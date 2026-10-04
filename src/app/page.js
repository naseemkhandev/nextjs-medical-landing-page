import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import DoctorConnect from "@/components/sections/DoctorConnect";
import VideoService from "@/components/sections/VideoService";
import MedicalFeatures from "@/components/sections/MedicalFeatures";
import TreatmentIntro from "@/components/sections/TreatmentIntro";
import Benefits from "@/components/sections/Benefits";
import Testimonials from "@/components/sections/Testimonials";
import BottomCTA from "@/components/sections/BottomCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DoctorConnect />
      <VideoService />
      <MedicalFeatures />
      <TreatmentIntro />
      <Benefits />
      <Testimonials />
      <BottomCTA />
      <Footer />
    </main>
  );
}