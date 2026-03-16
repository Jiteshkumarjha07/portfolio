"use client";

import { motion } from "framer-motion";
import { Folder, ExternalLink, Github } from "lucide-react";
import { portfolioData } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="container py-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight mb-12">
          Projects <span className="text-primary">.</span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:hover:border-primary/50"
            >
              <div className="flex items-center justify-between mb-8">
                <Folder className="h-10 w-10 text-primary transition-transform group-hover:scale-110" />
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="sr-only">GitHub</span>
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.externalUrl && (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="sr-only">External Link</span>
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  {project.badge && (
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary border border-primary/20">
                      {project.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto">
                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="text-xs font-mono text-muted-foreground px-2 py-1 rounded-md bg-secondary"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
