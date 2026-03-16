"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="container py-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight mb-8">
          About <span className="text-primary">.</span>
        </h2>

        <div className="grid gap-12 md:grid-cols-[2fr_1fr] items-start">
          <div className="space-y-12">
            {/* Bio section */}
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I am a {portfolioData.owner.title.toLowerCase()} based in{" "}
                {portfolioData.owner.location}. My work bridges the gap between AI
                research, quantitative finance, and scalable full-stack software
                systems.
              </p>
              <p>
                I am currently building **Alumnest** — an active startup enabling 
                alumni communities to reconnect through a digital infrastructure 
                platform. The MVP is ready and active.
              </p>
              <p>
                I specialize in building intelligent applications using Next.js and
                Python, with a deep interest in financial risk modeling and macro
                analysis.
              </p>
            </div>

            {/* Education section */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                Education
              </h3>
              <div className="space-y-8 border-l border-primary/20 pl-6 relative">
                {portfolioData.education.map((edu, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-[33px] top-1.5 h-3 w-3 rounded-full bg-primary/20 border-2 border-primary" />
                    <h4 className="font-medium text-foreground">
                      {edu.institution}
                    </h4>
                    <div className="text-sm text-muted-foreground mt-1">
                      {edu.degree} {edu.field ? `— ${edu.field}` : ""}
                    </div>
                    <div className="text-sm font-medium text-primary/80 mt-1">
                      {edu.years || edu.year}
                    </div>
                    {edu.notes && (
                      <div className="text-sm text-muted-foreground mt-2 italic">
                        {edu.notes}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Photo section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[3/4] w-full max-w-[300px] overflow-hidden rounded-2xl border-4 border-card bg-muted shadow-2xl"
          >
            <Image
              src={portfolioData.photos[1]}
              alt="About Jitesh"
              fill
              className="object-cover grayscale transition-all duration-500 hover:grayscale-0 hover:scale-105"
              unoptimized={true}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
