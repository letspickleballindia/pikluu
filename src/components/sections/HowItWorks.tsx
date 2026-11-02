"use client";

import { motion } from "framer-motion";
import SectionBadge from "@/components/SectionBadge";
import { siteContent } from "@/data/content";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function HowItWorks() {
  const { howItWorks } = siteContent;

  return (
    <section className="py-24 px-5 md:px-16 max-w-[1280px] mx-auto">
      <div className="text-center mb-16">
        <SectionBadge label={howItWorks.badge} />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-[var(--font-sora)] text-3xl md:text-5xl font-bold text-on-surface"
        >
          {howItWorks.title}
        </motion.h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
      >
        {/* Connecting Line */}
        <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-outline-variant z-0" />

        {howItWorks.steps.map((step) => (
          <motion.div
            key={step.number}
            variants={stepVariants}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 bg-surface-container-lowest rounded-full border-4 border-surface shadow-lg flex items-center justify-center mb-6">
              <span className="font-[var(--font-sora)] text-3xl text-secondary font-extrabold">
                {step.number}
              </span>
            </div>
            <h3 className="font-bold text-xl mb-3">{step.title}</h3>
            <p className="text-on-surface-variant">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
