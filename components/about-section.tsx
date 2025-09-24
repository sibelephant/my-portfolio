"use client";

import { Card } from "@/components/ui/card";

interface AboutSectionProps {
  scrollY: number;
}

export default function AboutSection({ scrollY }: AboutSectionProps) {
  return (
    <section id="about" className="py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className="space-y-8 transform transition-transform duration-1000"
            style={{
              transform: `translateX(${Math.max(0, 200 - scrollY * 0.3)}px)`,
            }}
          >
            <div className="space-y-4">
              <h2 className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
                About
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-balance">
                Crafting Digital
                <br />
                Experiences
              </h3>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-pretty">
                I'm FullStack Web developer and 3D web-motion designer with a
                passion for creating accessible,user interfaces and scalable
                APIs and integrations that blend thoughtful UIS with robust
                engineering and security.
              </p>
              <p className="text-pretty">
                My work focuses on the intersection of great UIs and
                development, creating experiences that not only look great but
                are meticulously built for performance ,usability, scalabilty
                and security.
              </p>
            </div>
          </div>

          <div
            className="relative transform transition-transform duration-1000"
            style={{
              transform: `translateX(${Math.max(0, -200 + scrollY * 0.3)}px)`,
            }}
          >
            <div className="perspective-1000">
              <Card className="p-8 transform-3d hover:rotate-y-12 transition-transform duration-500 bg-card/50 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold">Experience</h4>
                    <div className="space-y-4 text-sm text-muted-foreground">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-foreground">
                            Frontend Developer{" "}
                          </p>
                          <p>Express Labs</p>
                        </div>
                        <span className="text-xs">2024-2025</span>
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-foreground">
                            Freelance Developer
                          </p>
                          <p>Fiverr and Upwork</p>
                        </div>
                        <span className="text-xs">2025</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React",
                        "TypeScript",
                        "Go ",
                        "PostgreSQL",

                        "Next.js",
                        "Tailwind",
                        "Gsap",
                        "Express",
                        "Gin",
                        "PrismaORM",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium hover:scale-105 transition-transform duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
