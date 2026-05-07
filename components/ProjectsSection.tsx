import Image from "next/image";

const distillTags = [
  "Next.js 16",
  "TypeScript",
  "Claude Sonnet 4",
  "Tailwind CSS",
  "Vercel",
  "Yahoo Finance API",
  "Polygon.io",
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-[128px] bg-surface">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
        {/* Header */}
        <div className="flex justify-between items-end mb-stack-lg">
          <div>
            <h2 className="font-label-caps text-label-caps text-secondary tracking-widest mb-stack-sm">
              CURATED WORK
            </h2>
            <h3 className="font-headline-lg text-[2rem] sm:text-headline-lg text-on-surface">
              Selected Projects
            </h3>
          </div>
          <div className="hidden md:block h-px flex-grow mx-stack-lg bg-outline-variant/20" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-stack-lg">
          {/* Featured: Distill */}
          <div className="group relative glass-panel p-5 sm:p-8 rounded-xl hover-lift border-t-2 border-t-transparent hover:border-t-primary transition-all">
            <div className="mb-stack-md overflow-hidden rounded-lg">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJkDoMgEeyOqUZo4HSL1PffI43EC5-yQXaI4oVjts9wY1mlffk0ND9YzrM7ufBD3xb28ZCAYSfThtYrQSLpSCDwE_tMCHUDxEfFlInE9_i_6pDTT2qOgJs5ozXiuT3vG2TkvBCZyCrn-8yddhRmyLJ7Ty2YHzycklFAVtW9TjZovGgLEc7R4hAS1wUF66FE_aEnnKkNY-am6xCRMImeOunYALkMzsyxZLy7xs5zLlt7JefLGJBKikqw-790XYsq1mO0WJ8F2lP8UzE"
                alt="Distill — AI-powered stock analysis dashboard"
                width={600}
                height={256}
                className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-stack-md">
              {distillTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 border border-outline-variant text-[0.65rem] text-outline uppercase tracking-wider rounded-full font-label-caps"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h4 className="font-headline-md text-headline-md text-on-surface mb-2">
              Distill
            </h4>
            <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg">
              An AI-powered stock analysis app that converts SEC filings and
              earnings data into plain-English investment analysis using Claude
              Sonnet 4, few-shot prompting, and a structured 9-question
              framework.
            </p>

            <div className="flex gap-stack-md">
              <a
                href="https://distill-justinwu1.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary font-label-caps text-label-caps hover:underline"
              >
                <span className="material-symbols-outlined text-[18px]">
                  open_in_new
                </span>
                LIVE DEMO
              </a>
              <a
                href="https://github.com/justinwu1/distill"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-on-surface-variant font-label-caps text-label-caps hover:text-on-surface transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">
                  code
                </span>
                GITHUB
              </a>
            </div>
          </div>

          {/* Placeholder */}
          <div className="group relative glass-panel p-5 sm:p-8 rounded-xl border border-dashed border-outline-variant/30 flex flex-col items-center justify-center text-center opacity-60 min-h-[240px]">
            <div className="w-16 h-16 rounded-full border border-outline-variant/30 flex items-center justify-center mb-stack-md">
              <span className="material-symbols-outlined text-outline-variant text-3xl">
                lock
              </span>
            </div>
            <h4 className="font-headline-md text-headline-md text-outline-variant mb-2">
              More coming soon
            </h4>
            <p className="font-body-md text-body-md text-outline-variant max-w-[280px]">
              Architecting the next breakthrough in distributed systems. Stay
              tuned.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
