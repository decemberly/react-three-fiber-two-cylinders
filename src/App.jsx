
import { useState } from 'react';
import { Canvas } from '@react-three/fiber'
import {
  ScrollControls
} from "@react-three/drei";
import Experience from './Experience'

export default function App() {
    const [wireframes, setWireframes] = useState(false);

    return (
        <>
            <button onClick={() => setWireframes(!wireframes)} style={{fontSize: 22, margin: 10, position: 'absolute', zIndex: 9999}}>Toggle wireframes</button>
            <Canvas camera={{ fov: 75, position: [0, 0, 42] }}>
                <ScrollControls distance={8} damping={1} infinite={true}> 
                    <Experience wireframes={wireframes} />
                </ScrollControls>
            </Canvas>
        </>
    );
}