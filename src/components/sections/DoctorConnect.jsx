"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Container from "@/components/shared/Container";

const doctors = [
  { src: "/images/doctor-1.png", alt: "Professional female doctor" },
  { src: "/images/doctor-2.png", alt: "Professional male doctor" },
  { src: "/images/doctor-3.png", alt: "Professional female doctor" },
];

const specialties = [
  { id: "lungs", icon: "/images/icons/lungs.svg", label: "Respiratory care" },
  { id: "heart", icon: "/images/icons/heart.svg", label: "Heart care" },
  { id: "brain", icon: "/images/icons/brain.svg", label: "Neurology care" },
];

const wellnessSlides = [
  { id: 1, title: "Relaxing yoga", image: "/images/relaxing-yoga.png", alt: "Woman practicing relaxing yoga" },
  { id: 2, title: "Mindful meditation", image: "/images/meditation.png", alt: "Woman practicing mindful meditation" },
  { id: 3, title: "Wellness care", image: "/images/wellness-care.png", alt: "Healthy wellness lifestyle" },
  { id: 4, title: "Healthy lifestyle", image: "/images/healthy-lifestyle.png", alt: "Healthy active lifestyle" },
];

const revealTransition = { duration: 0.65, ease: [0.22, 1, 0.36, 1] };

export default function DoctorConnect() {
  const [activeSpecialty, setActiveSpecialty] = useState("heart");
  const [activeSlide, setActiveSlide] = useState(0);
  const [isSliderPaused, setIsSliderPaused] = useState(false);

  /* Wellness Slider */
  useEffect(() => {
    if (isSliderPaused) return;

    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % wellnessSlides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isSliderPaused]);

  const handleNextSlide = () => {
    setActiveSlide((current) => (current + 1) % wellnessSlides.length);
  };

  return (
    <section id="about" className="bg-[#fbfaf9] py-2 sm:py-5">
      <Container>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4">
          {/* Latest Visited Doctors */}
          <motion.article initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={revealTransition} whileHover={{ y: -5 }} className="group relative flex min-h-[325px] flex-col justify-between overflow-hidden rounded-[32px] bg-white p-6 shadow-[0_8px_30px_rgba(24,34,45,0.03)] sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <h2 className="max-w-[185px] text-[25px] font-normal leading-[1.12] tracking-[-1px] text-[#171c22] sm:text-[27px]">Latest visited doctors</h2>

              <Link href="#doctors" aria-label="View doctors" className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[#f7f7f7] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_25px_rgba(23,34,45,0.08)] sm:h-[78px] sm:w-[78px]">
                <Image src="/images/icons/arrow-up-right.svg" alt="" width={23} height={23} />
              </Link>
            </div>

            <div>
              <div className="mb-5 flex items-center pl-1">
                {doctors.map((doctor, index) => (
                  <div key={doctor.src} className={`relative h-[54px] w-[54px] overflow-hidden rounded-full border-[3px] border-white bg-[#edf0f3] transition-transform duration-300 hover:z-10 hover:-translate-y-1 hover:scale-105 ${index !== 0 ? "-ml-3" : ""}`}>
                    <Image src={doctor.src} alt={doctor.alt} fill sizes="54px" className="object-cover" />
                  </div>
                ))}
              </div>

              <p className="max-w-[235px] text-[18px] leading-[1.25] tracking-[-0.45px] text-[#7a7a7a] sm:text-[20px]">More than 4k doctors at your service</p>
            </div>
          </motion.article>

          {/* Doctor Specialty */}
          <motion.article initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ ...revealTransition, delay: 0.08 }} whileHover={{ y: -5 }} className="group relative min-h-[325px] overflow-hidden rounded-[32px]">
            <Image src="/images/specialty-bg.png" alt="Medical specialty background" fill sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,233,239,0.12))]" />

            <div className="relative z-10 flex min-h-[325px] flex-col items-center px-5 py-7 text-center">
              <span className="mb-5 inline-flex h-[30px] items-center rounded-full border border-white/75 bg-white/25 px-5 text-[11px] font-medium text-[#27272a] backdrop-blur-[4px]">Docthea</span>
              <h2 className="max-w-[230px] text-[27px] font-normal leading-[1.08] tracking-[-1.15px] text-[#26272a] sm:text-[29px]">Our doctor&apos;s specialty</h2>

              <div className="mt-auto flex items-center justify-center gap-3">
                {specialties.map((specialty) => {
                  const isActive = activeSpecialty === specialty.id;

                  return (
                    <button key={specialty.id} type="button" onClick={() => setActiveSpecialty(specialty.id)} aria-label={specialty.label} aria-pressed={isActive} className={`relative flex shrink-0 items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300 active:scale-95 ${isActive ? "h-[78px] w-[78px] bg-white shadow-[0_12px_30px_rgba(115,70,78,0.12)]" : "h-[61px] w-[61px] bg-white/35 hover:-translate-y-1 hover:bg-white/60"}`}>
                      <Image src={specialty.icon} alt="" width={isActive ? 32 : 27} height={isActive ? 32 : 27} className="transition-all duration-300" />
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.article>

          {/* Professional Doctors */}
          <motion.article initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ ...revealTransition, delay: 0.16 }} whileHover={{ y: -5 }} className="flex min-h-[325px] flex-col justify-center rounded-[32px] bg-white px-7 py-8 shadow-[0_8px_30px_rgba(24,34,45,0.03)] sm:px-8">
            <h2 className="max-w-[275px] text-[32px] font-normal leading-[1.05] tracking-[-1.5px] text-[#111317] sm:text-[35px]">Connect with our professional doctors</h2>

            <Link href="#contact" className="group relative mt-12 inline-flex h-[58px] w-full max-w-[215px] items-center justify-center overflow-hidden rounded-full bg-[#17242f] px-6 text-[16px] font-semibold text-white shadow-[0_10px_25px_rgba(23,36,47,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_17px_35px_rgba(23,36,47,0.16)]">
              <span className="absolute inset-0 translate-y-full bg-[#263947] transition-transform duration-300 ease-out group-hover:translate-y-0" />
              <span className="relative z-10">Connect Now</span>
            </Link>
          </motion.article>

          {/* Wellness Slider */}
          <motion.article initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ ...revealTransition, delay: 0.24 }} whileHover={{ y: -5 }} onMouseEnter={() => setIsSliderPaused(true)} onMouseLeave={() => setIsSliderPaused(false)} className="group relative min-h-[325px] overflow-hidden rounded-[32px] bg-[#dedede]">
            <AnimatePresence mode="wait">
              <motion.div key={wellnessSlides[activeSlide].id} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0">
                <Image src={wellnessSlides[activeSlide].image} alt={wellnessSlides[activeSlide].alt} fill priority={activeSlide === 0} sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw" className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]" />
              </motion.div>
            </AnimatePresence>

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(16,18,20,0.5)_100%)]" />

            <button type="button" onClick={handleNextSlide} aria-label="View next wellness slide" className="absolute right-3 top-3 z-20 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:rotate-6 hover:bg-white hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)] active:scale-95 sm:h-[78px] sm:w-[78px]">
              <Image src="/images/icons/arrow-up-right.svg" alt="" width={23} height={23} />
            </button>

            <div className="absolute bottom-5 left-6 right-6 z-20">
              <AnimatePresence mode="wait">
                <motion.h2 key={wellnessSlides[activeSlide].title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }} className="text-[27px] font-normal tracking-[-1px] text-white sm:text-[29px]">
                  {wellnessSlides[activeSlide].title}
                </motion.h2>
              </AnimatePresence>

              <div className="mt-5 flex gap-2">
                {wellnessSlides.map((slide, index) => (
                  <button key={slide.id} type="button" onClick={() => setActiveSlide(index)} aria-label={`View ${slide.title}`} aria-current={activeSlide === index ? "true" : undefined} className="group/indicator relative h-[5px] flex-1 overflow-hidden rounded-full bg-white/45">
                    {activeSlide === index && <motion.span layoutId="activeWellnessIndicator" className="absolute inset-0 rounded-full bg-white" transition={{ duration: 0.3 }} />}
                    <span className="absolute inset-0 rounded-full bg-white/0 transition-colors duration-300 group-hover/indicator:bg-white/25" />
                  </button>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </Container>
    </section>
  );
}