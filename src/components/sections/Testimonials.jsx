"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Container from "@/components/shared/Container";

const testimonials = [
  {
    name: "Sophia Maria",
    role: "Model",
    image: "/images/testimonial-sophia.png",
    text: '"After my first consultation with Dr. Williams, I knew I was in good hands. His expertise and approachable manner made me feel comfortable and informed. The results have been outstanding, and I couldn\'t be happier."',
  },
  {
    name: "Mikael Smith",
    role: "UI Designer",
    image: "/images/testimonial-mikael.png",
    text: '"Dr. Smith\'s consultation was truly enlightening. She took the time to listen to all my concerns and provided a comprehensive plan tailored to my needs. I feel more confident about my health than ever before. Highly recommend!"',
  },
  {
    name: "Amanda Lawre",
    role: "Single Mom",
    image: "/images/testimonial-amanda.png",
    text: "",
  },
  {
    name: "Emma Lestari",
    role: "Housewife",
    image: "/images/testimonial-emma.png",
    text: '"I had an amazing experience with Dr. Johnson. The treatment I received exceeded my expectations. The entire process was smooth, and I felt well cared for from start to finish. Thank you for your excellent service!"',
  },
  {
    name: "John Danuel",
    role: "Business Man",
    image: "/images/testimonial-john.png",
    text: '"I was very impressed with Dr. Davis\'s knowledge and dedication. The personalized care I received was exceptional. I noticed significant improvements in my condition, and I am grateful for his guidance. Excellent experience overall!"',
  },
];

const centerTestimonials = [testimonials[0], testimonials[1]];
const rightTestimonials = [testimonials[2], testimonials[3], testimonials[4]];

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[15px] w-[15px] fill-[#f3a14b] sm:h-4 sm:w-4">
      <path d="M12 2.7l2.74 5.55 6.13.89-4.44 4.32 1.05 6.1L12 16.68l-5.48 2.88 1.05-6.1-4.44-4.32 6.13-.89L12 2.7z" />
    </svg>
  );
}

function Person({ testimonial }) {
  return (
    <div className="flex items-center gap-4">
      <div className="relative h-[56px] w-[56px] shrink-0 overflow-hidden rounded-full bg-[#f1f1f1] sm:h-[62px] sm:w-[62px]">
        <Image src={testimonial.image} alt={testimonial.name} fill sizes="62px" className="object-cover" />
      </div>

      <div>
        <h3 className="text-[20px] font-normal leading-none tracking-[-0.7px] text-[#17191c] sm:text-[23px]">{testimonial.name}</h3>
        <p className="mt-2 text-[13px] text-[#8a8a8a] sm:text-[15px]">{testimonial.role}</p>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial, compact = false, mobile = false }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={`group rounded-[28px] border border-[#e9e9e9] bg-white p-6 shadow-[0_10px_30px_rgba(20,25,35,0.025)] sm:p-7 lg:p-8 ${
        mobile ? "min-h-[300px]" : compact ? "min-h-[135px]" : "min-h-[340px]"
      }`}
    >
      <div className={`flex h-full flex-col ${testimonial.text ? "justify-between" : "justify-center"}`}>
        {testimonial.text && (
          <p className="text-[15px] leading-[1.38] tracking-[-0.25px] text-[#242629] sm:text-[16px] lg:text-[17px]">
            {testimonial.text}
          </p>
        )}

        <div className={testimonial.text ? "mt-8" : ""}>
          <Person testimonial={testimonial} />
        </div>
      </div>
    </motion.article>
  );
}

function AutoColumn({ testimonials, duration, reverse = false, compactFirst = false }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative h-[700px] overflow-hidden">
      <motion.div
        animate={
          reduceMotion
            ? { y: 0 }
            : reverse
              ? { y: ["-50%", "0%"] }
              : { y: ["0%", "-50%"] }
        }
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        className="flex flex-col"
      >
        {[0, 1].map((duplicate) => (
          <div key={duplicate} aria-hidden={duplicate === 1 ? "true" : undefined} className="flex flex-col gap-3 pb-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${duplicate}-${testimonial.name}`}
                testimonial={testimonial}
                compact={compactFirst && index === 0}
              />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  /* Mobile Auto Slider */
  useEffect(() => {
    if (isPaused || reduceMotion) return;

    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % testimonials.length);
    }, 4200);

    return () => clearInterval(interval);
  }, [isPaused, reduceMotion]);

  return (
    <section id="testimonials" className="bg-[#fbfaf9] py-0">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[32px] bg-white px-5 sm:px-8 lg:px-[70px]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.78fr_0.78fr] lg:gap-3">
            {/* Testimonial Introduction */}
            <div className="flex flex-col justify-center py-10 sm:py-12 lg:min-h-[700px] lg:py-0 lg:pr-14">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-[#fbfaf9] px-3 py-2 sm:px-4">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} />
                    ))}
                  </div>

                  <span className="text-[12px] text-[#44474b] sm:text-[14px]">
                    Reviews of more than 130k consumers
                  </span>
                </div>

                <h2 className="mt-9 max-w-[450px] text-[48px] font-normal leading-[0.98] tracking-[-3px] text-[#111315] sm:text-[58px] lg:text-[64px]">
                  Customer
                  <br />
                  testimonials
                </h2>

                <p className="mt-6 max-w-[410px] text-[14px] leading-[1.45] text-[#8a8a8a] sm:text-[16px]">
                  Discover the experiences of those who have trusted us with their health and well-being. Read testimonials from our satisfied patients
                </p>
              </motion.div>
            </div>

            {/* Desktop Auto Sliding Columns */}
            <div className="hidden overflow-hidden lg:block">
              <AutoColumn testimonials={centerTestimonials} duration={23} />
            </div>

            <div className="hidden overflow-hidden lg:block">
              <AutoColumn testimonials={rightTestimonials} duration={29} reverse compactFirst />
            </div>

            {/* Mobile Testimonial Slider */}
            <div className="pb-10 lg:hidden" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
              <div className="relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, x: 55, scale: 0.98 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -55, scale: 0.98 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <TestimonialCard testimonial={testimonials[activeSlide]} mobile />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slider Controls */}
              <div className="mt-6 flex items-center justify-center gap-2">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.name}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    aria-label={`View testimonial from ${testimonial.name}`}
                    aria-current={activeSlide === index ? "true" : undefined}
                    className={`h-[6px] rounded-full transition-all duration-500 ${
                      activeSlide === index
                        ? "w-9 bg-[#17242f]"
                        : "w-2.5 bg-[#d7d7d7] hover:bg-[#bdbdbd]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}