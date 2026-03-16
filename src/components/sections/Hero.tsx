"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden py-12 md:py-24">
      <div className="container relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8 h-32 w-32 overflow-hidden rounded-full border-2 border-primary/20 p-1 shadow-[0_0_15px_rgba(var(--primary),0.2)]"
        >
          <div className="h-full w-full overflow-hidden rounded-full">
            <Image
              src={portfolioData.photos[0]}
              alt={portfolioData.owner.name}
              width={128}
              height={128}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              priority
              unoptimized={true}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary/80 mr-2 shadow-[0_0_8px_rgba(var(--primary),0.8)] animate-pulse" />
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Building intelligent <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">
            systems & quant algorithms
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed"
        >
          {portfolioData.branding.positioning} I specialize in Next.js, Python,
          and robust data infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="#projects"
            className="group inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <Download className="mr-2 h-4 w-4" />
            Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-6 text-muted-foreground"
        >
          <a
            href={portfolioData.links.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-all hover:scale-110"
          >
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </a>
          <a
            href={portfolioData.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-all hover:scale-110"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href={`mailto:${portfolioData.owner.email}`}
            className="hover:text-foreground transition-all hover:scale-110"
          >
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </a>
        </motion.div>
      </div>

      {/* Background decoration elements */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/5 bg-foreground/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/5 bg-foreground/5 blur-3xl" />
      </div>
    </section>
  );
}
