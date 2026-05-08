import { useEffect, useRef } from "react";
import * as THREE from "three";
import P2uptext from "./P2uptext";
import P2btext from "./P2btext";
import { OrbitControls } from "three-stdlib";
import gsap from "gsap";

const Earth = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 3.8);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Controls
    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.enableDamping = true;
    

    // 🌌 Stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 3000;
    const starsPositions = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount * 3; i++) {
      starsPositions[i] = (Math.random() - 0.5) * 200;
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starsPositions, 3)
    );

    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.15,
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // 🌍 Texture
    const loader = new THREE.TextureLoader();
    const earthMap = loader.load(
      "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg"
    );

    // 🌍 Shader
    const material = new THREE.ShaderMaterial({
      uniforms: {
        map: { value: earthMap },
        lightDirection: {
          value: new THREE.Vector3(0.5, 1.0, 0.5).normalize(),
        },
      },

      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;

        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }
      `,

      fragmentShader: `
        uniform sampler2D map;
        uniform vec3 lightDirection;

        varying vec2 vUv;
        varying vec3 vNormal;

        void main() {
          vec3 tex = texture2D(map, vUv).rgb;

          float light = dot(normalize(vNormal), lightDirection);
          light = clamp(light, 0.0, 1.0);

          vec3 color = tex * light;

          // 🔥 LOW SATURATION (not dull)
          float gray = dot(color, vec3(0.299, 0.587, 0.114));
          float saturation = 0.85; // 🔥 adjust (0.7–0.9 best)
          color = mix(color, vec3(gray), saturation);

          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });

    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(1, 64, 64),
      material
    );

    // 🌟 Atmosphere (white glow, not blue)
    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.05, 64, 64),
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.05,
        side: THREE.BackSide,
      })
    );

    // 🌟 Particle Ring
    const ringGeo = new THREE.BufferGeometry();
    const count = 800;
    const pos = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const r = 1.45 + Math.random() * 0.1;

      pos[i * 3] = Math.cos(angle) * r;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.1;
      pos[i * 3 + 2] = Math.sin(angle) * r;
    }

    ringGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));

    const ring = new THREE.Points(
      ringGeo,
      new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.01,
        transparent: true,
      })
    );

    // Group
    const group = new THREE.Group();
    group.add(earth);
    group.add(atmosphere);
    group.add(ring);

    scene.add(group);
    group.position.set(1.5, 0.5, -1)
    group.rotation.z = 0.5; // fixed angle


    const setResponsive = () => {
  const width = window.innerWidth;
        console.log("inner width is ", width)
  if (width < 768) {
    // 📱 Mobile
    group.scale.set(0.9, 0.9, 0.9);   // smaller earth
    group.position.set(1, 0, 0);   // center + slightly down
    camera.position.set(0, 0, 4.5);   // zoom out
  } 
  else if (width < 1024) {
    // 📟 Tablet
    group.scale.set(1, 1, 1);
    group.position.set(0.7, 0, 0);
    camera.position.set(0, 0, 4);
  } 
  else {
    // 💻 Desktop
    group.scale.set(1.1, 1.1, 1.1);
    group.position.set(1.9, 0, 0);    // shift right for layout
    camera.position.set(0, 0, 3.5);
  }
};
  setResponsive();

    // Rotation
    gsap.to(group.rotation, {
      y: Math.PI * 2,
      duration: 50,
      repeat: -1,
      ease: "linear",
    });

    gsap.to(ring.rotation, {
      y: -Math.PI * 2,
      duration: 40,
      repeat: -1,
      ease: "linear",
    });

    // Resize
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
        setResponsive();
    };

    window.addEventListener("resize", handleResize);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
    //   controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup (FIXED ERROR)
    return () => {
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={mountRef} className="rounded-[20px] w-full h-full overflow-hidden relative">
    <P2uptext></P2uptext>
    <P2btext></P2btext>
  </div>;
};

export default Earth;