import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm brutal-border border-t-0 border-l-0 border-r-0">
      <div className="container-brutal">
        <div className="flex items-center justify-between h-20 px-4 md:px-8">
          {/* Logo */}
          <a href="#" className="brutal-border bg-primary px-4 py-2 font-bold text-xl hover:-translate-y-1 transition-transform">
            SD
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="brutal-border bg-background px-4 py-2 font-bold uppercase text-sm tracking-wide hover:bg-muted transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="brutal-border bg-secondary text-secondary-foreground px-4 py-2 font-bold uppercase text-sm tracking-wide hover:-translate-y-1 transition-transform"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden brutal-border bg-background p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden brutal-border border-t-4 bg-background p-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block brutal-border bg-muted px-4 py-3 font-bold uppercase text-sm tracking-wide hover:bg-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block brutal-border bg-secondary text-secondary-foreground px-4 py-3 font-bold uppercase text-sm tracking-wide text-center"
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
