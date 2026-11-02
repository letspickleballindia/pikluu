"use client";

import { motion } from "framer-motion";
import { Ruler, Sun, ShieldCheck, Zap, CircleCheck } from "lucide-react";
import Link from "next/link";
import SubPageHero from "@/components/SubPageHero";
import VenueFeature from "@/components/sections/VenueFeature";
import { siteContent } from "@/data/content";

const iconMap: Record<string, React.ReactNode> = {
  Ruler: <Ruler size={28} />,
  Sun: <Sun size={28} />,
  ShieldCheck: <ShieldCheck size={28} />,
  Zap: <Zap size={28} />,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function CourtsPage() {
  const { courtsPage } = siteContent;

  return (
    <>
      <SubPageHero
        badge={courtsPage.hero.badge}
        title={courtsPage.hero.title}
        subtitle={courtsPage.hero.subtitle}
      />

      {/* Court Features */}
      <section className="py-24 px-5 md:px-16 max-w-[1280px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {courtsPage.features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant shadow-sm"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                {iconMap[feature.icon]}
              </div>
              <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
              <p className="text-on-surface-variant">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Amenities */}
      <section className="py-24 px-5 md:px-16 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[var(--font-sora)] text-3xl md:text-5xl font-bold text-on-surface text-center mb-16"
          >
            {courtsPage.amenities.title}
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {courtsPage.amenities.items.map((item) => (
              <motion.div
                key={item}
                variants={cardVariants}
                className="flex items-center gap-3 bg-surface-container-lowest p-5 rounded-xl border border-outline-variant"
              >
                <CircleCheck size={20} className="text-primary shrink-0" />
                <span className="text-on-surface font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Venue Section (reused) */}
      <VenueFeature />

      {/* CTA */}
      <section className="py-24 px-5 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-[var(--font-sora)] text-3xl md:text-4xl font-bold text-on-surface mb-4">
            {courtsPage.cta.title}
          </h2>
          <p className="text-on-surface-variant text-lg mb-8">
            {courtsPage.cta.subtitle}
          </p>
          <Link
            href={courtsPage.cta.buttonHref}
            className="inline-block bg-primary-container text-on-primary-container font-bold px-8 py-4 rounded-full text-lg neon-glow hover:scale-105 transition-transform"
          >
            {courtsPage.cta.buttonLabel}
          </Link>
        </motion.div>
      </section>
    </>
  );
}
