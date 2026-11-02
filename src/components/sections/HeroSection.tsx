"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { siteContent } from "@/data/content";

export default function HeroSection() {
  const { hero } = siteContent;

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-secondary">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="bg-cover bg-center bg-no-repeat w-full h-full mix-blend-overlay opacity-70"
          style={{ backgroundImage: `url('${hero.bgImage}')` }}
          role="img"
          aria-label={hero.bgAlt}
        />
        <div className="absolute inset-0 court-lines z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-secondary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 md:px-16 flex flex-col items-start justify-center h-full pt-32 md:pt-0 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass p-8 rounded-xl max-w-2xl shadow-lg mt-20"
        >
          {/* Badge */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="font-[var(--font-jetbrains)] text-xs font-semibold tracking-[0.1em] text-primary-container mb-4 uppercase"
          >
            {hero.badge}
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-[var(--font-sora)] text-4xl md:text-6xl lg:text-[72px] font-bold leading-tight text-white mb-6"
          >
            {hero.heading.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </motion.h1>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex items-center gap-2 text-white/90 text-lg"
          >
            <span className="w-3 h-3 rounded-full bg-primary-container location-pulse" />
            <span>{hero.location}</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href={hero.ctaPrimary.href}
              className="bg-primary-container text-on-primary-container font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform duration-200 shadow-lg neon-glow"
            >
              {hero.ctaPrimary.label}
            </Link>
            <a
              href={hero.ctaSecondary.href}
              className="bg-white/20 text-white border border-white/40 font-bold px-6 py-3 rounded-full hover:bg-white/30 transition-colors duration-200 flex items-center gap-2"
            >
              {hero.ctaSecondary.label}
              <ArrowDown size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
