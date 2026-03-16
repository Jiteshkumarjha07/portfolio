import { portfolioData } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 md:py-12 mt-24">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <span className="font-medium text-foreground">
            {portfolioData.owner.name}
          </span>
          .
        </p>
        <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
          <a
            href={portfolioData.links.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href={portfolioData.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${portfolioData.owner.email}`}
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
