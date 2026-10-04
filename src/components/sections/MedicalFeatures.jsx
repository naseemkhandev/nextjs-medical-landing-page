"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Container from "@/components/shared/Container";

const reveal = { duration: 0.75, ease: [0.22, 1, 0.36, 1] };

const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="4" y="6" width="16" height="14" rx="4" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 3.5V7.5M16 3.5V7.5M4 10H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M9 14H9.01M13 14H13.01M9 17H9.01M13 17H13.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 7.5V12L15 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function MedicalFeatures() {
  return (
    <section className="bg-[#fbfaf9] py-[55px] sm:py-[75px] lg:py-[110px]">
      <Container>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          {/* Left Feature Column */}
          <div className="flex flex-col gap-2">
            {/* Certified Doctors */}
            <motion.article initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={reveal} className="relative flex min-h-[470px] flex-col overflow-hidden rounded-[30px] bg-white px-7 pt-7 sm:min-h-[490px] sm:px-10 sm:pt-10">
            <div className="flex items-center gap-5 sm:gap-7">
                <span className="text-[64px] font-normal leading-none tracking-[-4px] text-black sm:text-[78px] lg:text-[84px]">99%</span>
                <span className="rounded-full border border-[#dddddd] px-5 py-2 text-[14px] text-[#8c8c8c] sm:px-6 sm:text-[15px]">Guaranteed</span>
            </div>

            <div className="mt-10 grid flex-1 grid-cols-[145px_1fr] items-end gap-7 sm:grid-cols-[185px_1fr] sm:gap-9 lg:mt-12 lg:grid-cols-[190px_1fr]">
                {/* Certified Service Visual */}
                <motion.div className="relative h-[265px] self-end overflow-hidden rounded-t-[28px] sm:h-[300px]">
                <Image src="/images/first-service-bg.png" alt="Certified medical service" fill sizes="(max-width: 639px) 145px, 190px" className="object-cover object-bottom" />
                </motion.div>

                <div className="self-center pb-8 sm:pb-10">
                <h2 className="text-[28px] font-normal leading-[1.08] tracking-[-1.3px] text-[#121417] sm:text-[34px] lg:text-[42px]">
                  Our <br /> doctors are certified
                </h2>
                <p className="mt-5 max-w-[250px] text-[15px] leading-[1.45] text-[#858585] sm:text-[17px]">Don&apos;t worry, our doctorates are guaranteed with certificates and degrees.</p>
                </div>
            </div>
            </motion.article>

            {/* Fast Services */}
            <motion.article initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ ...reveal, delay: 0.08 }} className="relative min-h-[535px] overflow-hidden rounded-[30px] bg-white p-7 sm:p-9 lg:min-h-[555px]">
              <div className="relative z-20 max-w-[350px]">
                <h2 className="text-[31px] font-normal leading-[1.1] tracking-[-1.4px] text-[#111315] sm:text-[36px] lg:text-[38px]">Very fast and accurate services</h2>
                <p className="mt-6 max-w-[300px] text-[15px] leading-[1.5] text-[#878787] sm:text-[17px]">We are ready to serve you with pleasure and fast response!</p>

                <div className="mt-8 flex max-w-[285px] flex-col gap-3">
                  {[
                    ["90%", "Satisfying treatments"],
                    ["90%", "Happy customers"],
                    ["100%", "Fast response"],
                  ].map(([value, label], index) => (
                    <motion.div key={label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.14 + index * 0.08 }} className="flex h-[39px] items-center rounded-full border border-[#e5e5e5] px-5">
                      <span className="mr-2 text-[19px] tracking-[-0.7px] text-[#252525]">{value}</span>
                      <span className="text-[14px] text-[#8a8a8a] sm:text-[15px]">{label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Fast Service Doctor */}
              <motion.div initial={{ opacity: 0, x: 45 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="absolute bottom-0 right-[-25px] h-[355px] w-[62%] sm:h-[405px] sm:w-[58%] lg:h-[430px]">
                <Image src="/images/service-doctor.png" alt="Doctor holding a tablet" fill sizes="(max-width: 1023px) 55vw, 30vw" className="object-contain object-bottom" />
              </motion.div>
            </motion.article>

            {/* Benefits CTA */}
            <motion.article initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ ...reveal, delay: 0.12 }} className="relative flex min-h-[185px] flex-col items-center justify-center overflow-hidden rounded-[30px] bg-[linear-gradient(115deg,#e3ebff_0%,#f2e9ee_55%,#ffd1c6_100%)] px-6 py-8 text-center">
              <div className="pointer-events-none absolute -left-8 -top-14 h-[145px] w-[145px] rounded-full bg-white/20" />
              <div className="pointer-events-none absolute -bottom-16 right-10 h-[150px] w-[150px] rounded-full border border-white/20" />

              <h2 className="relative z-10 text-[28px] font-normal tracking-[-1.2px] text-[#1a1c20] sm:text-[32px] lg:text-[34px]">Get all the benefits now</h2>

              <Link href="#contact" className="group relative z-10 mt-6 inline-flex h-[52px] min-w-[150px] items-center justify-center overflow-hidden rounded-full bg-[#17242f] px-7 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(23,36,47,0.18)]">
                <span className="absolute inset-0 translate-y-full bg-[#263947] transition-transform duration-300 group-hover:translate-y-0" />
                <span className="relative z-10">Book Now</span>
              </Link>
            </motion.article>
          </div>

          {/* Right Feature Column */}
          <div className="flex flex-col gap-2">
            {/* Doctor Network */}
            <motion.article initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ ...reveal, delay: 0.08 }} className="relative min-h-[590px] overflow-hidden rounded-[30px] bg-white p-7 sm:p-10">
              <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }} whileHover={{ scale: 1.015 }} className="relative mx-auto h-[355px] w-full max-w-[520px] sm:h-[390px]">
                <Image src="/images/connect-doctors-bg.png" alt="Network of professional Docthea doctors" fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-contain object-center" />
              </motion.div>

              <div className="relative z-10">
                <h2 className="max-w-[410px] text-[34px] font-normal leading-[1.1] tracking-[-1.6px] text-[#111315] sm:text-[39px] lg:text-[42px]">Connect with our doctors</h2>
                <p className="mt-5 max-w-[410px] text-[15px] leading-[1.5] text-[#848484] sm:text-[17px]">Connect with our professional doctors who are ready to help you manage your health with expertise and dedication.</p>
              </div>
            </motion.article>

            {/* Realtime Consultations */}
            <motion.article initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ ...reveal, delay: 0.14 }} className="relative min-h-[535px] overflow-hidden rounded-[30px] bg-white px-7 py-12 text-center sm:min-h-[555px] sm:px-10">
            <div className="relative z-20">
                <h2 className="mx-auto max-w-[520px] text-[32px] font-normal leading-[1.08] tracking-[-1.4px] text-[#111315] sm:text-[37px] lg:text-[42px]">Realtime <br /> consultations</h2>
                <p className="mx-auto mt-5 max-w-[390px] text-[15px] leading-[1.45] text-[#858585] sm:text-[17px]">Connect with our professional doctors who are ready to help you.</p>
            </div>

            {/* Consultation Cards */}
            <div className="relative mx-auto mt-[38px] h-[280px] w-full max-w-[560px] sm:mt-[42px] sm:h-[290px]">
                {/* Schedule Card */}
                <motion.div initial={{ opacity: 0, x: -30, y: 25, rotate: -6 }} whileInView={{ opacity: 1, x: 0, y: 0, rotate: -4 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -5, rotate: -2 }} className="absolute bottom-[5px] left-[5%] h-[170px] w-[61%] overflow-hidden rounded-[22px] bg-[linear-gradient(135deg,#e6ebff_0%,#dadcff_100%)] p-5 text-left shadow-[0_16px_35px_rgba(97,102,170,0.07)] sm:left-[7%] sm:h-[185px] sm:w-[58%]">
                <div className="pointer-events-none absolute -right-8 -top-10 h-[125px] w-[125px] rounded-full bg-white/15" />

                <h3 className="relative z-10 max-w-[180px] text-[21px] font-normal leading-[1.04] tracking-[-0.8px] text-[#171b21] sm:text-[23px]">
                    Check schedule
                    <br />
                    doctors
                </h3>

                <div className="absolute bottom-5 left-5 right-5 z-10">
                    <div className="relative mb-2 h-[30px] w-[30px] overflow-hidden rounded-full border-2 border-white bg-white sm:h-[32px] sm:w-[32px]">
                    <Image src="/images/doctor-2.png" alt="Dr. Amira" fill sizes="32px" className="object-cover" />
                    </div>

                    <div className="flex items-end justify-between gap-2">
                    <p className="shrink-0 text-[14px] font-semibold tracking-[-0.4px] text-[#171b21] sm:text-[16px]">Dr. Amira</p>

                    <div className="flex items-center gap-2 pb-0.5 text-[8px] text-[#777b89] sm:text-[9px]">
                        <span className="flex items-center gap-1 whitespace-nowrap">
                        <CalendarIcon />
                        3 May 2024
                        </span>

                        <span className="flex items-center gap-1 whitespace-nowrap">
                        <ClockIcon />
                        8-11 AM
                        </span>
                    </div>
                    </div>
                </div>
                </motion.div>

                {/* Booking Card */}
                <motion.div initial={{ opacity: 0, x: 30, y: -20, rotate: 6 }} whileInView={{ opacity: 1, x: 0, y: 0, rotate: 4 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -6, rotate: 2 }} className="absolute right-[4%] top-[4px] z-20 h-[178px] w-[59%] overflow-hidden rounded-[22px] bg-[linear-gradient(145deg,#e4ebff_0%,#eee7eb_53%,#ffd3ca_100%)] p-5 text-left shadow-[0_18px_40px_rgba(94,73,83,0.08)] sm:right-[6%] sm:h-[190px] sm:w-[56%]">
                <div className="pointer-events-none absolute -bottom-12 right-[-25px] h-[125px] w-[125px] rounded-full bg-white/16" />

                <h3 className="relative z-10 max-w-[210px] text-[21px] font-normal leading-[1.03] tracking-[-0.8px] text-[#171b21] sm:text-[23px]">
                    Book your first
                    <br />
                    consultation
                </h3>

                <p className="relative z-10 mt-4 text-[9px] leading-[1.4] text-[#898589] sm:text-[10px]">More than 80% of our customers</p>

                <Link href="#contact" className="group relative z-10 mt-4 inline-flex h-[38px] min-w-[105px] items-center justify-center overflow-hidden rounded-full bg-[#17242f] px-5 text-[10px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_9px_18px_rgba(23,36,47,0.15)] sm:h-[40px] sm:min-w-[112px] sm:text-[11px]">
                    <span className="absolute inset-0 translate-y-full bg-[#263947] transition-transform duration-300 group-hover:translate-y-0" />
                    <span className="relative z-10">Book now</span>
                </Link>
                </motion.div>
            </div>
            </motion.article>
          </div>
        </div>
      </Container>
    </section>
  );
}