"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";

const skillCategories = [
  { title: "Programming Languages", items: portfolioData.skills.programming },
  { title: "Frameworks & Infrastructure", items: portfolioData.skills.frameworks },
  { title: "Quant & Data Systems", items: portfolioData.skills.dataScience },
  { title: "Tools & Utilities", items: portfolioData.skills.tools },
];

export function Skills() {
  return (
    <section id="skills" className="container py-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight mb-12">
          Skills & Expertise <span className="text-primary">.</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl border border-white/5 bg-card/50 p-6 backdrop-blur-sm"
            >
              <h3 className="font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.items.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="inline-flex items-center rounded-md border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary shadow-sm hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
