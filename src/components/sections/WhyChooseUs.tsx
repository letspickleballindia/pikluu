"use client";

import { motion } from "framer-motion";
import { Trophy, Landmark, Users } from "lucide-react";
import SectionBadge from "@/components/SectionBadge";
import { siteContent } from "@/data/content";

const iconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy size={28} />,
  Landmark: <Landmark size={28} />,
  Users: <Users size={28} />,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function WhyChooseUs() {
  const { whyChooseUs } = siteContent;

  return (
    <section className="py-24 px-5 md:px-16 bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <SectionBadge label={whyChooseUs.badge} />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-[var(--font-sora)] text-3xl md:text-5xl font-bold text-on-surface"
          >
            {whyChooseUs.title}
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {whyChooseUs.cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant text-center"
            >
              <div className="w-16 h-16 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mx-auto mb-6">
                {iconMap[card.icon]}
              </div>
              <h3 className="font-bold text-xl mb-3">{card.title}</h3>
              <p className="text-on-surface-variant">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
