"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteContent } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const { nav, brand } = siteContent;

  const navBg = scrolled
    ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-outline-variant/30"
    : isHome
    ? "bg-transparent"
    : "bg-secondary";

  const textColor = scrolled ? "text-on-surface" : "text-white";
  const logoText = scrolled ? "text-on-surface" : "text-white";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      >
        <div className="flex justify-between items-center w-full max-w-[1280px] mx-auto px-5 md:px-16 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={scrolled ? brand.logoBlueSrc : brand.logoSrc}
              alt={`${brand.name} Logo`}
              className="h-10 w-auto transition-all duration-300"
            />
            <span
              className={`font-[var(--font-sora)] text-xl md:text-3xl font-extrabold italic tracking-tight transition-colors ${logoText}`}
            >
              {brand.name}
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 items-center">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-colors rounded-lg px-3 py-2 ${textColor} ${
                  pathname === link.href
                    ? "!text-primary-container bg-white/10"
                    : "hover:text-primary-container hover:bg-white/10"
                } ${scrolled ? "hover:!text-secondary hover:!bg-surface-container-low" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href={nav.cta.href}
              className="hidden sm:block bg-primary-container text-on-primary-container font-[var(--font-jetbrains)] text-xs font-semibold tracking-[0.1em] uppercase px-4 py-2 rounded-full hover:scale-95 transition-transform duration-200 shadow-md neon-glow"
            >
              {nav.cta.label}
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${textColor}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-on-background/95 backdrop-blur-xl pt-20 px-6"
          >
            <div className="flex flex-col gap-2">
              {nav.links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className={`block text-2xl font-bold py-4 border-b border-white/10 transition-colors ${
                      pathname === link.href
                        ? "text-primary-container"
                        : "text-white hover:text-primary-container"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6"
              >
                <Link
                  href={nav.cta.href}
                  className="inline-block bg-primary-container text-on-primary-container font-bold px-8 py-4 rounded-full text-lg neon-glow"
                >
                  {nav.cta.label}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
