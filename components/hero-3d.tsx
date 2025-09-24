"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Sphere, Box, Torus } from "@react-three/drei"
import type * as THREE from "three"

export default function Hero3D() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Floating geometric shapes */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere args={[0.5, 32, 32]} position={[-3, 2, -2]}>
          <meshStandardMaterial color="#e5e7eb" transparent opacity={0.6} />
        </Sphere>
      </Float>

      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
        <Box args={[0.8, 0.8, 0.8]} position={[3, -1, -1]}>
          <meshStandardMaterial color="#f3f4f6" transparent opacity={0.4} />
        </Box>
      </Float>

      <Float speed={1.8} rotationIntensity={0.7} floatIntensity={0.6}>
        <Torus args={[0.6, 0.2, 16, 32]} position={[2, 3, -3]}>
          <meshStandardMaterial color="#d1d5db" transparent opacity={0.5} />
        </Torus>
      </Float>

      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.7}>
        <Sphere args={[0.3, 16, 16]} position={[-2, -2, -1]}>
          <meshStandardMaterial color="#9ca3af" transparent opacity={0.7} />
        </Sphere>
      </Float>

      <Float speed={2.2} rotationIntensity={0.6} floatIntensity={0.4}>
        <Box args={[0.4, 1.2, 0.4]} position={[-1, 1, -4]}>
          <meshStandardMaterial color="#6b7280" transparent opacity={0.3} />
        </Box>
      </Float>
    </group>
  )
}
