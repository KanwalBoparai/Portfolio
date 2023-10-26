import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import earthTexture from './mars1.jpg'; // Adjust the path to your earth texture image
import gsap from 'gsap';

function CustomSphere() {
  const cameraRef = useRef(null);
  useEffect(() => {
    if (!!cameraRef.current) {
      gsap.to(cameraRef.current.position, {
        z: -60,
        duration: 3
      });
    }
  }, [cameraRef.current]);

  return (
    <>
      <Stars />
      <ambientLight intensity={0.5} />
      <mesh ref={cameraRef}>
        <sphereGeometry args={[5, 32, 32]} attach="geometry" />
        <meshLambertMaterial attach="material" map={new THREE.TextureLoader().load(earthTexture)} />
      </mesh>
    </>
  );
}

function App() {
  return (
    <>
    <Canvas
      style={{ background: "#000" }}
      camera={{ fov: 75, near: 0.1, far: 1000 }}
      dpr={Math.max(window.devicePixelRatio, 2)}
    >
      <OrbitControls />
      <CustomSphere />
    </Canvas>
    </>
  );
}

export default App;
