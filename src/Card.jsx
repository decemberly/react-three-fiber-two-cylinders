import { useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function Card() {
    const image = useLoader(TextureLoader, 'https://images.unsplash.com/photo-1542037237840-e4817c5b6d6e?q=80&w=2812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    const panel = useRef();

    // Randomly position panels on the globe
    // const phi = Math.random() * Math.PI;
    // const theta = Math.random() * 2 * Math.PI;

    // const radius = 70 * getRandomArbitrary(0.8,1);

    // Calculate the position on the sphere
    // const position = [
    //     radius * Math.sin(phi) * Math.cos(theta),
    //     getRandomArbitrary(-10,10),
    //     radius * Math.cos(phi)
    // ];

    const radius = 50 * getRandomArbitrary(0.8,1);
    const randomAngle = Math.random() * Math.PI * 2;
    const randomHeight = Math.random() * 2;

    const x = Math.cos(randomAngle) * radius;
    const y = getRandomArbitrary(-5, 5);
    const z = Math.sin(randomAngle) * radius;
    
    const position = [
        x,
        y,
        z
    ]

    useFrame(() => {
        panel.current.lookAt(0,0,0);
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