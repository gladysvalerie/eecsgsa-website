/* eslint-disable react/no-unknown-property */
import React from "react";
import * as THREE from 'three';
import { useRef, useState, useEffect } from 'react';
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber';
import { useFBO, useGLTF, MeshTransmissionMaterial, Image, Preload } from '@react-three/drei';
import { easing } from 'maath';
import orientationImage from "../../assets/orientation.jpg";

// ---------- MAIN COMPONENT ----------
export default function FluidGlassLens() {
  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 15 }} gl={{ alpha: true }}>
      <Scene />
      <Preload />
    </Canvas>
  );
}

// ---------- SCENE WITH BACKGROUND + LENS ----------
function Scene() {
  const buffer = useFBO();
  const { viewport } = useThree();
  const [scene] = useState(() => new THREE.Scene());
  const ref = useRef();

  // --- background image ---
  const background = (
    <group>
      <Image
        url={orientationImage}
        scale={[viewport.width, viewport.height, 1]}
        position={[0, 0, 0]}
      />
    </group>
  );

  // --- mirror background into buffer ---
  useFrame((state, delta) => {
    const { gl, camera, pointer, viewport: vp } = state;
    const v = vp.getCurrentViewport(camera, [0, 0, 15]);
    const destX = (pointer.x * v.width) / 2;
    const destY = (pointer.y * v.height) / 2;

    easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta);

    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);
    gl.setClearColor(0x000000, 0); // transparent background
  });

  // --- create background in separate scene ---
  return (
    <>
      {createPortal(background, scene)}
      {/* Show the background normally */}
      {background}

      {/* The moving glass lens */}
      <Lens ref={ref} buffer={buffer.texture} />
    </>
  );
}

// ---------- LENS OBJECT ----------
const Lens = React.forwardRef(function Lens({ buffer }, ref) {
  const { nodes } = useGLTF('/3d/lens.glb');
  const geometry = nodes?.Cylinder?.geometry;

  return (
    <mesh ref={ref} geometry={geometry} rotation-x={Math.PI / 2} scale={0.15}>
      <MeshTransmissionMaterial
        buffer={buffer}
        ior={1.15}
        thickness={5}
        anisotropy={0.01}
        chromaticAberration={0.1}
        transmission={1}
        roughness={0}
      />
    </mesh>
  );
});
