import {
  ExternalLink,
  Github,
  MessageSquare,
  ShoppingCart,
  Users,
  Video,
  Bot,
} from "lucide-react";

const projects = [
  {
    title: "AI Chat App",
    description:
      "ChatGPT-like AI assistant with long-term memory support using vector database for persistent context and intelligent conversations.",
    tech: ["React", "LangChain", "Pinecone", "OpenAI", "n8n"],
    icon: Bot,
    color: "bg-primary",
    rotate: "rotate-1",
    shadowColor: "brutal-shadow",
    github: "https://github.com/sumandey2023/Navi",
    liveLink: "https://navi20.vercel.app/",
  },
  {
    title: "E-Commerce Website",
    description:
      "Complete e-commerce solution with product catalog, cart functionality, payment integration, and admin dashboard.",
    tech: ["MERN Stack", "Stripe", "Redux", "Tailwind"],
    icon: ShoppingCart,
    color: "bg-secondary",
    rotate: "-rotate-2",
    shadowColor: "brutal-shadow-pink",
    github: "https://github.com/sumandey2023/mini_eCommerce",
    liveLink: "https://sport-sphere-final.onrender.com/",
  },
  {
    title: "Real-Time Chat App",
    description:
      "Modern chat application with real-time messaging, online status, typing indicators, and group conversations.",
    tech: ["React", "Socket.io", "Redux", "MUI", "Tailwind"],
    icon: MessageSquare,
    color: "bg-primary",
    rotate: "rotate-2",
    shadowColor: "brutal-shadow-yellow",
    github: "https://github.com/sumandey2023/mern-chat-app",
    liveLink: "https://adda-pi.vercel.app/",
  },
  // {
  //   title: "AI Interview Platform",
  //   description:
  //     "Concept platform for AI-powered mock interviews with webcam integration, speech analysis, and AI evaluation.",
  //   tech: ["React", "AI/ML", "WebRTC", "Node.js"],
  //   icon: Video,
  //   color: "bg-secondary",
  //   rotate: "-rotate-1",
  //   shadowColor: "brutal-shadow",
  // },
  // {
  //   title: "AI Chat App",
  //   description:
  //     "ChatGPT-like AI assistant with long-term memory support using vector database for persistent context and intelligent conversations.",
  //   tech: ["React", "LangChain", "Pinecone", "OpenAI", "n8n"],
  //   icon: Bot,
  //   color: "bg-primary",
  //   rotate: "rotate-1",
  //   shadowColor: "brutal-shadow-pink",
  // },
];

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  const Icon = project.icon;

  return (
    <article
      className={`brutal-border bg-card p-6 ${project.rotate} ${project.shadowColor} transition-all hover:-translate-y-2 hover:rotate-0 group`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`brutal-border ${project.color} p-3`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex gap-2">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-border bg-background p-2 hover:bg-muted transition-colors"
              aria-label="View live demo"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-border bg-background p-2 hover:bg-muted transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="brutal-border bg-muted px-3 py-1 text-xs font-bold uppercase"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="noise-bg section-padding bg-muted relative"
    >
      <div className="container-brutal">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block brutal-border bg-primary px-4 py-2 text-sm font-bold uppercase tracking-wider rotate-1 mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-bold">
            Featured <span className="sketch-underline">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            A selection of my recent work. Each project represents a unique
            challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/sumandey2023"
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-btn-outline inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
