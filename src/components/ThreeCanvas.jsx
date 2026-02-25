import { useEffect, useRef } from "react";

export default function ThreeCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Load Three.js via script tag since ES module import won't resolve in this env
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    script.onload = () => initScene();
    document.head.appendChild(script);

    let animId;
    let cleanupFn;

    function initScene() {
      const THREE = window.THREE;
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

      const goldLight = new THREE.PointLight(0xffd700, 3, 20);
      goldLight.position.set(3, 3, 3);
      scene.add(goldLight);

      const purpleLight = new THREE.PointLight(0x7b2fff, 2, 20);
      purpleLight.position.set(-3, -2, 2);
      scene.add(purpleLight);

      const rimLight = new THREE.DirectionalLight(0xffd700, 1);
      rimLight.position.set(0, 5, -5);
      scene.add(rimLight);

      // Group
      const group = new THREE.Group();
      scene.add(group);

      // Main octahedron
      const octGeo = new THREE.OctahedronGeometry(1.5, 0);
      const octMat = new THREE.MeshPhongMaterial({
        color: 0x1e064d,
        emissive: 0x0a0120,
        emissiveIntensity: 0.3,
        specular: 0xffd700,
        shininess: 80,
      });
      const octMesh = new THREE.Mesh(octGeo, octMat);
      group.add(octMesh);

      // Gold wireframe overlay
      const wireGeo = new THREE.OctahedronGeometry(1.52, 0);
      const wireMat = new THREE.MeshBasicMaterial({
        color: 0xffd700,
        wireframe: true,
        transparent: true,
        opacity: 0.5,
      });
      const wireMesh = new THREE.Mesh(wireGeo, wireMat);
      group.add(wireMesh);

      // Inner icosahedron
      const icoGeo = new THREE.IcosahedronGeometry(0.7, 0);
      const icoMat = new THREE.MeshPhongMaterial({
        color: 0xffd700,
        emissive: 0xb8860b,
        emissiveIntensity: 0.6,
        specular: 0xffffff,
        shininess: 120,
      });
      const icoMesh = new THREE.Mesh(icoGeo, icoMat);
      group.add(icoMesh);

      // Orbiting small spheres
      const orbitGroup = new THREE.Group();
      group.add(orbitGroup);

      const orbitColors = [0xffd700, 0xb8860b, 0x7b2fff, 0xffffff];
      const orbitSpheres = [];

      for (let i = 0; i < 4; i++) {
        const sGeo = new THREE.SphereGeometry(0.1, 16, 16);
        const sMat = new THREE.MeshPhongMaterial({
          color: orbitColors[i],
          emissive: orbitColors[i],
          emissiveIntensity: 0.5,
          specular: 0xffffff,
          shininess: 100,
        });
        const sMesh = new THREE.Mesh(sGeo, sMat);
        const angle = (i / 4) * Math.PI * 2;
        const radius = 2.4;
        sMesh.position.set(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius * 0.4,
          Math.sin(angle) * radius
        );
        orbitGroup.add(sMesh);
        orbitSpheres.push({ mesh: sMesh, speed: 0.5 + i * 0.1 });
      }

      // Floating particles
      // const particlesGeo = new THREE.BufferGeometry();
      // const particleCount = 80;
      // const positions = new Float32Array(particleCount * 3);
      // for (let i = 0; i < particleCount; i++) {
      //   positions[i * 3] = (Math.random() - 0.5) * 10;
      //   positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      //   positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      // }
      // particlesGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      // const particlesMat = new THREE.PointsMaterial({
      //   color: 0xffd700,
      //   size: 0.06,
      //   transparent: true,
      //   opacity: 0.7,
      // });
      // const particles = new THREE.Points(particlesGeo, particlesMat);
      // scene.add(particles);

      // Rings
      const ringGeo = new THREE.TorusGeometry(2.1, 0.02, 8, 80);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xffd700,
        transparent: true,
        opacity: 0.5,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 3;
      group.add(ring);

      const ring2Geo = new THREE.TorusGeometry(1.85, 0.015, 8, 80);
      const ring2Mat = new THREE.MeshBasicMaterial({
        color: 0xb8860b,
        transparent: true,
        opacity: 0.4,
      });
      const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
      ring2.rotation.x = Math.PI / 2.2;
      ring2.rotation.y = Math.PI / 4;
      group.add(ring2);

      // Resize
      const handleResize = () => {
        const w = mount.clientWidth;
        const h = mount.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", handleResize);

      // Mouse
      let mouseX = 0;
      const handleMouse = (e) => {
        const rect = mount.getBoundingClientRect();
        mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      };
      mount.addEventListener("mousemove", handleMouse);

      // Clock
      let startTime = performance.now();

      const animate = () => {
        animId = requestAnimationFrame(animate);
        const t = (performance.now() - startTime) / 1000;

        group.rotation.y = t * 0.4 + mouseX * 0.3;
        group.rotation.x = Math.sin(t * 0.2) * 0.3;

        icoMesh.rotation.y = -t * 0.8;
        icoMesh.rotation.x = t * 0.5;

        orbitSpheres.forEach(({ mesh, speed }, i) => {
          const a = t * speed + (i / 4) * Math.PI * 2;
          const r = 2.4;
          mesh.position.set(Math.cos(a) * r, Math.sin(a) * r * 0.4, Math.sin(a) * r);
        });

        ring.rotation.z = t * 0.3;
        ring2.rotation.z = -t * 0.2;

        group.position.y = Math.sin(t * 0.5) * 0.1;

        goldLight.intensity = 2.5 + Math.sin(t * 1.5) * 1;
        goldLight.position.x = Math.cos(t * 0.5) * 4;
        goldLight.position.y = Math.sin(t * 0.7) * 3;

        // particles.rotation.y = t * 0.02;
        // particles.rotation.x = t * 0.01;

        renderer.render(scene, camera);
      };
      animate();

      cleanupFn = () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("resize", handleResize);
        mount.removeEventListener("mousemove", handleMouse);
        renderer.dispose();
        if (mount.contains(renderer.domElement)) {
          mount.removeChild(renderer.domElement);
        }
      };
    }

    return () => {
      if (cleanupFn) cleanupFn();
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: 'auto',
        minHeight: "600px",
        // background: "radial-gradient(ellipse at center, #0d0030 0%, #000010 100%)",
      }}
    />
  );
}