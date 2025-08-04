import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function FloatingBox({ position, rotationSpeed, color }) {
  const ref = useRef();

  // Animate rotation every frame
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += rotationSpeed;
      ref.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        {/* Lights for nice shading */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} />

        {/* Floating Boxes */}
        <FloatingBox position={[-2, 1, -3]} rotationSpeed={0.01} color="#ff7eb9" />
        <FloatingBox position={[2, -1, -4]} rotationSpeed={0.015} color="#7afcff" />
        <FloatingBox position={[0, 0, -2]} rotationSpeed={0.02} color="#feff9c" />
      </Canvas>
    </div>
  );
}
