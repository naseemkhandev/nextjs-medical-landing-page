"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Container from "@/components/shared/Container";

const benefits = [
  {
    number: "01",
    title: "Consultation anywhere",
    description: "You can consult more easily and enjoy",
    image: "/images/benefit-consultation.png",
    alt: "Doctor providing an online consultation",
    featured: false,
  },
  {
    number: "02",
    title: "Professional doctors",
    description: "Meet with various professional doctors",
    image: "/images/benefit-doctors.png",
    alt: "Professional medical doctors",
    featured: true,
  },
  {
    number: "03",
    title: "Safe medicine",
    description: "Medicine prescribed by a doctor are very safe",
    image: "/images/benefit-medicine.png",
    alt: "Safe prescribed medicine",
    featured: false,
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-[#fbfaf9] pb-25 sm:pb-32.5 lg:pb-41.25">
      <Container>
        {/* Benefits Heading */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <motion.h2 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }} className="max-w-[410px] text-[42px] font-normal leading-[1.08] tracking-[-2.2px] text-[#111315] sm:text-[50px] lg:text-[56px] lg:tracking-[-3px]">
            What benefits
            <br />
            do you get?
          </motion.h2>

          <motion.p initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }} className="max-w-[395px] text-[15px] leading-[1.35] text-[#7f7f7f] sm:text-[17px] lg:justify-self-end lg:pb-2">
            Here are three benefits that you can get with Docthea
          </motion.p>
        </div>

        {/* Benefits List */}
        <div className="mt-[85px] flex flex-col gap-3 sm:mt-[100px] lg:mt-[120px] lg:gap-4">
          {benefits.map((benefit, index) => (
            <motion.article key={benefit.number} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -4 }} className={`group relative overflow-hidden rounded-[28px] px-5 py-6 transition-shadow duration-300 sm:px-7 sm:py-7 lg:min-h-[165px] lg:px-[56px] lg:py-[28px] ${benefit.featured ? "bg-[linear-gradient(105deg,#e7eeff_0%,#f0e9ee_58%,#f8d6cf_100%)] shadow-[0_15px_35px_rgba(65,72,100,0.04)]" : "bg-transparent"}`}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-[55px_1fr] lg:grid-cols-[65px_1.4fr_1fr_210px] lg:items-center lg:gap-8">
                {/* Benefit Number */}
                <span className="text-[18px] font-normal tracking-[-0.5px] text-[#202226] sm:text-[19px] lg:text-[20px]">{benefit.number}</span>

                {/* Benefit Title */}
                <h3 className="text-[27px] font-normal leading-[1.08] tracking-[-1.2px] text-[#15171a] sm:text-[30px] lg:text-[31px]">{benefit.title}</h3>

                {/* Benefit Description */}
                <p className="max-w-[230px] text-[15px] leading-[1.2] tracking-[-0.2px] text-[#27292c] sm:text-[16px] lg:text-[17px]">{benefit.description}</p>

                {/* Benefit Visual */}
                <div className="relative h-[145px] w-full overflow-hidden rounded-[22px] bg-[#ececec] sm:col-start-2 sm:h-[160px] lg:col-start-auto lg:h-[112px] lg:w-[210px] lg:justify-self-end">
                  <Image src={benefit.image} alt={benefit.alt} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 70vw, 210px" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}