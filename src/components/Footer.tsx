import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="brutal-border-thick border-t-8 bg-foreground text-background py-12 relative">
      <div className="container-brutal">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Suman Dey</h3>
            <p className="opacity-80">Full-Stack MERN Developer</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="flex items-center gap-2 text-lg">
              Made with{" "}
              <Heart className="w-5 h-5 text-secondary fill-secondary animate-pulse" />{" "}
              & lots of code
            </p>
            <p className="text-sm opacity-60">
              © 2025 Suman Dey. All rights reserved.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="brutal-border bg-primary text-foreground p-4 hover:-translate-y-2 transition-transform"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>

        {/* Easter Egg */}
        <div className="mt-8 text-center">
          <p className="text-xs opacity-40 font-mono">
            console.log("Thanks for visiting! 👋");
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
