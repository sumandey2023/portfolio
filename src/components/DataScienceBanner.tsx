import { Workflow, Zap, Bot } from "lucide-react";

const DataScienceBanner = () => {
  return (
    <section className="noise-bg py-12 md:py-16 relative overflow-hidden">
      <div className="container-brutal">
        <div className="brutal-border-thick bg-foreground text-background p-8 md:p-12 -rotate-1 brutal-shadow-lg relative">
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 brutal-border bg-primary p-3 rotate-12 hidden md:block">
            <Bot className="w-8 h-8 text-foreground" />
          </div>
          <div className="absolute -bottom-4 -left-4 brutal-border bg-secondary p-3 -rotate-12 hidden md:block">
            <Zap className="w-8 h-8 text-secondary-foreground" />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="brutal-border bg-primary p-4">
              <Workflow className="w-12 h-12 text-foreground" />
            </div>
            
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Also Exploring <span className="text-primary">AI Integration</span>
              </h3>
              <p className="text-lg opacity-90">
                Currently building: <span className="font-bold text-secondary">Automated workflows</span> with n8n, AI agents & API integrations.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="brutal-border bg-background text-foreground px-4 py-2 rotate-2">
                <span className="font-bold">n8n</span>
              </div>
              <div className="brutal-border bg-secondary text-secondary-foreground px-4 py-2 -rotate-2">
                <span className="font-bold">AI Agents</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataScienceBanner;
