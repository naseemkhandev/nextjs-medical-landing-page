"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Container from "@/components/shared/Container";

const revealTransition = { duration: 0.75, ease: [0.22, 1, 0.36, 1] };

const PlayButton = ({ label }) => (
  <button type="button" aria-label={label} className="group/play absolute left-1/2 top-1/2 z-20 flex h-[64px] w-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/35 backdrop-blur-[8px] transition-all duration-300 hover:scale-110 hover:bg-white/55 active:scale-95 sm:h-[70px] sm:w-[70px]">
    <span className="ml-1 block h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-white transition-transform duration-300 group-hover/play:scale-110" />
  </button>
);

export default function VideoService() {
  return (
    <section id="services" className="overflow-hidden bg-[#fbfaf9] py-[90px] sm:py-[110px] lg:py-[145px]">
      <Container>
        {/* Section Heading */}
        <motion.h2 initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={revealTransition} className="max-w-[1120px] text-[38px] font-normal leading-[1.12] tracking-[-2px] sm:text-[48px] sm:tracking-[-2.6px] lg:text-[58px] lg:leading-[1.08] lg:tracking-[-3.4px]">
          <span className="text-[#111315]">A video-based service </span>
          <span className="text-[#b9b8b8]">that you can watch anytime and anywhere to stay healthy and fit.</span>
        </motion.h2>

        {/* Media Collage */}
        <div className="mt-[72px] grid grid-cols-2 items-end gap-3 sm:mt-[90px] sm:gap-4 lg:mt-[85px] lg:grid-cols-12 lg:gap-[14px]">
          {/* Yoga Video */}
          <motion.div initial={{ opacity: 0, y: 45, scale: 0.96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ ...revealTransition, delay: 0.05 }} whileHover={{ y: -6 }} className="group relative col-span-2 aspect-square overflow-hidden rounded-full bg-[#efeee9] sm:col-span-1 lg:col-span-3">
            <Image src="/images/video-yoga.png" alt="Woman practicing yoga" fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]" />
            <PlayButton label="Play yoga video" />
          </motion.div>

          {/* Doctor Video */}
          <motion.div initial={{ opacity: 0, y: 45, scale: 0.96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ ...revealTransition, delay: 0.12 }} whileHover={{ y: -6 }} className="group relative col-span-2 aspect-square overflow-hidden rounded-full bg-[#ececeb] sm:col-span-1 lg:col-span-3">
            <Image src="/images/video-doctor.png" alt="Professional doctor holding a clipboard" fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]" />
            <PlayButton label="Play doctor consultation video" />
          </motion.div>

          {/* Center Media Grid */}
          <motion.div initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ ...revealTransition, delay: 0.19 }} className="col-span-2 grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-3 lg:gap-[12px]">
            <div className="group relative aspect-square overflow-hidden rounded-full bg-[#eee]">
              <Image src="/images/video-medicine-doctor.png" alt="Doctor preparing medicine" fill sizes="(max-width: 1023px) 50vw, 12vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
            </div>

            <div className="group relative aspect-square overflow-hidden rounded-full bg-[#f3f2f0]">
              <Image src="/images/video-medicine.png" alt="Medicine bottle and tablets" fill sizes="(max-width: 1023px) 50vw, 12vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
            </div>

            <div className="group relative aspect-square overflow-hidden rounded-full bg-[#efefef]">
              <Image src="/images/video-meditation.png" alt="Woman meditating outdoors" fill sizes="(max-width: 1023px) 50vw, 12vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
            </div>

            <div className="group relative aspect-square overflow-hidden rounded-full bg-[#ededed]">
              <Image src="/images/video-running.png" alt="Man running" fill sizes="(max-width: 1023px) 50vw, 12vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
            </div>
          </motion.div>

          {/* Healthy Food Video */}
          <motion.div initial={{ opacity: 0, y: 45, scale: 0.96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ ...revealTransition, delay: 0.26 }} whileHover={{ y: -6 }} className="group relative col-span-2 aspect-square overflow-hidden rounded-full bg-[#f0f1f1] sm:col-span-2 lg:col-span-3">
            <Image src="/images/video-food.png" alt="Healthy fruits and vegetables" fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 100vw, 25vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]" />
            <PlayButton label="Play healthy nutrition video" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}