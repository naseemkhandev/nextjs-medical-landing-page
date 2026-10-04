"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Container from "@/components/shared/Container";

const reveal = { duration: 0.75, ease: [0.22, 1, 0.36, 1] };

export default function MedicalFeatures() {
  return (
    <section className="bg-[#fbfaf9] py-[55px] sm:py-[75px] lg:py-[110px]">
      <Container>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          {/* Left Feature Column */}
          <div className="flex flex-col gap-2">
            {/* Certified Doctors */}
            <motion.article initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={reveal} className="relative min-h-[470px] overflow-hidden rounded-[30px] bg-white p-7 sm:p-10 lg:min-h-[490px]">
              <div className="flex items-center gap-5 sm:gap-7">
                <span className="text-[68px] font-normal leading-none tracking-[-5px] text-black sm:text-[84px] lg:text-[92px]">99%</span>
                <span className="rounded-full border border-[#dddddd] px-5 py-2 text-[14px] text-[#8c8c8c] sm:px-6 sm:text-[16px]">Guaranteed</span>
              </div>

              <div className="mt-10 grid grid-cols-[145px_1fr] gap-7 sm:grid-cols-[185px_1fr] sm:gap-9 lg:mt-12 lg:grid-cols-[190px_1fr]">
                {/* Certified Service Visual */}
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="relative min-h-[265px] overflow-hidden rounded-t-[28px] sm:min-h-[300px]">
                  <Image src="/images/first-service-doctor.png" alt="Certified medical service" fill sizes="(max-width: 639px) 145px, 190px" className="object-cover object-center" />
                </motion.div>

                <div className="flex flex-col justify-center">
                  <h2 className="text-[30px] font-normal leading-[1.08] tracking-[-1.6px] text-[#121417] sm:text-[38px] lg:text-[40px]">Our doctors are certified</h2>
                  <p className="mt-5 max-w-[250px] text-[15px] leading-[1.35] text-[#858585] sm:text-[17px]">Don&apos;t worry, our doctorates are guaranteed with certificates and degrees.</p>
                </div>
              </div>
            </motion.article>

            {/* Fast Services */}
            <motion.article initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ ...reveal, delay: 0.08 }} className="relative min-h-[535px] overflow-hidden rounded-[30px] bg-white p-7 sm:p-9 lg:min-h-[555px]">
              <div className="relative z-20 max-w-[350px]">
                <h2 className="text-[33px] font-normal leading-[1.08] tracking-[-1.7px] text-[#111315] sm:text-[39px] lg:text-[42px]">Very fast and accurate services</h2>
                <p className="mt-6 max-w-[300px] text-[15px] leading-[1.4] text-[#878787] sm:text-[17px]">We are ready to serve you with pleasure and fast response!</p>

                <div className="mt-8 flex max-w-[285px] flex-col gap-3">
                  {[
                    ["90%", "Satisfying treatments"],
                    ["90%", "Happy customers"],
                    ["100%", "Fast response"],
                  ].map(([value, label], index) => (
                    <motion.div key={label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.14 + index * 0.08 }} className="flex h-[39px] items-center rounded-full border border-[#e5e5e5] px-5">
                      <span className="mr-2 text-[20px] tracking-[-0.8px] text-[#252525]">{value}</span>
                      <span className="text-[14px] text-[#8a8a8a] sm:text-[15px]">{label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div initial={{ opacity: 0, x: 45 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="absolute bottom-0 right-[-25px] h-[355px] w-[62%] sm:h-[405px] sm:w-[58%] lg:h-[430px]">
                <Image src="/images/fast-service-doctor.png" alt="Doctor holding a tablet" fill sizes="(max-width: 1023px) 55vw, 30vw" className="object-contain object-bottom" />
              </motion.div>
            </motion.article>

            {/* Benefits CTA */}
            <motion.article initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ ...reveal, delay: 0.12 }} className="relative flex min-h-[175px] flex-col items-center justify-center overflow-hidden rounded-[30px] bg-[linear-gradient(115deg,#e3ebff_0%,#f2e9ee_55%,#ffd1c6_100%)] px-6 py-8 text-center">
              <div className="pointer-events-none absolute -left-8 -top-14 h-[145px] w-[145px] rounded-full bg-white/20" />
              <div className="pointer-events-none absolute -bottom-16 right-10 h-[150px] w-[150px] rounded-full border border-white/20" />

              <h2 className="relative z-10 text-[30px] font-normal tracking-[-1.5px] text-[#1a1c20] sm:text-[36px]">Get all the benefits now</h2>

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
                <h2 className="max-w-[410px] text-[37px] font-normal leading-[1.08] tracking-[-2px] text-[#111315] sm:text-[43px] lg:text-[46px]">Connect with our doctors</h2>
                <p className="mt-5 max-w-[410px] text-[15px] leading-[1.45] text-[#848484] sm:text-[17px]">Connect with our professional doctors who are ready to help you manage your health with expertise and dedication.</p>
              </div>
            </motion.article>

            {/* Realtime Consultations */}
            <motion.article initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ ...reveal, delay: 0.14 }} className="relative min-h-[610px] overflow-hidden rounded-[30px] bg-white px-7 py-12 text-center sm:px-10">
              <h2 className="mx-auto max-w-[390px] text-[36px] font-normal leading-[1.08] tracking-[-1.8px] text-[#111315] sm:text-[42px] lg:text-[44px]">Realtime consultations</h2>
              <p className="mx-auto mt-6 max-w-[390px] text-[15px] leading-[1.4] text-[#858585] sm:text-[17px]">Connect with our professional doctors who are ready to help you.</p>

              {/* Schedule Card */}
              <motion.div animate={{ y: [0, -8, 0], rotate: [-4, -3, -4] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[55px] left-[8%] w-[55%] rounded-[24px] bg-[linear-gradient(135deg,#e9edff_0%,#dcdcff_100%)] p-5 text-left shadow-[0_15px_35px_rgba(92,99,160,0.08)] sm:left-[10%] sm:w-[52%]">
                <h3 className="text-[21px] font-normal leading-[1.05] tracking-[-0.8px] text-[#1e2330] sm:text-[24px]">Check schedule doctors</h3>

                <div className="mt-8 flex items-end justify-between gap-3">
                  <div>
                    <div className="relative mb-2 h-8 w-8 overflow-hidden rounded-full bg-white">
                      <Image src="/images/doctor-2.png" alt="Dr. Amira" fill sizes="32px" className="object-cover" />
                    </div>
                    <p className="text-[14px] font-semibold text-[#20242b] sm:text-[16px]">Dr. Amira</p>
                  </div>

                  <div className="pb-1 text-[9px] text-[#767a87] sm:text-[10px]">
                    <span>3 May 2024</span>
                    <span className="ml-3">8-11 AM</span>
                  </div>
                </div>
              </motion.div>

              {/* Booking Card */}
              <motion.div animate={{ y: [0, 8, 0], rotate: [3, 4, 3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[160px] right-[7%] z-10 w-[54%] rounded-[24px] bg-[linear-gradient(135deg,#e6edff_0%,#f4e7e8_58%,#ffd4ca_100%)] p-5 text-left shadow-[0_18px_40px_rgba(90,70,80,0.08)] sm:right-[8%] sm:w-[52%]">
                <h3 className="max-w-[190px] text-[21px] font-normal leading-[1.05] tracking-[-0.8px] text-[#171b21] sm:text-[24px]">Book your first consultation</h3>
                <p className="mt-5 text-[9px] text-[#8d8588] sm:text-[10px]">More than 80% of our customers</p>

                <Link href="#contact" className="mt-5 inline-flex h-[40px] min-w-[105px] items-center justify-center rounded-full bg-[#17242f] px-5 text-[11px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#263947]">Book now</Link>
              </motion.div>
            </motion.article>
          </div>
        </div>
      </Container>
    </section>
  );
}