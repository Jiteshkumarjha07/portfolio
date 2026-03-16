"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="container py-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight mb-12">
          Experience <span className="text-primary">.</span>
        </h2>

        <div className="space-y-12">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="grid md:grid-cols-[1fr_3fr] gap-4 md:gap-8 border-l border-primary/20 md:border-none pl-6 md:pl-0 relative">
              <div className="md:hidden absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary/20 border-2 border-primary" />
              <div className="text-sm font-medium text-muted-foreground mt-1 whitespace-nowrap">
                {exp.period}
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {exp.role} <span className="text-primary">@</span> {exp.company}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {exp.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex gap-4 text-muted-foreground text-sm/relaxed">
                      <span className="text-primary text-lg translate-y-[-2px]">▹</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
