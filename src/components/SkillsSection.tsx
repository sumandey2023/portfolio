import { Code, Server, Users, Palette, Database, Zap } from "lucide-react";
import HTML5Img from "../assets/icons/frontend/HTML5.png";
import CSS3 from "../assets/icons/frontend/image.png";
import JavaScriptImg from "../assets/icons/frontend/JavaScript.png";
import ReactImg from "../assets/icons/frontend/React.png";
import ReduxImg from "../assets/icons/frontend/Redux.png";
import TailwindImg from "../assets/icons/frontend/Tailwind CSS.png";
import BootstrapImg from "../assets/icons/frontend/Bootstrap.png";
import MetarialUI from "../assets/icons/frontend/Material UI.png";
import Figma from "../assets/icons/frontend/Figma.png";
import NodeImg from "../assets/icons/backend/Node.js.png";
import ExpressImg from "../assets/icons/backend/Express.png";
import MongoImg from "../assets/icons/backend/MongoDB.png";
import JWTImg from "../assets/icons/backend/jwt.png";
import SocketImg from "../assets/icons/backend/Socket.io.png";
import MySQLImg from "../assets/icons/backend/MySQL.png";
import PostgresImg from "../assets/icons/backend/PostgresSQL.png";
import PHPImg from "../assets/icons/backend/PHP.png";
import AWSImg from "../assets/icons/tools/AWS.png";
import DockerImg from "../assets/icons/tools/Docker.png";
import GitImg from "../assets/icons/tools/Git.png";
import GitHubImg from "../assets/icons/tools/GitHub.png";
import PostmanToolImg from "../assets/icons/tools/Postman.png";
import VSCodeImg from "../assets/icons/tools/Visual Studio Code (VS Code).png";
import Postman from "../assets/icons/backend/Postman.png";
import TypeScript from "../assets/icons/frontend/TypeScript.png";
import NextJS from "../assets/icons/frontend/Next.js.png";
const frontendSkills = [
  { name: "HTML5", img: HTML5Img },
  { name: "CSS3", img: CSS3 },
  { name: "JavaScript", img: JavaScriptImg },
  { name: "TypeScript", img: TypeScript },
  { name: "React", img: ReactImg },
  { name: "Tailwind CSS", img: TailwindImg },
  { name: "Bootstrap", img: BootstrapImg },
  { name: "Redux", img: ReduxImg },
  { name: "Metarial UI", img: MetarialUI },
  { name: "Next.js", img: NextJS },
];

const backendSkills = [
  { name: "Node.js", img: NodeImg },
  { name: "Express.js", img: ExpressImg },
  { name: "MongoDB", img: MongoImg },
  { name: "Next.js", img: NextJS },
  { name: "JWT Auth", img: JWTImg },
  { name: "Socket.io", img: SocketImg },
  { name: "MySQL", img: MySQLImg },
  { name: "Postgres", img: PostgresImg },
  { name: "PHP", img: PHPImg },
];

const toolsSkills = [
  { name: "VS Code", img: VSCodeImg },
  { name: "Git", img: GitImg },
  { name: "GitHub", img: GitHubImg },
  { name: "Docker", img: DockerImg },
  { name: "Postman", img: PostmanToolImg },
  { name: "AWS", img: AWSImg },
  { name: "Figma", img: Figma },
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
  skills: { name: string; icon?: string; img?: string }[];
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
          {skill.img ? (
            <img
              src={skill.img}
              alt={skill.name}
              className="w-6 h-6 object-contain"
            />
          ) : (
            <span className="text-lg">{skill.icon}</span>
          )}
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
            title="Tools & Technology"
            icon={Code}
            skills={toolsSkills}
            rotate="rotate-2"
            shadowColor="brutal-shadow-yellow"
          />
        </div>

        {/* Tools Marquee */}
        <div className="mt-16 brutal-border bg-foreground text-background py-4 overflow-hidden rotate-neg-1">
          <div className="animate-marquee whitespace-nowrap flex gap-12">
            {[...Array(2)].map((_, i) => (
              <span key={i} className="flex gap-12 text-lg font-bold uppercase">
                <span className="flex items-center gap-2">
                  <Code className="w-5 h-5" /> VS Code
                </span>
                <span className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" /> Git
                </span>
                <span className="flex items-center gap-2">
                  <Database className="w-5 h-5" /> Postman
                </span>
                <span className="flex items-center gap-2">
                  <Server className="w-5 h-5 text-secondary" /> Figma
                </span>
                <span className="flex items-center gap-2">
                  <Code className="w-5 h-5" /> Redux
                </span>
                <span className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" /> MUI
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
