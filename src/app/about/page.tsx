"use client";

import { motion } from "framer-motion";
import { Heart, Users, TrendingUp, Shield } from "lucide-react";
import SubPageHero from "@/components/SubPageHero";
import Testimonials from "@/components/sections/Testimonials";
import { siteContent } from "@/data/content";

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart size={28} />,
  Users: <Users size={28} />,
  TrendingUp: <TrendingUp size={28} />,
  Shield: <Shield size={28} />,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function AboutPage() {
  const { aboutPage } = siteContent;

  return (
    <>
      <SubPageHero
        badge={aboutPage.hero.badge}
        title={aboutPage.hero.title}
        subtitle={aboutPage.hero.subtitle}
      />

      {/* Mission */}
      <section className="py-24 px-5 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-[var(--font-sora)] text-3xl md:text-5xl font-bold text-on-surface mb-6">
            {aboutPage.mission.title}
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            {aboutPage.mission.description}
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-16 px-5 md:px-16 bg-secondary">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {aboutPage.stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={cardVariants}
                className="text-center"
              >
                <p className="font-[var(--font-sora)] text-4xl md:text-5xl font-extrabold text-primary-container mb-2">
                  {stat.value}
                </p>
                <p className="text-white/80 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-5 md:px-16 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[var(--font-sora)] text-3xl md:text-5xl font-bold text-on-surface text-center mb-16"
          >
            Our Values
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {aboutPage.values.map((value) => (
              <motion.div
                key={value.title}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant shadow-sm flex gap-6"
              >
                <div className="w-14 h-14 shrink-0 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
                  {iconMap[value.icon]}
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                  <p className="text-on-surface-variant">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reuse Testimonials */}
      <Testimonials />
    </>
  );
}
