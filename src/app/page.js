import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import DoctorConnect from "@/components/sections/DoctorConnect";
import VideoService from "@/components/sections/VideoService";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DoctorConnect />
      <VideoService />
    </main>
  );
}