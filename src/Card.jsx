import { useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function Card({ radius, wheel }) {
    const image = useLoader(TextureLoader, 'https://images.unsplash.com/photo-1542037237840-e4817c5b6d6e?q=80&w=2812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    const panel = useRef();

    // Randomly position panels on the globe
    const randomAngle = Math.random() * Math.PI * 2;

    const x = Math.cos(randomAngle) * radius * getRandomArbitrary(0.8,1);
    const y = wheel === 'front' ? getRandomArbitrary(-5, 5) : getRandomArbitrary(-45, 45);
    const z = Math.sin(randomAngle) * radius * getRandomArbitrary(0.8,1);
    
    const position = [
        x,
        y,
        z
    ]

    useFrame(() => {
        if (wheel === 'front') {
            panel.current.lookAt(0, 0, -20);
        } else { 
            panel.current.lookAt(0, 0, 40);
        }
    })

    return (
        <mesh ref={panel} position={position}>
            <boxGeometry args={[0.7, 1, 0.01]} />
            <meshBasicMaterial map={image} />
        </mesh>
    )
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}