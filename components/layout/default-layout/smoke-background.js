import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'

const SmokeBackground = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return

    const smoke = new Smoke(mountRef.current)
    smoke.init()
    smoke.animate()

    return () => {
      smoke.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    />
  )
}

class Smoke {
  constructor(container) {
    this.container = container
    this.width = container.clientWidth
    this.height = container.clientHeight
    this.clock = new THREE.Clock()
    this.smokeParticles = []
    this.isDisposed = false
  }

  init() {
    this.createScene()
    this.createCamera()
    this.createRenderer()
    this.addLights()
    this.addParticles()
    this.addEventListeners()
  }

  createScene() {
    this.scene = new THREE.Scene()
  }

  createCamera() {
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.width / this.height,
      1,
      1000
    )
    this.camera.position.z = 1000
    this.scene.add(this.camera)
  }

  createRenderer() {
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    this.renderer.setSize(this.width, this.height)
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.container.appendChild(this.renderer.domElement)
  }

  addLights() {
    const { scene } = this
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.75)
    directionalLight.position.set(-1, 1, 1)
    scene.add(directionalLight)
  }

  addParticles() {
    const { scene } = this
    const textureLoader = new THREE.TextureLoader()
    const smokeParticles = (this.smokeParticles = [])

    textureLoader.load(
      'https://rawgit.com/marcobiedermann/playground/master/three.js/smoke-particles/dist/assets/images/clouds.png',
      (texture) => {
        const smokeMaterial1 = new THREE.MeshLambertMaterial({
          color: 0xa68b7c, // 柔和的黃銅色
          map: texture,
          transparent: true,
          opacity: 0.55,
        })
        smokeMaterial1.map.minFilter = THREE.LinearFilter

        const smokeMaterial2 = new THREE.MeshLambertMaterial({
          color: 0xa68b7c, // 柔和的黃銅色
          map: texture,
          transparent: true,
          opacity: 0.55,
        })
        smokeMaterial2.map.minFilter = THREE.LinearFilter

        const smokeGeometry = new THREE.PlaneGeometry(300, 300)

        const smokeMeshes = []
        let limit = 150

        while (limit--) {
          const material = limit % 2 === 0 ? smokeMaterial1 : smokeMaterial2
          smokeMeshes[limit] = new THREE.Mesh(smokeGeometry, material)
          smokeMeshes[limit].position.set(
            Math.random() * 500 - 250,
            Math.random() * 500 - 250,
            Math.random() * 1000 - 100
          )
          smokeMeshes[limit].rotation.z = Math.random() * 360
          smokeParticles.push(smokeMeshes[limit])
          scene.add(smokeMeshes[limit])
        }
      }
    )
  }

  evolveSmoke(delta) {
    this.smokeParticles.forEach((particle) => {
      particle.rotation.z += delta * 0.2
    })
  }

  render() {
    if (this.isDisposed) return
    this.renderer.render(this.scene, this.camera)
  }

  animate() {
    if (this.isDisposed) return
    requestAnimationFrame(this.animate.bind(this))
    this.evolveSmoke(this.clock.getDelta())
    this.render()
  }

  onResize = () => {
    if (this.isDisposed) return
    this.width = this.container.clientWidth
    this.height = this.container.clientHeight
    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(this.width, this.height)
  }

  addEventListeners() {
    window.addEventListener('resize', this.onResize)
  }

  dispose() {
    this.isDisposed = true
    window.removeEventListener('resize', this.onResize)
    this.smokeParticles.forEach((particle) => {
      this.scene.remove(particle)
      particle.geometry.dispose()
      particle.material.dispose()
    })
    this.renderer.dispose()
    if (this.container && this.renderer.domElement) {
      this.container.removeChild(this.renderer.domElement)
    }
  }
}

export default SmokeBackground
