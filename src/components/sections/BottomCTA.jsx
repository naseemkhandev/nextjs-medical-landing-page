"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Container from "@/components/shared/Container";

const reveal = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

const specialties = [
  { icon: "/images/icons/lungs.svg", label: "Respiratory care" },
  { icon: "/images/icons/heart.svg", label: "Heart care" },
  { icon: "/images/icons/brain.svg", label: "Neurology care" },
];

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-[18px] w-[18px]">
    <path d="M5 12H19M14 7L19 12L14 17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const UpRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-[18px] w-[18px]">
    <path d="M7 17L17 7M9 7H17V15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function BottomCTA() {
  return (
    <section id="contact" className="overflow-hidden bg-[#fbfaf9]">
      <Container>
        <motion.div initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={reveal} className="relative min-h-[500px] border-b border-[#dedede] sm:min-h-[530px] lg:min-h-[505px]">
          {/* CTA Heading */}
          <div className="relative z-30 flex flex-col items-center pt-[75px] text-center sm:pt-[90px] lg:pt-[72px]">
            <motion.h2 initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }} className="max-w-[650px] text-[46px] font-normal leading-[1.02] tracking-[-2.8px] text-[#111315] sm:text-[58px] sm:tracking-[-3.5px] lg:text-[72px] lg:tracking-[-4.5px]">
              Get your best
              <br />
              treatment now!
            </motion.h2>

            <Link href="#home" className="group relative mt-[82px] inline-flex h-[58px] min-w-[240px] items-center justify-center gap-3 overflow-hidden rounded-full bg-[#17242f] px-8 text-[16px] font-semibold text-white shadow-[0_12px_28px_rgba(23,36,47,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(23,36,47,0.2)] sm:mt-[92px]">
              <span className="absolute inset-0 translate-y-full bg-[#263947] transition-transform duration-300 group-hover:translate-y-0" />
              <span className="relative z-10">Consult Now</span>
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"><ArrowIcon /></span>
            </Link>
          </div>

          {/* Specialty Visual */}
          <motion.div initial={{ opacity: 0, x: -45, y: 30, rotate: -16 }} whileInView={{ opacity: 1, x: 0, y: 0, rotate: -12 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -8, rotate: -9 }} className="absolute bottom-[-48px] left-[3%] hidden h-[260px] w-[275px] overflow-hidden rounded-[34px] shadow-[0_20px_45px_rgba(40,30,35,0.08)] sm:block lg:left-[4%] lg:h-[270px] lg:w-[285px]">
            <Image src="/images/specialty-bg.png" alt="Doctor specialty services" fill sizes="285px" className="object-cover" />

            <div className="absolute inset-0 z-10 flex flex-col items-center px-5 pb-6 pt-6 text-center">
              <span className="inline-flex h-[30px] items-center justify-center rounded-full border border-white/80 bg-white/25 px-5 text-[10px] font-medium text-[#27272a] backdrop-blur-[4px]">Docthea</span>

              <h3 className="mt-6 max-w-[185px] text-[26px] font-normal leading-[1.05] tracking-[-1px] text-[#26272a]">
                Our doctor&apos;s
                <br />
                specialty
              </h3>

              <div className="mt-auto flex items-end justify-center gap-2.5">
                {specialties.map((specialty, index) => (
                  <div key={specialty.label} className={`flex shrink-0 items-center justify-center rounded-full backdrop-blur-sm ${index === 1 ? "h-[70px] w-[70px] bg-white shadow-[0_12px_30px_rgba(115,70,78,0.1)]" : "h-[54px] w-[54px] bg-white/40"}`}>
                    <Image src={specialty.icon} alt={specialty.label} width={index === 1 ? 30 : 25} height={index === 1 ? 30 : 25} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Connect Doctors Visual */}
          <motion.div initial={{ opacity: 0, y: 55, rotate: 12 }} whileInView={{ opacity: 1, y: 0, rotate: 10 }} viewport={{ once: true }} transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -8, rotate: 7 }} className="absolute bottom-[-35px] right-[23%] hidden h-[160px] w-[190px] overflow-hidden rounded-[28px] shadow-[0_18px_40px_rgba(40,35,50,0.06)] md:block lg:right-[24%] lg:h-[175px] lg:w-[205px]">
            <Image src="/images/connect-doctors-card-bg.png" alt="Connect with professional doctors" fill sizes="205px" className="object-cover" />

            <div className="absolute inset-0 bg-white/[0.04]" />

            <div className="absolute inset-0 z-10 flex items-center p-5">
              <h3 className="max-w-[160px] text-[20px] font-normal leading-[1.02] tracking-[-0.7px] text-[#17191d] lg:text-[21px]">
                Connect with
                <br />
                our professional
                <br />
                doctors
              </h3>
            </div>
          </motion.div>

          {/* Yoga Visual */}
          <motion.div initial={{ opacity: 0, x: 45, y: 35, rotate: 6 }} whileInView={{ opacity: 1, x: 0, y: 0, rotate: 4 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -8, rotate: 2 }} className="absolute bottom-[-6px] right-[1%] hidden h-[270px] w-[275px] overflow-hidden rounded-[36px] bg-[#eeeeee] shadow-[0_20px_45px_rgba(30,30,35,0.08)] sm:block lg:right-[2%] lg:h-[285px] lg:w-[300px]">
            <Image src="/images/relaxing-yoga.png" alt="Woman practicing relaxing yoga" fill sizes="300px" className="object-cover transition-transform duration-700 hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(15,15,15,0.35)_100%)]" />

            <span className="absolute right-4 top-4 flex h-[62px] w-[62px] items-center justify-center rounded-full bg-white/90 text-[#17212b] backdrop-blur-sm">
              <UpRightIcon />
            </span>

            <h3 className="absolute bottom-5 left-6 text-[25px] font-normal tracking-[-0.8px] text-white">Relaxing yoga</h3>
          </motion.div>

          {/* Mobile Visual Cards */}
          <div className="relative z-10 mt-12 grid grid-cols-2 gap-3 pb-8 sm:hidden">
            {/* Mobile Specialty */}
            <div className="relative h-[185px] overflow-hidden rounded-[24px]">
              <Image src="/images/specialty-bg.png" alt="Doctor specialty services" fill sizes="50vw" className="object-cover" />

              <div className="absolute inset-0 flex flex-col items-center px-3 py-4 text-center">
                <span className="rounded-full border border-white/80 bg-white/25 px-3 py-1 text-[8px] backdrop-blur-sm">Docthea</span>
                <h3 className="mt-3 text-[17px] font-normal leading-[1.05] tracking-[-0.5px] text-[#26272a]">Our doctor&apos;s specialty</h3>

                <div className="mt-auto flex items-center justify-center gap-1.5">
                  {specialties.map((specialty, index) => (
                    <div key={specialty.label} className={`flex items-center justify-center rounded-full ${index === 1 ? "h-[44px] w-[44px] bg-white" : "h-[36px] w-[36px] bg-white/45"}`}>
                      <Image src={specialty.icon} alt="" width={index === 1 ? 20 : 17} height={index === 1 ? 20 : 17} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Connect Doctors */}
            <div className="relative h-[185px] overflow-hidden rounded-[24px]">
              <Image src="/images/connect-doctors-card-bg.png" alt="Connect with professional doctors" fill sizes="50vw" className="object-cover" />
              <h3 className="absolute bottom-4 left-4 max-w-[125px] text-[16px] font-normal leading-[1.05] tracking-[-0.5px] text-[#17191d]">Connect with our professional doctors</h3>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}