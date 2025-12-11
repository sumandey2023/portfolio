import { GraduationCap, Briefcase, Bot, Star } from "lucide-react";

const timelineItems = [
  {
    year: "2022 - Present",
    title: "BCA 3rd Year",
    subtitle: "CCLMS, MAKAUT",
    description:
      "Pursuing Bachelor of Computer Applications with focus on web development, data structures, and software engineering.",
    icon: GraduationCap,
    color: "bg-primary",
  },
  {
    year: "2023 - Present",
    title: "Full-Stack Developer",
    subtitle: "Self-Learning & Projects",
    description:
      "Building real-world projects using MERN stack. Completed multiple full-stack applications including social media and e-commerce platforms.",
    icon: Briefcase,
    color: "bg-secondary",
  },
  {
    year: "2024",
    title: "Advanced AI Integration",
    subtitle: "RAG, n8n & AI Agents",
    description:
      "Exploring cutting-edge AI integration with RAG systems, n8n workflow automation, and building intelligent AI agents for real-world applications.",
    icon: Bot,
    color: "bg-primary",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="noise-bg section-padding relative">
      <div className="container-brutal">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block brutal-border bg-secondary text-secondary-foreground px-4 py-2 text-sm font-bold uppercase tracking-wider -rotate-1 mb-4">
            Journey
          </span>
          <h2 className="text-4xl md:text-6xl font-bold">
            Experience & <span className="sketch-underline">Education</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-2 bg-foreground transform md:-translate-x-1/2" />

          {timelineItems.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.title}
                className={`relative flex items-start gap-8 mb-12 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div className={`brutal-border ${item.color} p-3`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-20 md:ml-0 md:w-5/12 brutal-border bg-card p-6 brutal-shadow ${
                    isEven ? "md:mr-auto rotate-1" : "md:ml-auto -rotate-1"
                  } transition-all hover:-translate-y-1`}
                >
                  <span className="inline-block brutal-border bg-muted px-3 py-1 text-sm font-bold mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-secondary font-medium mb-2">
                    {item.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* NPM Package Ideas */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">
            <Star className="inline w-6 h-6 mr-2 text-primary" />
            Creative Side Projects & Ideas
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="sticky-note max-w-xs">
              <span className="text-sm font-bold">💡 NPM Package Idea:</span>
              <p className="text-sm mt-1">
                Utility functions for basic DSA operations
              </p>
            </div>
            <div className="sticky-note-pink max-w-xs">
              <span className="text-sm font-bold">🔧 CLI Tool:</span>
              <p className="text-sm mt-1">
                Auto-generate Express routes from schema
              </p>
            </div>
            <div className="sticky-note max-w-xs rotate-neg-1">
              <span className="text-sm font-bold">📦 Open Source:</span>
              <p className="text-sm mt-1">
                Contributing to MERN boilerplate templates
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
