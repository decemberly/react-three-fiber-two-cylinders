

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import {
    useScroll
} from "@react-three/drei";
import CardGroup from './CardGroup';

export default function Experience({wireframes}) {
    const scroll = useScroll();
    const wheel1 = useRef();
    const wheel2 = useRef();

    useFrame(() => {
        wheel1.current.rotation.x = scroll.offset * Math.PI * -1;
        wheel2.current.rotation.x = scroll.offset * Math.PI * 0.6;
    });

    return (
        <>
            <group ref={wheel1} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                { wireframes && 
                    <mesh>
                        <cylinderGeometry args={[70, 70, 40, 32, 1, true]} />
                        <meshBasicMaterial color={0x2194ce} wireframe />
                    </mesh>
                }
                <CardGroup radius={70} width={60} wheel="back" />
            </group>
            <group ref={wheel2} rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[0, 0, 117]}>
                { wireframes && 
                    <mesh>
                        <cylinderGeometry args={[80, 80, 3, 32, 1, true]} />
                        <meshBasicMaterial color="red" wireframe />
                    </mesh>
                }
                <CardGroup radius={80} width={10} wheel="front" />
            </group>
        </>
    )
}