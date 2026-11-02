"use client";

import { motion } from "framer-motion";
import {
  User,
  Users,
  Tag,
  Target,
  Award,
  Brain,
  CircleCheck,
  ArrowRight,
  CircleDot,
} from "lucide-react";
import SectionBadge from "@/components/SectionBadge";
import { siteContent } from "@/data/content";

const iconMap: Record<string, React.ReactNode> = {
  User: <User size={24} />,
  Users: <Users size={24} />,
  Tag: <Tag size={24} />,
  Target: <Target size={24} />,
  Award: <Award size={24} />,
  Brain: <Brain size={24} />,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function ServicesGrid() {
  const { services } = siteContent;

  return (
    <section className="py-24 px-5 md:px-16 max-w-[1280px] mx-auto" id="services">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <SectionBadge
            label={services.badge}
            icon={<CircleDot size={14} />}
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-[var(--font-sora)] text-3xl md:text-5xl font-bold text-on-surface"
          >
            {services.title}
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-right"
        >
          <p className="text-on-surface-variant max-w-sm ml-auto text-lg">
            {services.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.items.map((service) => (
          <motion.div
            key={service.title}
            variants={cardVariants}
            whileHover={{
              y: -8,
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`rounded-2xl p-8 border shadow-sm transition-all group relative overflow-hidden ${
              service.isHighlighted
                ? "bg-gradient-to-br from-surface-container-lowest to-surface-container border-outline-variant"
                : "bg-surface-container-lowest border-outline-variant hover:border-secondary"
            }`}
          >
            {/* Badge */}
            {service.badge && (
              <div className="absolute top-0 right-0 bg-primary-container text-on-primary-container text-[10px] font-bold px-3 py-1 rounded-bl-lg z-10">
                {service.badge}
              </div>
            )}

            {/* Icon */}
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-colors ${
                service.isHighlighted
                  ? "bg-primary-container text-on-primary-container"
                  : "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white"
              }`}
            >
              {iconMap[service.icon]}
            </div>

            <h3 className="font-bold text-xl mb-3">{service.title}</h3>
            <p className="text-on-surface-variant mb-6">{service.description}</p>

            {/* Features */}
            {service.features && (
              <ul className="space-y-2 text-sm text-on-surface-variant border-t border-outline-variant/30 pt-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CircleCheck size={14} className="text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            {/* Package Note */}
            {service.packageNote && (
              <div className="bg-surface-container p-4 rounded-xl mt-4 border border-outline-variant/50">
                <p className="font-bold text-secondary text-center">
                  {service.packageNote.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i === 0 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            )}

            {/* CTA */}
            {service.ctaLabel && (
              <div className="flex items-center gap-2 mt-auto pt-4 text-secondary font-bold text-sm cursor-pointer hover:underline">
                {service.ctaLabel} <ArrowRight size={14} />
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
