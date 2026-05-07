"use client";

import { useState, useEffect, useRef } from "react";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

type Status = "idle" | "loading" | "success" | "error";

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Focus first input when modal opens; restore scroll lock
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstInputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const reset = () => {
    setName(""); setEmail(""); setMessage(""); setStatus("idle");
  };

  const handleClose = () => { reset(); onClose(); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-[#111111] border border-[#2a2a2a] text-on-surface text-body-md px-4 py-3 rounded focus:outline-none focus:border-primary transition-colors placeholder:text-outline";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Contact form"
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Card */}
      <div
        className={`relative w-full max-w-lg bg-[#1a1a1a] border border-outline-variant/20 rounded-xl shadow-2xl p-8 transition-all duration-300 ${
          open ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-1 text-outline hover:text-on-surface transition-colors"
        >
          <span className="material-symbols-outlined text-[22px]">close</span>
        </button>

        <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
          Send a Message
        </h3>
        <p className="font-body-md text-body-md text-outline mb-stack-lg">
          I&apos;ll get back to you as soon as possible.
        </p>

        {status === "success" ? (
          <div className="py-10 text-center">
            <span className="material-symbols-outlined text-primary text-5xl mb-4 block">
              check_circle
            </span>
            <p className="font-headline-md text-[1.25rem] text-on-surface mb-2">
              Message sent!
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              I&apos;ll get back to you soon.
            </p>
            <button
              onClick={handleClose}
              className="mt-stack-lg px-8 py-3 border border-outline-variant text-on-surface-variant font-label-caps text-label-caps hover:border-primary hover:text-primary transition-all"
            >
              CLOSE
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <label
                htmlFor="contact-name"
                className="font-label-caps text-label-caps text-on-surface-variant block mb-2"
              >
                Name
              </label>
              <input
                id="contact-name"
                ref={firstInputRef}
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="font-label-caps text-label-caps text-on-surface-variant block mb-2"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="font-label-caps text-label-caps text-on-surface-variant block mb-2"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project or opportunity..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === "error" && (
              <p className="font-body-md text-body-md text-error">
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 bg-primary text-on-primary font-label-caps text-label-caps tracking-widest hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {status === "loading" ? "SENDING…" : "SEND MESSAGE"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
