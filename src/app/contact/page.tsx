"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, AtSign, Send } from "lucide-react";
import SubPageHero from "@/components/SubPageHero";
import FAQ from "@/components/sections/FAQ";
import { siteContent } from "@/data/content";

const iconMap: Record<string, React.ReactNode> = {
  MapPin: <MapPin size={24} />,
  Phone: <Phone size={24} />,
  Instagram: <AtSign size={24} />,
};

export default function ContactPage() {
  const { contactPage } = siteContent;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <SubPageHero
        badge={contactPage.hero.badge}
        title={contactPage.hero.title}
        subtitle={contactPage.hero.subtitle}
      />

      <section className="py-24 px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[var(--font-sora)] text-2xl md:text-3xl font-bold text-on-surface mb-8">
              {contactPage.form.title}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {contactPage.form.fields.map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-semibold text-on-surface mb-2"
                  >
                    {field.label}
                    {field.required && (
                      <span className="text-error ml-1">*</span>
                    )}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      rows={5}
                      className="w-full border border-outline-variant rounded-xl px-4 py-3 text-on-surface bg-surface-container-lowest focus:border-secondary focus:border-2 focus:outline-none transition-colors resize-none"
                    />
                  ) : (
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="w-full border border-outline-variant rounded-xl px-4 py-3 text-on-surface bg-surface-container-lowest focus:border-secondary focus:border-2 focus:outline-none transition-colors"
                    />
                  )}
                </div>
              ))}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-full font-bold text-lg transition-all ${
                  submitted
                    ? "bg-primary text-white"
                    : "bg-primary-container text-on-primary-container neon-glow"
                }`}
              >
                {submitted ? (
                  "Message Sent! ✓"
                ) : (
                  <>
                    <Send size={18} />
                    {contactPage.form.submitLabel}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="font-[var(--font-sora)] text-2xl md:text-3xl font-bold text-on-surface mb-8">
              {contactPage.directContact.title}
            </h2>
            {contactPage.directContact.items.map((item) => (
              <div
                key={item.title}
                className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm flex items-start gap-4"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                  {iconMap[item.icon]}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-on-surface">
                    {item.title}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline"
                    >
                      {item.detail}
                    </a>
                  ) : (
                    <p className="text-on-surface-variant">{item.detail}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="bg-surface-container rounded-2xl overflow-hidden border border-outline-variant h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={40} className="text-secondary mx-auto mb-3" />
                <p className="text-on-surface-variant font-medium">
                  R&K Thakur Complex, Kandivali East
                </p>
                <a
                  href={siteContent.venue.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary text-sm font-bold mt-2 inline-block hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reuse FAQ */}
      <FAQ />
    </>
  );
}
