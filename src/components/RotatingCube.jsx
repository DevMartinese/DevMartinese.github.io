import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const RotatingCube = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.5;
    meshRef.current.rotation.y += delta * 0.5;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#666666" />
    </mesh>
  );
};

export default RotatingCube; 