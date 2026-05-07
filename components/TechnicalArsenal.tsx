type Category = {
  icon: string;
  label: string;
  tags: string[];
};

const categories: Category[] = [
  {
    icon: "responsive_layout",
    label: "Frontend",
    tags: ["React", "Next.js", "TypeScript", "JavaScript", "Svelte", "Tailwind CSS", "Figma"],
  },
  {
    icon: "database",
    label: "Backend",
    tags: ["Node.js", "C#", "ASP.NET", "Go", ".NET Core", "RabbitMQ", "Redis"],
  },
  {
    icon: "smart_toy",
    label: "AI & LLM",
    tags: ["Claude API", "Prompt Engineering", "Few-shot Prompting", "OpenAI API", "GitHub Copilot"],
  },
  {
    icon: "cloud_done",
    label: "DevOps & Tools",
    tags: ["Vercel", "CircleCI", "Jenkins", "Git", "Datadog", "Splunk"],
  },
  {
    icon: "storage",
    label: "Data & Testing",
    tags: ["PostgreSQL", "MongoDB", "Firebase", "Jest", "Cypress", "TDD"],
  },
];

export default function TechnicalArsenal() {
  return (
    <section className="py-16 sm:py-24 lg:py-[128px] bg-surface-container-low">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
        <h2 className="font-label-caps text-label-caps text-secondary text-center tracking-widest mb-stack-lg">
          TECHNICAL ARSENAL
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-stack-lg">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="p-5 sm:p-8 border border-outline-variant/10 rounded-lg bg-surface/50"
            >
              <div className="flex items-center gap-stack-sm mb-stack-md">
                <span className="material-symbols-outlined text-primary">
                  {cat.icon}
                </span>
                <h4 className="font-headline-md text-[1.25rem] text-on-surface">
                  {cat.label}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-surface-container-high text-on-surface-variant text-[0.75rem] font-label-caps rounded border border-outline-variant/20 hover:border-primary/40 hover:text-on-surface transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
