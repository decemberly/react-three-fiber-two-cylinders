import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import {
  ScrollControls
} from "@react-three/drei";
import Experience from './Experience'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas camera={{ fov: 75, position: [0,0,32]}}>
        <ScrollControls distance={8} damping={1} infinite={true}> 
            <Experience />
        </ScrollControls>
    </Canvas>
)