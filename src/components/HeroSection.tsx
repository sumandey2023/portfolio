import developerIllustration from "@/assets/developer-illustration.png";
import developer from "@/assets/developer.jpg";

const HeroSection = () => {
  return (
    <section className="noise-bg section-padding min-h-screen flex items-center relative overflow-hidden">
      <div className="container-brutal relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block brutal-border bg-primary px-4 py-2 text-sm font-bold uppercase tracking-wider rotate-neg-1">
                Full-Stack Developer
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none">
                Hi, I'm <span className="sketch-underline">Suman Dey</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium text-muted-foreground max-w-xl">
                I build <span className="bg-primary px-2">clean</span>,{" "}
                <span className="bg-secondary text-secondary-foreground px-2">
                  fast
                </span>
                , and{" "}
                <span className="brutal-border inline-block px-2 -rotate-1">
                  modern
                </span>{" "}
                web applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="brutal-btn-primary">
                View My Work
              </a>
              <a href="#contact" className="brutal-btn-outline">
                Let's Talk
              </a>
              <a
                href="/resume.pdf"
                download="Suman-Dey-Resume.pdf"
                className="brutal-btn-outline bg-secondary text-secondary-foreground"
              >
                Download CV
              </a>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 pt-6">
              <div className="brutal-border bg-background px-4 py-2 rotate-1">
                <span className="text-2xl font-bold">5+</span>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="brutal-border bg-primary px-4 py-2 -rotate-2">
                <span className="text-2xl font-bold">MERN</span>
                <p className="text-sm">Stack</p>
              </div>
              <div className="brutal-border bg-secondary text-secondary-foreground px-4 py-2 rotate-2">
                <span className="text-2xl font-bold">BCA</span>
                <p className="text-sm">3rd Year</p>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="brutal-border-thick brutal-shadow-lg bg-muted p-8 rotate-2 animate-float">
              <img
                // src={developer}
                src={developerIllustration}
                alt="Developer illustration - Suman Dey coding at desk"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-4 sticky-note hidden md:block">
              <span className="font-bold">console.log('Hello!');</span>
            </div>
            <div className="absolute -bottom-4 -right-4 sticky-note-pink hidden md:block">
              <span className="font-bold">&lt;Code /&gt;</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 brutal-border-thick bg-foreground text-background py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-8">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex gap-8 text-xl font-bold uppercase">
              <span>React</span>
              <span className="text-primary">★</span>
              <span>Node.js</span>
              <span className="text-secondary">★</span>
              <span>MongoDB</span>
              <span className="text-primary">★</span>
              <span>Express</span>
              <span className="text-secondary">★</span>
              <span>Full-Stack</span>
              <span className="text-primary">★</span>
              <span>MERN</span>
              <span className="text-secondary">★</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
