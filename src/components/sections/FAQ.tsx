"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionBadge from "@/components/SectionBadge";
import { siteContent } from "@/data/content";

export default function FAQ() {
  const { faq } = siteContent;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-24 px-5 md:px-16 bg-surface-container-low">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <SectionBadge label={faq.badge} />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-[var(--font-sora)] text-3xl md:text-5xl font-bold text-on-surface"
          >
            {faq.title}
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faq.items.map((item, i) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface-container-lowest rounded-2xl border border-outline-variant overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-surface-container/50 transition-colors"
              >
                <h3 className="font-bold text-lg pr-4">{item.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <ChevronDown size={20} className="text-on-surface-variant" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { type: "spring", stiffness: 200, damping: 25 },
                      opacity: { duration: 0.2 },
                    }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-on-surface-variant">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
