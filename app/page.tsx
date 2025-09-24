"use client"

import { useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Hero3D from "@/components/hero-3d"
import ProjectsSection from "@/components/projects-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState("home")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />

      {/* Hero Section with 3D Elements */}
      <section id="home" className="relative h-screen w-full">
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center space-y-6 px-4">
            <div
              className="transform transition-transform duration-1000"
              style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            >
              <h1 className="text-6xl md:text-8xl font-bold text-balance leading-tight">
                IBRAHIM 
                <br />
                <span className="text-muted-foreground">KHALID</span>
              </h1>
            </div>
            <div
              className="transform transition-transform duration-1000 delay-200"
              style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            >
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Frontend Developer Creating Product and crafting immersive experiences through thoughtful and interactive UIs  and innovative
                technology.
              </p>
            </div>
            <div
              className="transform transition-transform duration-1000 delay-400"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              <Button
                size="lg"
                className="mt-8 px-8 py-4 text-lg hover:scale-105 transition-transform duration-300"
                onClick={() => setCurrentSection("work")}
              >
                View My Work
              </Button>
            </div>
          </div>
        </div>

        {/* 3D Background */}
        <div className="absolute inset-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Environment preset="studio" />
            <Hero3D />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>
      </section>

      {/* About Section */}
      <AboutSection scrollY={scrollY} />

      {/* Projects Section */}
      <ProjectsSection scrollY={scrollY} />

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
