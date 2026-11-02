"use client";

import { motion } from "framer-motion";
import { Phone, Swords } from "lucide-react";
import Link from "next/link";
import SubPageHero from "@/components/SubPageHero";
import { siteContent } from "@/data/content";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function CoachPage() {
  const { coachPage } = siteContent;

  return (
    <>
      <SubPageHero
        badge={coachPage.hero.badge}
        title={coachPage.hero.title}
        subtitle={coachPage.hero.subtitle}
      />

      {/* Coach Profiles */}
      <section className="py-24 px-5 md:px-16 max-w-[1280px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {coachPage.coaches.map((coach) => (
            <motion.div
              key={coach.name}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-surface-container-lowest rounded-3xl p-8 md:p-10 border border-outline-variant shadow-sm"
            >
              {/* Avatar */}
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(48,86,196,0.3)]">
                  <Swords size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="font-[var(--font-sora)] text-2xl font-bold text-on-surface">
                    {coach.name}
                  </h3>
                  <p className="text-secondary font-[var(--font-jetbrains)] text-xs uppercase tracking-wider">
                    {coach.role}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                {coach.bio}
              </p>

              {/* Specialties */}
              <div className="mb-8">
                <h4 className="font-bold text-sm text-on-surface mb-3 uppercase tracking-wider">
                  Specialties
                </h4>
                <div className="flex flex-wrap gap-2">
                  {coach.specialties.map((spec) => (
                    <motion.span
                      key={spec}
                      whileHover={{ scale: 1.05 }}
                      className="bg-surface-container px-3 py-1.5 rounded-full text-sm text-on-surface border border-outline-variant"
                    >
                      {spec}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <a
                href={`tel:+91${coach.phone}`}
                className="inline-flex items-center gap-3 bg-secondary text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform"
              >
                <Phone size={18} />
                Call {coach.name.split(" ")[0]}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Coaching Philosophy */}
      <section className="py-24 px-5 md:px-16 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-[var(--font-sora)] text-3xl md:text-5xl font-bold text-on-surface mb-6"
            >
              {coachPage.philosophy.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-on-surface-variant text-lg"
            >
              {coachPage.philosophy.description}
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {coachPage.philosophy.pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant shadow-sm text-center"
              >
                <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mx-auto mb-6 font-[var(--font-sora)] text-xl font-bold">
                  {i + 1}
                </div>
                <h3 className="font-bold text-xl mb-3">{pillar.title}</h3>
                <p className="text-on-surface-variant">{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-5 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-[var(--font-sora)] text-3xl md:text-4xl font-bold text-on-surface mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-on-surface-variant text-lg mb-8">
            Book a private or group session with our expert coaches and take your game to the next level.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-container text-on-primary-container font-bold px-8 py-4 rounded-full text-lg neon-glow hover:scale-105 transition-transform"
          >
            Book a Coaching Session
          </Link>
        </motion.div>
      </section>
    </>
  );
}
