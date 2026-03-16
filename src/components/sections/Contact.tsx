"use client";

import { motion } from "framer-motion";
import { Copy, Mail, ExternalLink } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.owner.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="container py-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Get In Touch <span className="text-primary">.</span>
        </h2>
        <p className="text-muted-foreground mb-12 text-lg">
          I'm currently looking for new opportunities. Whether you have a
          question, a project proposal, or just want to say hi, my inbox is
          always open.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`mailto:${portfolioData.owner.email}`}
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring w-full sm:w-auto"
          >
            <Mail className="mr-2 h-4 w-4" />
            Say Hello
          </a>
          
          <a
            href={`https://wa.me/${portfolioData.owner.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring w-full sm:w-auto"
          >
            WhatsApp
          </a>

          <button
            onClick={copyEmail}
            className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring w-full sm:w-auto relative"
          >
            <Copy className="mr-2 h-4 w-4" />
            {copied ? "Email Copied!" : "Copy Email"}
          </button>
        </div>

        <div className="mt-16 flex justify-center gap-8">
           <a
              href={portfolioData.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground hover:underline transition-all"
            >
              LinkedIn <ExternalLink className="ml-1 h-3 w-3" />
            </a>
            <a
              href={portfolioData.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground hover:underline transition-all"
            >
              GitHub <ExternalLink className="ml-1 h-3 w-3" />
            </a>
        </div>
      </motion.div>
    </section>
  );
}
