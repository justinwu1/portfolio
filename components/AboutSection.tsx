const timeline = [
  {
    period: "2017 — 2021",
    title: "B.S. Computer Science",
    description: "Brooklyn College, City University of New York",
    isPrimary: false,
  },
  {
    period: "NOV 2021 — NOV 2022",
    title: "Software Engineer",
    description: "Fiserv — built enterprise financial software solutions.",
    isPrimary: false,
  },
  {
    period: "NOV 2022 — FEB 2026",
    title: "Front-End Engineer",
    description: "Couchbase — built enterprise product UIs and developer tooling.",
    isPrimary: true,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 lg:py-[128px] bg-surface-container-lowest border-y border-outline-variant/5"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter grid md:grid-cols-12 gap-12 md:gap-stack-lg">
        {/* Bio */}
        <div className="md:col-span-7">
          <h3 className="font-headline-lg text-[2rem] sm:text-headline-lg mb-stack-md text-on-surface">
            Behind the Architecture
          </h3>
          <div className="space-y-stack-md">
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              I&apos;m Jiahao Wu, a fullstack engineer with 4+ years of
              experience building enterprise products at Couchbase and Fiserv.
              I specialize in React/Next.js frontends and AI-powered
              applications. Currently open to new opportunities.
            </p>
            <a
              href="/resume.pdf"
              download="Jiahao Wu - Resume - 2026.pdf"
              className="mt-stack-md inline-flex items-center gap-2 px-8 py-3 bg-secondary-container text-on-secondary-container font-label-caps text-label-caps hover:bg-secondary hover:text-on-secondary transition-all"
            >
              <span className="material-symbols-outlined">download</span>
              DOWNLOAD CV
            </a>
          </div>
        </div>

        {/* Timeline */}
        <div className="md:col-span-5 relative pl-6 sm:pl-gutter">
          <div className="absolute left-0 top-0 bottom-0 w-px timeline-line" />
          <div className="space-y-stack-lg">
            {timeline.map((item) => (
              <div key={item.period} className="relative pl-5 sm:pl-6">
                <div
                  className={`absolute left-[-3px] top-2 w-[7px] h-[7px] rounded-full ${
                    item.isPrimary
                      ? "bg-primary shadow-[0_0_8px_rgba(242,202,80,0.8)]"
                      : "bg-secondary"
                  }`}
                />
                <span className="font-label-caps text-label-caps text-secondary block mb-1">
                  {item.period}
                </span>
                <h4 className="font-headline-md text-[1.1rem] sm:text-[1.25rem] text-on-surface mb-1">
                  {item.title}
                </h4>
                <p className="text-outline text-body-md">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
