"use client";

import { motion } from "motion/react";
import Container from "@/components/shared/Container";

export default function TreatmentIntro() {
  return (
    <section className="bg-[#fbfaf9]">
      <Container>
        <div className="flex items-start justify-center px-2 py-10 text-center sm:py-10 lg:py-10">
          {/* Treatment Introduction */}
          <motion.h2 initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="max-w-252.5 text-[31px] font-normal leading-[1.12] tracking-[-1.5px] sm:text-[39px] sm:tracking-[-2px] lg:text-[47px] lg:leading-[1.08] lg:tracking-[-2.8px]">
            <span className="text-[#111315]">Professional treatment services ready to meet your needs! </span>
            <span className="text-[#aaa9a9]">With a team of experienced experts, we offer high-quality treatments that are safe and convenient right in your home.</span>
          </motion.h2>
        </div>
      </Container>
    </section>
  );
}