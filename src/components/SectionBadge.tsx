"use client";

import { motion } from "framer-motion";

interface SectionBadgeProps {
  label: string;
  icon?: React.ReactNode;
  variant?: "default" | "light";
}

export default function SectionBadge({ label, icon, variant = "default" }: SectionBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`inline-flex items-center gap-2 font-[var(--font-jetbrains)] text-xs font-semibold tracking-[0.1em] uppercase px-3 py-1 rounded-full mb-4 ${
        variant === "light"
          ? "text-primary-container border border-white/20"
          : "text-secondary border border-secondary/20"
      }`}
    >
      {icon}
      {label}
    </motion.span>
  );
}
