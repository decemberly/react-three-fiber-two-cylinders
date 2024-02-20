

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import {
    useScroll
} from "@react-three/drei";
import CardGroup from './CardGroup';

export default function Experience() {
    const scroll = useScroll();
    const wheel1 = useRef();
    const wheel2 = useRef();

    useFrame(() => {
        wheel1.current.rotation.x = scroll.offset * Math.PI * 2;
        wheel2.current.rotation.x = scroll.offset * Math.PI * -2;
    });

    return (
        <>
            <group ref={wheel1} rotation={ [Math.PI / 2, 0, Math.PI / 2]}>
                <mesh>
                    <cylinderGeometry args={[50, 50, 60, 32, 1, true]} />
                    <meshBasicMaterial color={0x2194ce} wireframe />
                </mesh>
                <CardGroup radius={50} width={60} wheel="back" />
            </group>
            <group ref={wheel2} rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[0,0,66]}>
                <mesh>
                    <cylinderGeometry args={[50, 50, 10, 32, 1, true]} />
                    <meshBasicMaterial color="red" wireframe />
                </mesh>
                <CardGroup radius={50} width={10} wheel="front" />
            </group>
        </>
    )
}