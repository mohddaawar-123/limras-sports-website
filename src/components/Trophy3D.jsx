import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float, MeshTransmissionMaterial, Lightformer, Environment } from "@react-three/drei";
import * as THREE from "three";

function TrophyModel({ mouse }) {
  const group = useRef();
  const cupRef = useRef();

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.22;
      // subtle tilt towards pointer
      const targetX = mouse.current.y * 0.15;
      const targetZ = -mouse.current.x * 0.12;
      group.current.rotation.x += (targetX - group.current.rotation.x) * 0.04;
      group.current.rotation.z += (targetZ - group.current.rotation.z) * 0.04;
    }
  });

  const gold = (
    <meshPhysicalMaterial
      color="#d4af5a"
      metalness={1}
      roughness={0.22}
      clearcoat={1}
      clearcoatRoughness={0.15}
      reflectivity={1}
      envMapIntensity={2.2}
    />
  );

  const goldDark = (
    <meshPhysicalMaterial
      color="#a9802f"
      metalness={1}
      roughness={0.3}
      clearcoat={0.8}
      envMapIntensity={2}
    />
  );

  const black = (
    <meshPhysicalMaterial
      color="#0c0d10"
      metalness={0.4}
      roughness={0.25}
      clearcoat={1}
      clearcoatRoughness={0.1}
      envMapIntensity={1.4}
    />
  );

  return (
    <group ref={group} dispose={null}>
      {/* Base */}
      <mesh position={[0, -2.55, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.2, 0.32, 1.3]} />
        {black}
      </mesh>
      <mesh position={[0, -2.3, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.55, 0.22, 0.95]} />
        {gold}
      </mesh>

      {/* Riser column */}
      <mesh position={[0, -1.55, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.22, 0.34, 1.35, 32]} />
        {black}
      </mesh>
      <mesh position={[0, -0.85, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.42, 0.3, 0.16, 32]} />
        {gold}
      </mesh>

      {/* Cup body */}
      <group ref={cupRef} position={[0, 0.05, 0]}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.62, 0.34, 1.55, 48, 1, false]} />
          {gold}
        </mesh>
        <mesh position={[0, 0.82, 0]} castShadow receiveShadow>
          <torusGeometry args={[0.62, 0.06, 24, 48]} />
          {goldDark}
        </mesh>
        <mesh position={[0, -0.78, 0]} castShadow receiveShadow>
          <torusGeometry args={[0.36, 0.05, 24, 48]} />
          {goldDark}
        </mesh>

        {/* Handles */}
        <mesh position={[-0.78, 0.15, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <torusGeometry args={[0.32, 0.045, 16, 32, Math.PI * 1.3]} />
          {gold}
        </mesh>
        <mesh position={[0.78, 0.15, 0]} rotation={[0, Math.PI, -Math.PI / 2]} castShadow>
          <torusGeometry args={[0.32, 0.045, 16, 32, Math.PI * 1.3]} />
          {gold}
        </mesh>
      </group>

      {/* Engraved plate */}
      <mesh position={[0, -1.95, 0.66]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.9, 0.5, 0.02]} />
        <meshPhysicalMaterial
          color="#c9a24b"
          metalness={0.9}
          roughness={0.35}
          envMapIntensity={1.8}
        />
      </mesh>

      {/* Crystal finial */}
      <Float speed={2.2} rotationIntensity={0.6} floatIntensity={0.5}>
        <mesh position={[0, 1.32, 0]} castShadow>
          <octahedronGeometry args={[0.28, 0]} />
          <MeshTransmissionMaterial
            thickness={0.6}
            roughness={0.05}
            transmission={1}
            ior={1.4}
            chromaticAberration={0.04}
            anisotropy={0.3}
            distortion={0.1}
            distortionScale={0.2}
            temporalDistortion={0.1}
            color="#fff7e0"
          />
        </mesh>
      </Float>
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.25} />
      <spotLight
        position={[5, 8, 5]}
        angle={0.35}
        penumbra={1}
        intensity={3.5}
        color="#fff3da"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-5, 2, -3]} intensity={1.2} color="#c9a24b" />
      <pointLight position={[3, -2, 4]} intensity={0.6} color="#5588ff" />
      <spotLight position={[0, 6, -6]} angle={0.5} intensity={1.5} color="#ffffff" />
    </>
  );
}

function StudioEnvironment() {
  // Procedural studio lighting rig — no network fetch, builds the env map
  // in-scene from colored light panels for reliable, fast, offline-safe rendering.
  return (
    <Environment resolution={256}>
      <group>
        <Lightformer
          form="rect"
          intensity={3}
          color="#fff6df"
          position={[0, 4, 2]}
          scale={[6, 3, 1]}
          target={[0, 0, 0]}
        />
        <Lightformer
          form="rect"
          intensity={2}
          color="#d8b86a"
          position={[-5, 1, 3]}
          rotation-y={Math.PI / 3}
          scale={[4, 3, 1]}
        />
        <Lightformer
          form="rect"
          intensity={1.4}
          color="#6f8cff"
          position={[5, -1, -3]}
          rotation-y={-Math.PI / 3}
          scale={[4, 3, 1]}
        />
        <Lightformer
          form="ring"
          intensity={2.2}
          color="#ffffff"
          position={[0, -2, 4]}
          scale={3}
        />
        <Lightformer
          form="rect"
          intensity={1.2}
          color="#1a1c22"
          position={[0, 0, -6]}
          scale={[14, 10, 1]}
        />
      </group>
    </Environment>
  );
}

export default function Trophy3D({ className }) {
  const mouse = useRef({ x: 0, y: 0 });

  function handlePointerMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.current.y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
  }

  return (
    <div className={className} onPointerMove={handlePointerMove}>
      <Canvas
        shadows
        dpr={[1, 1.8]}
        camera={{ position: [0, 0.3, 6], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Lights />
          <TrophyModel mouse={mouse} />
          <ContactShadows
            position={[0, -2.74, 0]}
            opacity={0.55}
            scale={6}
            blur={2.6}
            far={3}
            color="#000000"
          />
          <StudioEnvironment />
        </Suspense>
      </Canvas>
    </div>
  );
}
