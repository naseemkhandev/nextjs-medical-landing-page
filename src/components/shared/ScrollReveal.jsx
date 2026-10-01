"use client";

import { motion } from "motion/react";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  y = 30,
  duration = 0.7,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}