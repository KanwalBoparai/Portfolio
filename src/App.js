import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import earthTexture from './Mars.webp'; // Replace with the actual path to your earth texture image

function CustomSphere() {
  return (
    <mesh>
      <sphereGeometry args={[5, 32, 32]} attach="geometry" />
      <meshLambertMaterial attach="material" map={new THREE.TextureLoader().load(earthTexture)} />
    </mesh>
  );
}

function App() {
  return (
    <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [10, -40, 0] }}
    style={{ background: "#000"}}
    dpr={Math.max(window.devicePixelRatio, 2)}
    >
      <Stars />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <CustomSphere />
    </Canvas>
  );
}

export default App;
