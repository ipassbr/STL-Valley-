/**
 * Helper functions for Three.js scene initialization
 * Optional utilities for creating and managing scenes
 */

import * as THREE from "three"

/**
 * Creates a basic scene with default settings
 */
export function createBasicScene(background?: number | string): THREE.Scene {
  const scene = new THREE.Scene()
  if (background !== undefined) {
    scene.background = new THREE.Color(background as any)
  }
  return scene
}

/**
 * Creates a perspective camera with sensible defaults
 */
export function createPerspectiveCamera(
  container: HTMLElement,
  fov: number = 60,
  near: number = 0.1,
  far: number = 1000
): THREE.PerspectiveCamera {
  const aspect = container.clientWidth / Math.max(container.clientHeight, 1)
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
  return camera
}

/**
 * Creates a WebGL renderer with optimized settings
 */
export function createWebGLRenderer(
  container: HTMLElement,
  options?: {
    antialias?: boolean
    alpha?: boolean
    maxPixelRatio?: number
  }
): THREE.WebGLRenderer {
  const {
    antialias = true,
    alpha = false,
    maxPixelRatio = 2,
  } = options || {}

  const renderer = new THREE.WebGLRenderer({ antialias, alpha })
  renderer.physicallyCorrectLights = true
  renderer.outputColorSpace = (THREE as any).SRGBColorSpace ?? (THREE as any).sRGBEncoding
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxPixelRatio))
  renderer.setSize(container.clientWidth, container.clientHeight, false)
  
  return renderer
}

/**
 * Sets up basic lighting for a scene
 */
export function setupBasicLighting(scene: THREE.Scene): void {
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
  directionalLight.position.set(5, 10, 7.5)
  scene.add(directionalLight)

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.25)
  scene.add(ambientLight)
}

/**
 * Disposes of Three.js resources to prevent memory leaks
 */
export function disposeResources(
  object: THREE.Object3D | THREE.Material | THREE.Geometry | THREE.Texture
): void {
  if (object instanceof THREE.Object3D) {
    object.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        if (child.geometry) child.geometry.dispose()
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach((m) => m.dispose())
          } else {
            child.material.dispose()
          }
        }
      }
    })
  } else if (object instanceof THREE.Material) {
    object.dispose()
  } else if (object instanceof THREE.Geometry) {
    object.dispose()
  } else if (object instanceof THREE.Texture) {
    object.dispose()
  }
}

