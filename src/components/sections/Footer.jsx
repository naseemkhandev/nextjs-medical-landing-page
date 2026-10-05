"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Container from "@/components/shared/Container";

const footerLinks = {
  docthea: [
    { label: "Services", href: "#services" },
    { label: "Doctors", href: "#doctors" },
    { label: "Locations", href: "#contact" },
    { label: "Updates", href: "#home" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  company: [
    { label: "Support", href: "#contact" },
    { label: "Affiliates", href: "#contact" },
  ],
  legal: [
    { label: "Terms", href: "#" },
    { label: "Acceptable Use", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
};

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-[18px] w-[18px]">
    <path d="M21 12C21 12 21 8.6 20.55 7.2C20.3 6.45 19.7 5.85 18.95 5.6C17.55 5.15 12 5.15 12 5.15C12 5.15 6.45 5.15 5.05 5.6C4.3 5.85 3.7 6.45 3.45 7.2C3 8.6 3 12 3 12C3 12 3 15.4 3.45 16.8C3.7 17.55 4.3 18.15 5.05 18.4C6.45 18.85 12 18.85 12 18.85C12 18.85 17.55 18.85 18.95 18.4C19.7 18.15 20.3 17.55 20.55 16.8C21 15.4 21 12 21 12Z" fill="currentColor" />
    <path d="M10.2 15.1V8.9L15.4 12L10.2 15.1Z" fill="white" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[18px] w-[18px]">
    <path d="M13.7 21V13.3H16.3L16.7 10.3H13.7V8.4C13.7 7.5 14 6.9 15.2 6.9H16.8V4.2C16.5 4.2 15.6 4.1 14.5 4.1C12.2 4.1 10.6 5.5 10.6 8.1V10.3H8V13.3H10.6V21H13.7Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-[18px] w-[18px]">
    <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="17.3" cy="6.8" r="1" fill="currentColor" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="overflow-hidden rounded-b-[34px] bg-[#fbfaf9]">
      <Container>
        <div className="relative grid grid-cols-2 gap-x-8 gap-y-10 pb-6 pt-[70px] sm:grid-cols-3 sm:pb-8 sm:pt-[85px] lg:min-h-[430px] lg:grid-cols-[190px_190px_220px_1fr] lg:gap-14 lg:py-[95px]">
          {/* Docthea Links */}
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
            <h3 className="mb-6 text-[15px] font-semibold text-[#111315]">Docthea</h3>

            <nav className="flex flex-col gap-5">
              {footerLinks.docthea.map((link) => (
                <Link key={link.label} href={link.href} className="w-fit text-[14px] text-[#34363a] transition-colors duration-300 hover:text-[#8a8a8a]">
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Company Links */}
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.06 }}>
            <h3 className="mb-6 text-[15px] font-semibold text-[#111315]">Company</h3>

            <nav className="flex flex-col gap-5">
              {footerLinks.company.map((link) => (
                <Link key={link.label} href={link.href} className="w-fit text-[14px] text-[#34363a] transition-colors duration-300 hover:text-[#8a8a8a]">
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Legal Links */}
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.12 }}>
            <h3 className="mb-6 text-[15px] font-semibold text-[#111315]">Legal</h3>

            <nav className="flex flex-col gap-5">
              {footerLinks.legal.map((link) => (
                <Link key={link.label} href={link.href} className="w-fit text-[14px] text-[#34363a] transition-colors duration-300 hover:text-[#8a8a8a]">
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Social & Brand */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.12 }} className="col-span-2 flex flex-col sm:col-span-3 lg:col-span-1 lg:items-end">
            <div>
              <h3 className="mb-6 text-[15px] font-semibold text-[#111315]">Get in touch</h3>

              <div className="flex items-center gap-4">
                <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#222] text-[#111315] transition-all duration-300 hover:-translate-y-1 hover:bg-[#17242f] hover:text-white">
                  <YoutubeIcon />
                </a>

                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#222] text-[#111315] transition-all duration-300 hover:-translate-y-1 hover:bg-[#17242f] hover:text-white">
                  <FacebookIcon />
                </a>

                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#222] text-[#111315] transition-all duration-300 hover:-translate-y-1 hover:bg-[#17242f] hover:text-white">
                  <InstagramIcon />
                </a>
              </div>
            </div>

            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }} className="mt-14 text-[70px] font-normal leading-none tracking-[-5px] text-black sm:text-[90px] lg:absolute lg:bottom-[44px] lg:right-0 lg:mt-0 lg:text-[118px] lg:tracking-[-8px]">
              Docthea
            </motion.h2>
          </motion.div>

          {/* Copyright */}
          <div className="col-span-2 border-t border-black/[0.07] pt-4 text-[12px] text-[#777] sm:col-span-3 sm:pt-5 lg:absolute lg:bottom-[28px] lg:left-0 lg:border-0 lg:pt-0 lg:text-[13px]">
            © {currentYear} Docthea. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}