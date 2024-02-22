import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import {
  ScrollControls
} from "@react-three/drei";
import Experience from './Experience'
import { Leva } from 'leva'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <Leva collapsed />
            <Canvas camera={{ fov: 75, position: [0, 0, 42] }}>
            <ScrollControls distance={8} damping={1} maxSpeed={0.2} infinite={true}> 
                <Experience />
            </ScrollControls>
        </Canvas>
    </>
)