import React, { useState } from "react";
import { Send, Mail, MapPin, Github, Linkedin, Twitter, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to send a message.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xrbnozkq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent! 🚀",
          description: "Thanks for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errJson = await response.json().catch(() => null);
        const errMsg = errJson && errJson.error ? errJson.error : null;
        toast({
          title: "Failed to send",
          description:
            errMsg || "Something went wrong — please try again later.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Failed to send",
        description: "Something went wrong — please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="noise-bg section-padding bg-muted relative"
    >
      <div className="container-brutal">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block brutal-border bg-primary px-4 py-2 text-sm font-bold uppercase tracking-wider rotate-1 mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-bold">
            Let's Build <span className="sketch-underline">Something Cool</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and create something
            amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="brutal-border bg-card p-8 brutal-shadow rotate-1"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-bold mb-2 text-lg">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full brutal-border bg-background px-4 py-3 text-lg font-medium focus:outline-none focus:ring-4 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-bold mb-2 text-lg">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full brutal-border bg-background px-4 py-3 text-lg font-medium focus:outline-none focus:ring-4 focus:ring-primary"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-bold mb-2 text-lg"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full brutal-border bg-background px-4 py-3 text-lg font-medium focus:outline-none focus:ring-4 focus:ring-primary resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="brutal-btn-primary w-full flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="brutal-border bg-foreground text-background p-8 -rotate-1 brutal-shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>

              <div className="space-y-4">
                <a
                  href="mailto:suman@example.com"
                  className="flex items-center gap-4 hover:text-primary transition-colors"
                >
                  <div className="brutal-border bg-primary text-foreground p-3">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="text-lg">sumandey0704@gmail.com</span>
                </a>

                <div className="flex items-center gap-4">
                  <div className="brutal-border bg-secondary text-secondary-foreground p-3">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="text-lg">West Bengal, India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t-4 border-background">
                <p className="text-sm uppercase font-bold mb-4 opacity-80">
                  Find me on
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/sumandey2023"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-border bg-background text-foreground p-3 hover:-translate-y-1 transition-transform"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/suman-dey-463794253/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-border bg-primary text-foreground p-3 hover:-translate-y-1 transition-transform"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  {/* <a
                    href="https://twitter.com/sumandey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-border bg-secondary text-secondary-foreground p-3 hover:-translate-y-1 transition-transform"
                    aria-label="Twitter Profile"
                  >
                    <X size={24} className="w-6 h-6" />
                  </a> */}
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="sticky-note inline-block">
              <span className="text-lg font-bold">
                🟢 Currently available for freelance work and full time job!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
