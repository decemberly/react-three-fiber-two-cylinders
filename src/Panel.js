import { useRef } from 'react'
import { Vector3} from 'three'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function Panel() {
    const image = useLoader(TextureLoader, 'https://images.unsplash.com/photo-1542037237840-e4817c5b6d6e?q=80&w=2812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
    const panel = useRef()

    // Randomly position panels on the globe
    const phi = Math.random() * Math.PI;
    const theta = Math.random() * 2 * Math.PI;

    const radius = 70 * getRandomArbitrary(0.8,1);

    // Calculate the position on the sphere
    const position = [
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
    ];

    useFrame(() => {
        panel.current.lookAt(0,0,0)
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