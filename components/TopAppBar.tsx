"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function TopAppBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/10">
      <nav className="max-w-[1200px] mx-auto flex justify-between items-center px-4 sm:px-gutter py-4">
        {/* Logo */}
        <div className="flex items-center gap-stack-sm">
          <span className="material-symbols-outlined text-primary">terminal</span>
          <span className="font-headline-md text-[1.25rem] sm:text-headline-md tracking-tight text-on-surface">
            Jiahao Wu
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-gutter">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant font-body-md hover:text-on-surface hover:tracking-widest transition-all duration-300 first:text-primary first:font-bold first:border-b-2 first:border-primary first:pb-1"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:block px-6 py-2 border border-primary text-primary font-label-caps text-label-caps hover:bg-primary hover:text-on-primary transition-all active:scale-95 duration-200"
        >
          Contact
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          className="md:hidden p-2 -mr-2 text-on-surface"
        >
          <span className="material-symbols-outlined text-[1.75rem]">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-surface-container border-b border-outline-variant/10`}
      >
        <div className="px-4 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="text-on-surface-variant font-body-md text-body-md py-3 border-b border-outline-variant/10 last:border-0 hover:text-on-surface transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={close}
            className="mt-4 py-3 border border-primary text-primary font-label-caps text-label-caps text-center hover:bg-primary hover:text-on-primary transition-all"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
