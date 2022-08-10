import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
// import ThreeTypes from '@types/three';
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei';



type ThreeDTypeProps = {
  src: string;
  height?: number;
  width?: number;
};

const GltfType = ({ src, ...props }: ThreeDTypeProps): JSX.Element => {
  const modelRef = useRef<THREE.Mesh>(null);
  const { nodes } = useGLTF(src) as any;
  const [geometry, setGeometry] = useState();
  const [material, setMaterial] = useState();

  useFrame(({ clock }) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = clock.getElapsedTime();
    }
  });

  useEffect(() => {
    if (nodes) {
      console.log(nodes);
      for (const node in nodes) {
        if (nodes[node].geometry) {
          setGeometry(nodes[node].geometry);
        }
        if (nodes[node].material) {
          setMaterial(nodes[node].material);
        }
      }
    }
  }, [nodes]);
  return (
    <group {...props} dispose={null}>
      <group scale={3}>
        <mesh
          ref={modelRef}
          castShadow
          receiveShadow
          geometry={geometry}
          material={material}
          scale={0.88}
        />
      </group>
    </group>
  );
};

export default function ModelType({ src, width, height, ...props }: ThreeDTypeProps): JSX.Element {
  return (
    <>
    3D Component
    <div
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <Suspense fallback={<>Loading</>}>
        <Canvas {...props} shadows>
          <GltfType src={src} />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
        </Canvas>
      </Suspense>
    </div>
    </>
  );
}

