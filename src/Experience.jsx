import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import {
    useScroll
} from "@react-three/drei";
import { useControls } from 'leva'
import CardGroup from './CardGroup';

export default function Experience() {
    const scroll = useScroll();
    const backWheel = useRef();
    const frontWheel = useRef();

    const { backWheelSize, cylinderVisibility } = useControls({ 
        backWheelSize: {
            value: 80,
            min: 30,
            max: 400
        },
        cylinderVisibility: false
    });

    useFrame(() => {
        backWheel.current.rotation.x = scroll.offset * Math.PI * -1;
        frontWheel.current.rotation.x = scroll.offset * Math.PI * 0.6;
    });

    return (
        <>
            <group ref={backWheel} rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[0, 0, - backWheelSize + 80]}>
                    <mesh visible={cylinderVisibility}>
                        <cylinderGeometry args={[backWheelSize, backWheelSize, backWheelSize, 32, 1, true]} />
                        <meshBasicMaterial color={0x2194ce} wireframe />
                    </mesh>
                <CardGroup radius={backWheelSize} width={backWheelSize * 0.75} wheel="back" />
            </group>
            <group ref={frontWheel} rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[0, 0, 117]}>
                    <mesh visible={cylinderVisibility}>
                        <cylinderGeometry args={[80, 80, 3, 32, 1, true]} />
                        <meshBasicMaterial color="red" wireframe />
                    </mesh>
                <CardGroup radius={80} width={10} wheel="front" />
            </group>
        </>
    )
}