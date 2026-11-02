"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionBadge from "@/components/SectionBadge";
import { siteContent } from "@/data/content";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Testimonials() {
  const { testimonials } = siteContent;

  return (
    <section className="py-24 px-5 md:px-16 max-w-[1280px] mx-auto">
      <div className="text-center mb-16">
        <SectionBadge label={testimonials.badge} />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-[var(--font-sora)] text-3xl md:text-5xl font-bold text-on-surface"
        >
          {testimonials.title}
        </motion.h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {testimonials.items.map((item) => (
          <motion.div
            key={item.author}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant shadow-sm"
          >
            {/* Stars */}
            <div className="flex text-primary-container mb-4">
              {Array.from({ length: item.rating }).map((_, i) => (
                <Star key={i} size={20} fill="#ccff00" strokeWidth={0} />
              ))}
            </div>
            <p className="text-on-surface-variant italic mb-6">
              &ldquo;{item.quote}&rdquo;
            </p>
            <p className="font-bold text-on-surface">- {item.author}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
