import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";

const Astronaut = ({ scene }) => {
  useEffect(() => {
    const loader = new GLTFLoader();
    let astronaut;

    loader.load("/models/astronaut.glb", (gltf) => {
      astronaut = gltf.scene;

      // size & position
      astronaut.scale.set(0.5, 0.5, 0.5);
      astronaut.position.set(2, 1, 0);

      // 👉 make it black & white
      astronaut.traverse((child) => {
        if (child.isMesh) {
          child.material.color.set(0xffffff);
          child.material.emissive.set(0x111111);
        }
      });

      scene.add(astronaut);

      // 🌊 floating animation
      gsap.to(astronaut.position, {
        y: "+=0.5",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 🔄 slow rotation
      gsap.to(astronaut.rotation, {
        y: Math.PI * 2,
        duration: 20,
        repeat: -1,
        ease: "linear",
      });
    });

    // cleanup (important)
    return () => {
      if (astronaut) {
        scene.remove(astronaut);
      }
    };
  }, [scene]);

  return null; // nothing to render in DOM
};

export default Astronaut;