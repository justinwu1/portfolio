"use client";

import dynamic from "next/dynamic";

const ParticlesBackground = dynamic(() => import("./ParticlesBackground"), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 overflow-hidden"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-black/65" />

      {/* Constellation dot pattern */}
      <div className="absolute inset-0 z-0 constellation-bg opacity-40" />

      {/* Particles layer */}
      <ParticlesBackground />

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter relative z-10 text-center">
        <h2 className="font-label-caps text-label-caps text-secondary tracking-[0.3em] mb-stack-md">
          ENGINEERING PRECISION
        </h2>

        <h1 className="font-display-xl text-[2.75rem] sm:text-display-xl md:text-[6rem] mb-stack-md text-on-surface leading-none">
          Jiahao Wu
        </h1>

        <p className="font-headline-md text-[1.25rem] sm:text-headline-md text-on-surface-variant mb-stack-md max-w-2xl mx-auto">
          Software Engineer &amp; Fullstack Developer
        </p>

        <p className="font-body-lg text-body-lg text-outline mb-stack-lg max-w-xl mx-auto">
          Building AI-powered products at the intersection of engineering and
          finance
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-stack-md mb-stack-lg">
          <a
            href="#projects"
            className="w-full sm:w-auto px-10 py-4 bg-primary text-on-primary font-label-caps text-label-caps text-center hover:tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(242,202,80,0.25)]"
          >
            VIEW MY WORK
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-10 py-4 border border-outline text-on-surface font-label-caps text-label-caps text-center hover:border-primary hover:text-primary transition-all duration-300"
          >
            CONTACT ME
          </a>
        </div>

        {/* Social links */}
        <div className="flex justify-center items-center gap-stack-lg">
          <a
            href="https://www.linkedin.com/in/jiahao-wu820/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-outline hover:text-primary transition-colors font-label-caps text-label-caps"
          >
            <span className="material-symbols-outlined text-[20px]">work</span>
            LinkedIn
          </a>
          <a
            href="https://github.com/justinwu1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-outline hover:text-primary transition-colors font-label-caps text-label-caps"
          >
            <span className="material-symbols-outlined text-[20px]">code</span>
            GitHub
          </a>
        </div>
      </div>

      {/* Soft center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-secondary/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none z-[2]" />
    </section>
  );
}
