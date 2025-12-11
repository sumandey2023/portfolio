import { Code, Server, Users, Palette, Database, Zap } from "lucide-react";

const frontendSkills = [
  { name: "HTML5", icon: "📄" },
  { name: "CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "Bootstrap", icon: "📐" },
  { name: "Spline", icon: "🎲" },
];

const backendSkills = [
  { name: "Node.js", icon: "🟢" },
  { name: "Express.js", icon: "🚂" },
  { name: "MongoDB", icon: "🍃" },
  { name: "JWT Auth", icon: "🔐" },
  { name: "REST APIs", icon: "🔌" },
  { name: "Socket.io", icon: "🔗" },
];

const softSkills = [
  { name: "Problem Solving", icon: "🧩" },
  { name: "Team Collaboration", icon: "🤝" },
  { name: "Communication", icon: "💬" },
  { name: "Quick Learner", icon: "📚" },
  { name: "Time Management", icon: "⏰" },
];

const SkillCard = ({
  title,
  icon: Icon,
  skills,
  rotate,
  shadowColor,
}: {
  title: string;
  icon: React.ElementType;
  skills: { name: string; icon: string }[];
  rotate: string;
  shadowColor: string;
}) => (
  <div
    className={`brutal-border bg-card p-6 md:p-8 ${rotate} ${shadowColor} transition-all hover:-translate-y-2`}
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="brutal-border bg-primary p-3">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <span
          key={skill.name}
          className="brutal-border bg-background px-4 py-2 font-medium flex items-center gap-2 hover:bg-muted transition-colors"
        >
          <span className="text-lg">{skill.icon}</span>
          {skill.name}
        </span>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="noise-bg section-padding relative">
      <div className="container-brutal">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block brutal-border bg-secondary text-secondary-foreground px-4 py-2 text-sm font-bold uppercase tracking-wider -rotate-1 mb-4">
            What I Do
          </span>
          <h2 className="text-4xl md:text-6xl font-bold">
            My <span className="sketch-underline">Skills</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard
            title="Frontend"
            icon={Palette}
            skills={frontendSkills}
            rotate="rotate-1"
            shadowColor="brutal-shadow"
          />
          <SkillCard
            title="Backend"
            icon={Server}
            skills={backendSkills}
            rotate="-rotate-1"
            shadowColor="brutal-shadow-pink"
          />
          <SkillCard
            title="Soft Skills"
            icon={Users}
            skills={softSkills}
            rotate="rotate-2"
            shadowColor="brutal-shadow-yellow"
          />
        </div>

        {/* Tools Marquee */}
        <div className="mt-16 brutal-border bg-foreground text-background py-4 overflow-hidden rotate-neg-1">
          <div className="animate-marquee whitespace-nowrap flex gap-12">
            {[...Array(2)].map((_, i) => (
              <span key={i} className="flex gap-12 text-lg font-bold uppercase">
                <span className="flex items-center gap-2"><Code className="w-5 h-5" /> VS Code</span>
                <span className="flex items-center gap-2"><Zap className="w-5 h-5 text-primary" /> Git</span>
                <span className="flex items-center gap-2"><Database className="w-5 h-5" /> Postman</span>
                <span className="flex items-center gap-2"><Server className="w-5 h-5 text-secondary" /> Figma</span>
                <span className="flex items-center gap-2"><Code className="w-5 h-5" /> Redux</span>
                <span className="flex items-center gap-2"><Zap className="w-5 h-5 text-primary" /> MUI</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
