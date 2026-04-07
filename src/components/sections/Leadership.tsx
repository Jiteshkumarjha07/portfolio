"use client";

import { motion } from "framer-motion";
import { Users, Microscope, Handshake, Info, Instagram, ExternalLink, Award } from "lucide-react";
import { portfolioData } from "@/lib/data";

export function Leadership() {
  return (
    <section id="leadership" className="container py-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight mb-12">
          Leadership <span className="text-primary">&</span> Founding <span className="text-primary">.</span>
        </h2>

        <div className="space-y-24">
          {portfolioData.leadership.map((item, index) => (
            <div key={index} className="space-y-12">
              <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
                {/* Left Column: Role & Org */}
                <div className="space-y-6">
                  <div className="relative overflow-hidden rounded-2xl bg-primary/5 p-8 border border-primary/10">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      {(item as any).logo ? (
                        <img 
                          src={(item as any).logo} 
                          alt={`${item.organization} logo`} 
                          className="h-24 w-24 object-contain" 
                        />
                      ) : (
                        <Users className="h-24 w-24" />
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4 mb-4">
                      {(item as any).logo && (
                        <img 
                          src={(item as any).logo} 
                          alt={`${item.organization} logo`} 
                          className="h-12 w-12 object-contain md:hidden rounded-md" 
                        />
                      )}
                      <h3 className="text-2xl font-bold text-foreground">
                        {item.organization}
                      </h3>
                    </div>
                    <p className="text-lg font-medium text-primary mb-4">
                      {item.role}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>

                    {item.social_links.instagram && (
                      <div className="mt-8">
                        <a
                          href={item.social_links.instagram}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-foreground/5 px-4 py-2 text-sm font-medium hover:bg-foreground/10 transition-colors"
                        >
                          <Instagram className="h-4 w-4" />
                          {item.organization === "JSRMUN" ? "@jsrmun" : "Follow"}
                          <ExternalLink className="h-3 w-3 opacity-50" />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Notable Guests Card */}
                  {item.notable_guests.length > 0 && (
                    <div className="rounded-2xl border border-white/5 bg-card/50 p-6 backdrop-blur-sm">
                      <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                        <Handshake className="h-4 w-4" />
                        Notable Guests
                      </h4>
                      <ul className="space-y-3">
                        {item.notable_guests.map((guest, gIdx) => (
                          <li key={gIdx} className="flex items-start gap-2 text-sm">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                            <span className="text-foreground/80">{guest}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Right Column: Activities & Interviews */}
                <div className="space-y-8">
                  <div>
                    <h4 className="flex items-center gap-2 text-lg font-semibold mb-6">
                      <Microscope className="h-5 w-5 text-primary" />
                      Key Activities & Impact
                    </h4>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {item.activities.map((activity, aIdx) => (
                        <div 
                          key={aIdx} 
                          className="rounded-xl border border-white/5 bg-secondary/30 p-4 hover:border-primary/20 transition-all"
                        >
                          <p className="text-sm text-foreground/90">{activity}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {item.interviews.length > 0 && (
                    <div>
                      <h4 className="flex items-center gap-2 text-lg font-semibold mb-6">
                        <Award className="h-5 w-5 text-primary" />
                        Featured Interviews
                      </h4>
                      <div className="space-y-4">
                        {item.interviews.map((interview, iIdx) => (
                          <div 
                            key={iIdx} 
                            className="flex items-center justify-between rounded-xl border border-primary/10 bg-primary/5 p-4"
                          >
                            <span className="text-sm font-medium">{interview}</span>
                            <Info className="h-4 w-4 text-primary opacity-50" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="rounded-xl bg-gradient-to-br from-primary/10 to-transparent p-6 border border-primary/20">
                    <p className="text-sm italic text-muted-foreground">
                      {item.organization === "Alumnest" 
                        ? "\"Building the future of alumni engagement through collaborative digital systems.\""
                        : "\"Focused on empowering youth in Jamshedpur through diplomacy and institutional engagement.\""}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
