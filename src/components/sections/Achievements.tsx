"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { Trophy, Star } from "lucide-react";

export function Achievements() {
  return (
    <section id="achievements" className="container py-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight mb-12">
          Leadership & Achievements <span className="text-primary">.</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Achievements */}
          <div className="rounded-xl border border-white/5 bg-card/50 p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Achievements</h3>
            </div>
            <ul className="space-y-4">
              {portfolioData.achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="text-primary text-lg">▹</span>
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Interests */}
          <div className="rounded-xl border border-white/5 bg-card/50 p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <Star className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Interests</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {portfolioData.interests.map((interest, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.07 }}
                  className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
