"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Brain, HeartPulse, Lungs } from "lucide-react";
import { motion } from "motion/react";
import Container from "@/components/shared/Container";

const doctors = [
  { src: "/images/doctor-1.png", alt: "Professional doctor" },
  { src: "/images/doctor-2.png", alt: "Professional doctor" },
  { src: "/images/doctor-3.png", alt: "Professional doctor" },
];

const specialties = [
  { id: "lungs", icon: Lungs, label: "Respiratory care" },
  { id: "heart", icon: HeartPulse, label: "Heart care" },
  { id: "brain", icon: Brain, label: "Neurology care" },
];

export default function DoctorConnect() {
  const [activeSpecialty, setActiveSpecialty] = useState("heart");

  return (
    <section id="about" className="bg-[#fbfaf9] py-2 sm:py-3">
      <Container>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4">
          {/* Latest Visited Doctors */}
          <motion.article initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -5 }} className="group relative flex min-h-[325px] flex-col justify-between overflow-hidden rounded-[32px] bg-white p-6 shadow-[0_8px_30px_rgba(24,34,45,0.03)] sm:p-7">
            <div className="flex items-start justify-between gap-5">
              <h2 className="max-w-[185px] text-[25px] font-normal leading-[1.12] tracking-[-1px] text-[#171c22] sm:text-[27px]">Latest visited doctors</h2>

              <Link href="#doctors" aria-label="View doctors" className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[#f7f7f7] text-[#17212b] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#17222d] group-hover:text-white sm:h-[78px] sm:w-[78px]">
                <ArrowUpRight size={22} strokeWidth={1.7} />
              </Link>
            </div>

            <div>
              <div className="mb-5 flex items-center pl-1">
                {doctors.map((doctor, index) => (
                  <div key={doctor.src} className={`relative h-[54px] w-[54px] overflow-hidden rounded-full border-[3px] border-white bg-[#edf0f3] ${index !== 0 ? "-ml-3" : ""}`}>
                    <Image src={doctor.src} alt={doctor.alt} fill sizes="54px" className="object-cover" />
                  </div>
                ))}
              </div>

              <p className="max-w-[235px] text-[18px] leading-[1.25] tracking-[-0.45px] text-[#7a7a7a] sm:text-[20px]">More than 4k doctors at your service</p>
            </div>
          </motion.article>

          {/* Doctor Specialty */}
          <motion.article initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -5 }} className="relative min-h-[325px] overflow-hidden rounded-[32px]">
            <Image src="/images/specialty-bg.jpg" alt="" fill sizes="(max-width: 767px) 100vw, 25vw" className="object-cover" />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,233,239,0.12))]" />

            <div className="relative z-10 flex h-full min-h-[325px] flex-col items-center px-5 py-7 text-center">
              <span className="mb-5 inline-flex h-[30px] items-center rounded-full border border-white/75 bg-white/25 px-5 text-[11px] font-medium text-[#27272a] backdrop-blur-[4px]">Docthea</span>

              <h2 className="max-w-[230px] text-[27px] font-normal leading-[1.08] tracking-[-1.15px] text-[#26272a] sm:text-[29px]">Our doctor&apos;s specialty</h2>

              <div className="mt-auto flex items-center justify-center gap-3">
                {specialties.map(({ id, icon: Icon, label }) => {
                  const isActive = activeSpecialty === id;

                  return (
                    <button key={id} type="button" onClick={() => setActiveSpecialty(id)} aria-label={label} aria-pressed={isActive} className={`flex items-center justify-center rounded-full text-[#ff7e8f] backdrop-blur-sm transition-all duration-300 ${isActive ? "h-[78px] w-[78px] bg-white shadow-[0_12px_30px_rgba(115,70,78,0.12)]" : "h-[61px] w-[61px] bg-white/35 hover:bg-white/60"}`}>
                      <Icon size={isActive ? 30 : 25} strokeWidth={1.6} />
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.article>

          {/* Professional Doctors */}
          <motion.article initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -5 }} className="flex min-h-[325px] flex-col justify-center rounded-[32px] bg-white px-7 py-8 shadow-[0_8px_30px_rgba(24,34,45,0.03)] sm:px-8">
            <h2 className="max-w-[275px] text-[32px] font-normal leading-[1.05] tracking-[-1.5px] text-[#111317] sm:text-[35px]">Connect with our professional doctors</h2>

            <Link href="#contact" className="group relative mt-12 inline-flex h-[58px] w-full max-w-[215px] items-center justify-center overflow-hidden rounded-full bg-[#17242f] px-6 text-[16px] font-semibold text-white shadow-[0_10px_25px_rgba(23,36,47,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_17px_35px_rgba(23,36,47,0.16)]">
              <span className="absolute inset-0 translate-y-full bg-[#263947] transition-transform duration-300 ease-out group-hover:translate-y-0" />
              <span className="relative z-10">Connect Now</span>
            </Link>
          </motion.article>

          {/* Relaxing Yoga */}
          <motion.article initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, delay: 0.24, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -5 }} className="group relative min-h-[325px] overflow-hidden rounded-[32px] bg-[#dedede]">
            <Image src="/images/relaxing-yoga.jpg" alt="Woman practicing relaxing yoga" fill sizes="(max-width: 767px) 100vw, 25vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(20,20,20,0.38)_100%)]" />

            <Link href="#services" aria-label="Explore relaxing yoga" className="absolute right-3 top-3 z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white/90 text-[#17212b] backdrop-blur-md transition-all duration-300 hover:rotate-6 hover:bg-[#17222d] hover:text-white sm:h-[78px] sm:w-[78px]">
              <ArrowUpRight size={22} strokeWidth={1.7} />
            </Link>

            <div className="absolute bottom-5 left-6 right-6 z-10">
              <h2 className="text-[27px] font-normal tracking-[-1px] text-white sm:text-[29px]">Relaxing yoga</h2>

              <div className="mt-5 flex gap-2">
                <span className="h-[5px] flex-1 rounded-full bg-white" />
                <span className="h-[5px] flex-1 rounded-full bg-white/55" />
                <span className="h-[5px] flex-1 rounded-full bg-white/55" />
                <span className="h-[5px] flex-1 rounded-full bg-white/55" />
              </div>
            </div>
          </motion.article>
        </div>
      </Container>
    </section>
  );
}