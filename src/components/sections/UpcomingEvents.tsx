"use client";

import { motion } from "framer-motion";
import SectionBadge from "@/components/SectionBadge";
import { siteContent } from "@/data/content";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function UpcomingEvents() {
  const { events } = siteContent;

  return (
    <section className="py-24 px-5 md:px-16 bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <SectionBadge label={events.badge} />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-[var(--font-sora)] text-3xl md:text-5xl font-bold text-on-surface"
          >
            {events.title}
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {events.items.map((event) => (
            <motion.div
              key={event.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold text-lg text-on-surface">
                  {event.title}
                </h3>
                <p className="text-on-surface-variant text-sm">
                  {event.date} | {event.venue}
                </p>
              </div>
              <button className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-secondary/90 transition-colors shrink-0">
                {event.ctaLabel}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
