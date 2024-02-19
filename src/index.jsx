import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import {
  ScrollControls
} from "@react-three/drei";
import Experience from './Experience'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas camera={{ fov: 75, position: [0,0,62]}}>
        <ScrollControls pages={6} damping={1}> 
            <Experience />
        </ScrollControls>
    </Canvas>
)