"use client";

import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { siteContent } from "@/data/content";

export default function Footer() {
  const { brand, footer } = siteContent;

  return (
    <footer className="bg-surface-container-lowest w-full border-t border-outline-variant mt-12">
      <div className="w-full px-5 md:px-16 py-16 max-w-[1280px] mx-auto flex flex-col gap-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-4 flex flex-col items-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={brand.logoFullBlueSrc}
              alt={`${brand.name} Logo`}
              className="h-16 w-auto mb-6"
            />
            <p className="text-on-surface-variant text-sm mb-6 max-w-xs">
              {brand.description}
            </p>
            <div className="flex gap-4">
              {footer.socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-secondary hover:text-white transition-colors"
                  aria-label={social.platform}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={social.iconSrc}
                    alt={social.platform}
                    className="w-5 h-5 opacity-70 hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-bold text-on-surface mb-4">{col.title}</h4>
                {"links" in col && col.links && (
                  <ul className="space-y-3 flex flex-col">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm hover:text-secondary transition-colors text-on-surface"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                {"address" in col && col.address && (
                  <address className="not-italic text-sm flex flex-col gap-2 text-on-surface">
                    {col.address.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                    {"mapUrl" in col && col.mapUrl && (
                      <a
                        className="text-secondary hover:underline mt-2 inline-flex items-center gap-1"
                        href={col.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin size={14} />
                        {col.mapLabel}
                      </a>
                    )}
                  </address>
                )}
                {"contacts" in col && col.contacts && (
                  <ul className="space-y-3 flex flex-col">
                    {col.contacts.map((contact) => (
                      <li key={contact.label}>
                        <a
                          className="text-sm hover:text-secondary transition-colors flex items-center gap-2 text-on-surface"
                          href={contact.href}
                        >
                          <Phone size={16} />
                          {contact.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center font-[var(--font-jetbrains)] text-[10px] text-on-surface-variant pt-8 border-t border-outline-variant">
          <p>{footer.legal.copyright}</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {footer.legal.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
