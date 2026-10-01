"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Container from "@/components/shared/Container";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Care Services", href: "#services" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  /* Navigation Events */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* Mobile Scroll Lock */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header className="relative z-50 bg-[#fbfaf9]">
      <Container>
        <motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="relative z-50 flex h-[74px] items-center justify-between">
          {/* Brand */}
          <Link href="#home" onClick={handleNavClick} aria-label="Docthea home" className="group inline-flex items-center">
            <span className="text-[23px] font-semibold tracking-[-0.8px] text-[#121820] transition-transform duration-300 group-hover:-translate-y-0.5 sm:text-[24px]">Docthea</span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-[42px] md:flex">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="group relative text-[15px] font-normal text-[#171b20] transition-colors duration-300 hover:text-[#52616f]">
                {link.label}
                <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-[#17212b] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="#contact" className="group inline-flex h-[55px] min-w-[173px] items-center justify-center overflow-hidden rounded-full bg-[#17222d] px-7 text-[15px] font-medium text-white shadow-[0_8px_24px_rgba(23,34,45,0.08)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#223342] hover:shadow-[0_14px_30px_rgba(23,34,45,0.18)]">
              <span className="transition-transform duration-300 group-hover:scale-[1.03]">Consult Now</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button type="button" onClick={() => setIsOpen((prev) => !prev)} aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} className="relative flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#17222d] shadow-[0_8px_20px_rgba(23,34,45,0.12)] transition-transform duration-300 active:scale-95 md:hidden">
            <span className="relative block h-[14px] w-[20px]">
              <motion.span animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }} className="absolute left-0 top-0 h-[1.5px] w-5 rounded-full bg-white" />
              <motion.span animate={isOpen ? { opacity: 0, x: 6 } : { opacity: 1, x: 0 }} transition={{ duration: 0.2 }} className="absolute left-0 top-[6px] h-[1.5px] w-[14px] rounded-full bg-white" />
              <motion.span animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }} className="absolute bottom-0 left-0 h-[1.5px] w-5 rounded-full bg-white" />
            </span>
          </button>
        </motion.div>
      </Container>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button type="button" aria-label="Close navigation menu" onClick={() => setIsOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 top-[74px] z-30 bg-[#101820]/20 backdrop-blur-[4px] md:hidden" />

            <motion.div initial={{ opacity: 0, y: -22 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="absolute left-0 right-0 top-[74px] z-40 overflow-hidden rounded-b-[30px] border-t border-[#17222d]/[0.05] bg-[#fbfaf9] shadow-[0_24px_55px_rgba(23,34,45,0.12)] md:hidden">
              <Container className="py-5">
                {/* Mobile Links */}
                <nav aria-label="Mobile navigation" className="border-t border-[#17222d]/10">
                  {navLinks.map((link, index) => (
                    <motion.div key={link.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.06 + index * 0.06 }}>
                      <Link href={link.href} onClick={handleNavClick} className="group flex min-h-[68px] items-center justify-between border-b border-[#17222d]/10 py-4 text-[#17212b]">
                        <div className="flex items-center gap-4">
                          <span className="text-[11px] font-medium text-[#17222d]/40">0{index + 1}</span>
                          <span className="text-[18px] font-medium tracking-[-0.35px] transition-transform duration-300 group-hover:translate-x-1">{link.label}</span>
                        </div>

                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef2f4] text-[#17222d] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-[#17222d] group-hover:text-white">
                          <ArrowUpRight size={16} strokeWidth={1.8} />
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.27 }} className="pb-2 pt-5">
                  <Link href="#contact" onClick={handleNavClick} className="group relative flex h-[58px] w-full items-center justify-center overflow-hidden rounded-full bg-[#17222d] text-[16px] font-semibold text-white shadow-[0_10px_24px_rgba(23,34,45,0.14)] transition-transform duration-300 active:scale-[0.98]">
                    <span className="absolute inset-0 translate-y-full bg-[#263947] transition-transform duration-300 group-hover:translate-y-0" />
                    <span className="relative z-10 flex items-center gap-2">Consult Now <ArrowUpRight size={17} strokeWidth={1.8} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
                  </Link>
                </motion.div>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}