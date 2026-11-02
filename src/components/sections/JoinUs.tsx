"use client";

import { motion } from "framer-motion";
import { Phone, Swords } from "lucide-react";
import { siteContent } from "@/data/content";

export default function JoinUs() {
  const { joinUs } = siteContent;

  return (
    <section className="py-24 px-5 md:px-16 max-w-[1280px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-on-background rounded-[40px] p-8 md:p-16 text-surface relative overflow-hidden"
      >
        {/* Decorative Orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full blur-[100px] opacity-30" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-20" />

        {/* Header */}
        <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-[var(--font-jetbrains)] text-xs font-semibold tracking-[0.1em] text-primary-container uppercase flex items-center justify-center gap-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary-container" />
            {joinUs.badge}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="font-[var(--font-sora)] text-3xl md:text-5xl font-bold leading-tight mb-6"
          >
            {joinUs.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-surface-variant text-lg"
          >
            {joinUs.subtitle}
          </motion.p>
        </div>

        {/* Coach Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10">
          {joinUs.coaches.map((coach, i) => (
            <motion.div
              key={coach.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(250,248,255,0.15)" }}
              className="glass rounded-3xl p-8 flex flex-col items-center text-center transition-colors"
            >
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(48,86,196,0.5)]">
                <Swords size={28} className="text-white" />
              </div>
              <h3 className="font-bold text-2xl mb-1 text-white">
                {coach.name}
              </h3>
              <p className="text-primary-container font-[var(--font-jetbrains)] text-xs mb-6 uppercase tracking-wider">
                {coach.role}
              </p>
              <a
                href={`tel:+91${coach.phone}`}
                className="flex items-center gap-3 bg-white text-on-background px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform"
              >
                <Phone size={18} className="text-secondary" />
                {coach.phoneDisplay}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Instagram */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center relative z-10"
        >
          <a
            className="inline-flex items-center gap-2 text-surface hover:text-primary-container transition-colors font-bold text-lg border-b border-dashed border-surface/50 pb-1 hover:border-primary-container"
            href={joinUs.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={joinUs.instagram.iconSrc}
              alt="Instagram"
              className="w-6 h-6 invert"
            />
            Follow us {joinUs.instagram.handle}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
