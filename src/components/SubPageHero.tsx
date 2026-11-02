"use client";

import { motion } from "framer-motion";
import SectionBadge from "@/components/SectionBadge";

interface SubPageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
}

export default function SubPageHero({ badge, title, subtitle }: SubPageHeroProps) {
  return (
    <section className="relative bg-secondary overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Court Lines */}
      <div className="absolute inset-0 court-lines opacity-50" />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-secondary" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-16 text-center">
        <SectionBadge label={badge} variant="light" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-[var(--font-sora)] text-4xl md:text-6xl font-bold text-white mb-6"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
