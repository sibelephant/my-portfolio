"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { link } from "fs";

interface ProjectsSectionProps {
  scrollY: number;
}

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A modern e-commerce platform with seamless user experience and advanced filtering capabilities.",
    image: "/modern-ecommerce-platform.png",
    tags: ["React", "Node.js", "PostgreSQL"],
    year: "2024",
  },
  {
    id: 2,
    title: "Museum Landing Page/Showcase Site ",
    description:
      "A modern museum site showing the rich heritage of the oyo empire and the state's art",
    image: "/museum.png",
    tags: ["React Native", "TypeScript"],
    year: "2025",
    links: "https://oyo-museum.vercel.app/",
  },
  {
    id: 3,
    title: "Design System",
    description:
      "Comprehensive design system and component library for enterprise applications.",
    image: "/design-system-components.png",
    tags: ["Figma", "Storybook", "React"],
    year: "2023",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description:
      "Mock analytics dashboard with interactive data visualizations.",
    image: "/dashboardanalytic.png",
    tags: ["Typescript","React","Shad-cn","Tailwind CSS"],
    year: "2025",
    links: "https://dashboard-display-81vi.vercel.app/",
  },
];

export default function ProjectsSection({ scrollY }: ProjectsSectionProps) {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div
            className="space-y-4 transform transition-transform duration-1000"
            style={{
              transform: `translateY(${Math.max(0, 100 - scrollY * 0.2)}px)`,
            }}
          >
            <h2 className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
              Selected Work
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold text-balance">
              Featured Projects
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              A collection of projects that showcase my approach to solving
              complex design challenges.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="transform transition-all duration-700"
              style={{
                transform: `translateY(${Math.max(0, 50 - scrollY * 0.1)}px)`,
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <Card
                className="group overflow-hidden bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 text-white/80 text-sm font-medium">
                    {project.year}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-pretty">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className={`mt-4 transition-all duration-300 ${
                      hoveredProject === project.id
                        ? "translate-x-2 text-primary"
                        : "translate-x-0"
                    }`}
                  >
                    {project.links ? (
                      <Link href={project.links} target="_blank">
                        View Project →
                      </Link>
                    ) : (
                      "View Project →"
                    )}
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
