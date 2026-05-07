"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

const socialLinks = [
  {
    label: "GITHUB",
    href: "https://github.com/justinwu1",
  },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/jiahao-wu820/",
  },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/justinwu1",
  },
];

export default function ContactSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <section
        id="contact"
        className="py-16 sm:py-24 lg:py-[128px] bg-surface constellation-bg relative"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter text-center relative z-10">
          <h2 className="font-label-caps text-label-caps text-secondary tracking-[0.4em] mb-stack-md">
            INITIATE CONNECTION
          </h2>
          <h3 className="font-headline-lg text-[2rem] sm:text-headline-lg md:text-[4rem] text-on-surface mb-stack-lg">
            Let&apos;s Connect
          </h3>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-xl mx-auto">
            Open to new opportunities and interesting projects. Reach out
            directly or connect on LinkedIn.
          </p>

          {/* Email CTA → opens modal */}
          <div className="inline-block glass-panel p-1 rounded-full mb-stack-lg max-w-full">
            <button
              onClick={() => setModalOpen(true)}
              className="block px-6 sm:px-12 py-4 bg-primary text-on-primary font-label-caps text-label-caps tracking-widest hover:brightness-110 transition-all cursor-pointer"
            >
              JUSTINWU820@GMAIL.COM
            </button>
          </div>

          <div className="flex justify-center flex-wrap gap-stack-lg sm:gap-gutter mt-stack-md">
            {socialLinks.map((link, i) => (
              <a
                key={`${link.label}-${i}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-primary transition-colors font-label-caps text-label-caps"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Decorative glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none" />
      </section>
    </>
  );
}
