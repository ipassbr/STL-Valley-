"use client"

import React, { useRef, useEffect } from "react"
import * as THREE from "three"

type Props = {
  width?: number | "100%"
  height?: number | "100%"
  background?: number | string // color hex or number
}

export default function SceneCanvas({ background = 0x0a0a0a }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(background as any)

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / Math.max(container.clientHeight, 1),
      0.1,
      1000
    )
    camera.position.set(0, 1.2, 3)

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(container.clientWidth, container.clientHeight, false)
    rendererRef.current = renderer
    container.appendChild(renderer.domElement)

    // Resize handler
    const handleResize = () => {
      if (!container || !renderer) return
      const w = container.clientWidth
      const h = container.clientHeight || 1
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h, false)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    // Simple lighting + geometry (example)
    const dir = new THREE.DirectionalLight(0xffffff, 1)
    dir.position.set(5, 10, 7.5)
    scene.add(dir)

    const amb = new THREE.AmbientLight(0xffffff, 0.25)
    scene.add(amb)

    const geometry = new THREE.TorusKnotGeometry(0.6, 0.18, 128, 32)
    const material = new THREE.MeshStandardMaterial({ metalness: 0.6, roughness: 0.35 })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Clock & animation
    const clock = new THREE.Clock()
    const animate = () => {
      const t = clock.getElapsedTime()
      mesh.rotation.x = 0.2 * Math.sin(t * 0.5)
      mesh.rotation.y = t * 0.25
      renderer.render(scene, camera)
      rafRef.current = requestAnimationFrame(animate)
    }

    // event listeners
    window.addEventListener("resize", handleResize, { passive: true })
    handleResize()
    rafRef.current = requestAnimationFrame(animate)

    // cleanup
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener("resize", handleResize)
      // dispose geometry/materials/textures
      mesh.geometry.dispose()
      if (Array.isArray(mesh.material)) {
        mesh.material.forEach((m) => m.dispose())
      } else {
        mesh.material.dispose()
      }
      renderer.dispose()
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      rendererRef.current = null
    }
  }, [background])

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "400px",
        borderRadius: 12,
        overflow: "hidden",
        display: "block",
        background: "linear-gradient(180deg,#0b1220 0%, #071018 100%)",
      }}
      aria-label="Canvas 3D scene"
      role="img"
    />
  )
}

