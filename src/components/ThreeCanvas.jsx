import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x1e064d, 1.5);
    scene.add(ambientLight);

    const goldLight = new THREE.PointLight(0xFFD700, 3, 20);
    goldLight.position.set(3, 3, 3);
    scene.add(goldLight);

    const purpleLight = new THREE.PointLight(0x7b2fff, 2, 20);
    purpleLight.position.set(-3, -2, 2);
    scene.add(purpleLight);

    const rimLight = new THREE.DirectionalLight(0xffd700, 1);
    rimLight.position.set(0, 5, -5);
    scene.add(rimLight);

    // Group to hold everything
    const group = new THREE.Group();
    scene.add(group);

    // Main octahedron (large, central)
    const octGeo = new THREE.OctahedronGeometry(1.5, 0);
    const octMat = new THREE.MeshPhysicalMaterial({
      color: 0x1e064d,
      metalness: 0.9,
      roughness: 0.1,
      emissive: 0x0a0120,
      emissiveIntensity: 0.3,
      wireframe: false,
    });
    const octMesh = new THREE.Mesh(octGeo, octMat);
    group.add(octMesh);

    // Gold wireframe overlay
    const wireGeo = new THREE.OctahedronGeometry(1.52, 0);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xFFD700,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    group.add(wireMesh);

    // Inner icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(0.7, 0);
    const icoMat = new THREE.MeshPhysicalMaterial({
      color: 0xFFD700,
      metalness: 1,
      roughness: 0.05,
      emissive: 0xB8860B,
      emissiveIntensity: 0.6,
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    group.add(icoMesh);

    // Orbiting small spheres
    const orbitGroup = new THREE.Group();
    group.add(orbitGroup);

    const orbitColors = [0xFFD700, 0xB8860B, 0x7b2fff, 0xffffff];
    const orbitSpheres = [];

    for (let i = 0; i < 4; i++) {
      const sGeo = new THREE.SphereGeometry(0.08, 16, 16);
      const sMat = new THREE.MeshPhysicalMaterial({
        color: orbitColors[i],
        metalness: 1,
        roughness: 0,
        emissive: orbitColors[i],
        emissiveIntensity: 0.5,
      });
      const sMesh = new THREE.Mesh(sGeo, sMat);
      const angle = (i / 4) * Math.PI * 2;
      const radius = 2.4;
      sMesh.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.4, Math.sin(angle) * radius);
      orbitGroup.add(sMesh);
      orbitSpheres.push({ mesh: sMesh, angle, speed: 0.5 + i * 0.1 });
    }

    // Floating particles
    const particlesGeo = new THREE.BufferGeometry();
    const particleCount = 80;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMat = new THREE.PointsMaterial({
      color: 0xFFD700,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particles);

    // Ring
    const ringGeo = new THREE.TorusGeometry(2.1, 0.015, 8, 80);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xFFD700, transparent: true, opacity: 0.3 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    group.add(ring);

    const ring2Geo = new THREE.TorusGeometry(1.85, 0.01, 8, 80);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xB8860B, transparent: true, opacity: 0.2 });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 2.2;
    ring2.rotation.y = Math.PI / 4;
    group.add(ring2);

    // Handle resize
    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Mouse interaction
    let mouseX = 0, mouseY = 0;
    const handleMouse = (e) => {
      const rect = mount.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    mount.addEventListener('mousemove', handleMouse);

    // Animation loop
    const clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Main rotation (360deg continuous)
      group.rotation.y = t * 0.4;
      group.rotation.x = Math.sin(t * 0.2) * 0.3;

      // Inner icosahedron spins opposite
      icoMesh.rotation.y = -t * 0.8;
      icoMesh.rotation.x = t * 0.5;

      // Orbiting spheres
      orbitSpheres.forEach(({ mesh, speed }, i) => {
        const a = t * speed + (i / 4) * Math.PI * 2;
        const r = 2.4;
        mesh.position.set(Math.cos(a) * r, Math.sin(a) * r * 0.4, Math.sin(a) * r);
      });

      // Ring rotation
      ring.rotation.z = t * 0.3;
      ring2.rotation.z = -t * 0.2;

      // Mouse parallax
      group.rotation.y += mouseX * 0.01;
      group.position.y = Math.sin(t * 0.5) * 0.1;

      // Gold light pulse
      goldLight.intensity = 2.5 + Math.sin(t * 1.5) * 1;
      goldLight.position.x = Math.cos(t * 0.5) * 4;
      goldLight.position.y = Math.sin(t * 0.7) * 3;

      // Particles drift
      particles.rotation.y = t * 0.02;
      particles.rotation.x = t * 0.01;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      mount.removeEventListener('mousemove', handleMouse);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full"
      style={{ minHeight: '500px' }}
    />
  );
}
