"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    particlesJS: (id: string, config: Record<string, any>) => void;
    pJSDom: unknown[];
  }
}

const PARTICLES_CONFIG = {
  particles: {
    number: {
      value: 40,
      density: { enable: true, value_area: 800 },
    },
    color: { value: ["#a1cfcf", "#f2ca50", "#ffffff"] },
    shape: { type: "circle" },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: true, speed: 1.2, opacity_min: 0.2, sync: false },
    },
    size: {
      value: 3.5,
      random: true,
      anim: { enable: true, speed: 2, size_min: 1.5, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 160,
      color: "#a1cfcf",
      opacity: 0.35,
      width: 1.2,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: true, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      repulse: { distance: 120, duration: 0.4 },
      bubble: { distance: 200, size: 12, duration: 0.3, opacity: 1 },
      grab: { distance: 200, line_linked: { opacity: 0.8 } },
    },
  },
  retina_detect: true,
};

export default function ParticlesBackground() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    import("particles.js").then(() => {
      if (typeof window !== "undefined" && window.particlesJS) {
        window.particlesJS("particles-js", PARTICLES_CONFIG);
      }
    });

    return () => {
      // Destroy particles instance on unmount
      if (typeof window !== "undefined" && window.pJSDom?.length) {
        // @ts-expect-error - pJSDom internal API
        window.pJSDom.forEach((dom) => dom?.pJS?.fn?.vendors?.destroypJS?.());
        window.pJSDom = [];
      }
    };
  }, []);

  return (
    <div
      id="particles-js"
      className="absolute inset-0 z-[1]"
      aria-hidden="true"
    />
  );
}
