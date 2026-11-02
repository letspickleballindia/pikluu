"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import SectionBadge from "@/components/SectionBadge";
import { siteContent } from "@/data/content";

export default function VenueFeature() {
  const { venue } = siteContent;

  return (
    <section className="py-24 px-5 md:px-16 max-w-[1280px] mx-auto bg-surface-container-low rounded-[40px] my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center p-4 md:p-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-3xl overflow-hidden shadow-2xl relative h-[400px] md:h-[500px]"
        >
          <div
            className="bg-cover bg-center w-full h-full absolute inset-0"
            style={{ backgroundImage: `url('${venue.image}')` }}
            role="img"
            aria-label={venue.imageAlt}
          />
          {/* Floating Badge */}
          <div className="absolute bottom-6 left-6 glass-light p-4 rounded-xl shadow-lg flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container">
              <MapPin size={20} />
            </div>
            <div>
              <p className="font-bold text-sm text-on-surface">Home Court</p>
              <p className="text-xs text-on-surface-variant">Premium Surfaces</p>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="space-y-8"
        >
          <SectionBadge label={venue.badge} />
          <h2 className="font-[var(--font-sora)] text-3xl md:text-5xl font-bold text-on-surface leading-tight">
            {venue.title}
          </h2>
          <p className="text-on-surface-variant text-lg">{venue.description}</p>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant flex items-start gap-4">
            <MapPin size={28} className="text-secondary shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-lg text-on-surface">
                {venue.address.name}
              </h4>
              <p className="text-on-surface-variant text-sm mt-1">
                {venue.address.locality}
              </p>
              <a
                className="text-secondary text-sm font-bold mt-2 inline-flex items-center gap-1 hover:underline"
                href={venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
