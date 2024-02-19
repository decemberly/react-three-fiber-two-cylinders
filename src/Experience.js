

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import {
    useScroll
} from "@react-three/drei";
import CardGroup from './CardGroup';

export default function Experience() {
    const scroll = useScroll();
    const scene = useRef();
    const sphere = useRef();

    useFrame(() => (scene.current.rotation.x = scroll.offset * Math.PI * 2));

    return (
        <group ref={scene}>
            <mesh ref={sphere} rotation={ [Math.PI / 2, 0, Math.PI / 2]}>
                <sphereGeometry args={[70, 32, 32]} />
                <meshBasicMaterial color={0x2194ce} wireframe />
            </mesh>
            <CardGroup />
        </group>
    )
}