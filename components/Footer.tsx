const footerLinks = [
  { label: "Architecture", href: "#" },
  { label: "Source", href: "#" },
  { label: "Connect", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest py-stack-lg border-t border-outline-variant/5">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-gutter gap-stack-md text-center md:text-left">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-sm">
            terminal
          </span>
          <span className="font-label-caps text-label-caps tracking-widest text-primary">
            JIAHAO WU
          </span>
        </div>

        <p className="font-body-md text-body-md text-on-surface-variant">
          &copy; 2026 Jiahao Wu. Engineered with precision.
        </p>

        <div className="flex flex-wrap justify-center md:justify-end gap-stack-md">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-md text-body-md"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
