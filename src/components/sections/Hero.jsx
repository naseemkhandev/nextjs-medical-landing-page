"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Container from "@/components/shared/Container";

export default function Hero() {
  return (
    <section id="home" className="bg-[#fbfaf9]">
      <div className="relative min-h-[calc(100svh-74px)] overflow-hidden rounded-t-[28px] bg-[linear-gradient(180deg,#eaf1ff_0%,#edf0fb_28%,#f3e4e5_58%,#f8cfc5_100%)] sm:rounded-t-[30px] lg:min-h-206.75">
        <Container className="relative z-10">
          <div className="relative min-h-[calc(100svh-74px)] lg:min-h-206.75">
            {/* Hero Content */}
            <div className="relative z-20 flex min-h-190 flex-col pt-16 sm:pt-18.75 lg:min-h-206.75 lg:w-[53%] lg:justify-center lg:pt-0">
              {/* Medical Center Badge */}
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }} className="mb-9 inline-flex w-fit items-center gap-3.5 rounded-full bg-white/60 px-3.5 py-2.5 pr-6.5 backdrop-blur-md sm:mb-11 sm:px-4 sm:py-2.75 sm:pr-7 lg:mb-12">
                <span className="flex h-9.75 w-9.75 shrink-0 items-center justify-center rounded-full bg-white text-[22px] shadow-[0_4px_14px_rgba(0,0,0,0.04)]">🔥</span>
                <span className="whitespace-nowrap text-[15px] font-medium tracking-[-0.3px] text-[#20242a] sm:text-[17px] lg:text-[20px]">#1 best medical center</span>
              </motion.div>

              {/* Hero Heading */}
              <motion.h1 initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.82, delay: 0.17, ease: [0.22, 1, 0.36, 1] }} className="max-w-167.5 text-[45px] font-normal leading-none tracking-[-2.6px] text-[#19232e] sm:text-[58px] sm:tracking-[-3.2px] lg:text-[76px] lg:leading-[1.08] lg:tracking-[-4.5px] xl:text-[78px]">
                The Best Medical<br />
                and Treatment<br />
                Center for You
              </motion.h1>

              {/* Hero Description */}
              <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="mt-7 max-w-132.5 text-[14px] leading-[1.65] tracking-[-0.15px] text-[#59616a] sm:text-[17px] lg:mt-8.5">
                Connect with our professional doctors who are ready to help you manage your health with expertise and dedication.
              </motion.p>

              {/* Primary Call to Action */}
              <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} className="mt-7 lg:mt-9.5">
                <Link href="#contact" className="group relative inline-flex h-14.5 min-w-58.75 items-center justify-center overflow-hidden rounded-full bg-[#17242f] px-8 text-[16px] font-semibold text-white shadow-[0_10px_25px_rgba(23,36,47,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(23,36,47,0.2)] sm:h-15.5">
                  <span className="absolute inset-0 translate-y-full bg-[#263947] transition-transform duration-300 ease-out group-hover:translate-y-0" />
                  <span className="relative z-10">Book Appointment</span>
                </Link>
              </motion.div>

              {/* Mobile Image Space */}
              <div className="h-97.5 sm:h-115 lg:hidden" />
            </div>

            {/* Hero Doctor Visual */}
            <motion.div initial={{ opacity: 0, x: 55, scale: 0.98 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 1, delay: 0.22, ease: [0.22, 1, 0.36, 1] }} className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-101.25 w-[115%] -translate-x-1/2 sm:h-125 sm:w-[90%] md:h-137.5 md:w-[80%] lg:left-auto lg:-right-10 lg:h-190 lg:w-[59%] lg:translate-x-0 xl:-right-13.75 xl:h-197.5 xl:w-[60%]">
              <motion.div className="relative h-full w-full">
                <Image src="/images/hero-doctor.png" alt="Professional female doctor at Docthea medical center" fill priority sizes="(max-width: 767px) 100vw, (max-width: 1023px) 80vw, 60vw" className="object-contain object-bottom" />
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}