import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import {
    useScroll
} from "@react-three/drei";
import { useControls } from 'leva'
import CardGroup from './CardGroup';
import { Perf } from 'r3f-perf'

export default function Experience() {
    const scroll = useScroll();
    const backWheel = useRef();
    const frontWheel = useRef();

    const { perfVisible } = useControls({
        perfVisible: {
            label: 'Show performance',
            value: true
        }
    })

    const backWheelControls = useControls('Back Wheel', { 
        size: {
            label: 'Size',
            value: 80,
            min: 30,
            max: 400
        },
        visible: {
            label: 'Show wireframe',
            value: false
        },
        cardScale: {
            label: 'Card scale',
            value: 1,
            min: 0.1,
            max: 20,
        },
    });

    const frontWheelControls = useControls('Front Wheel', { 
        visible: {
            label: 'Show wireframe',
            value: false
        }
    });

    useFrame(() => {
        backWheel.current.rotation.x = scroll.offset * Math.PI * -1;
        frontWheel.current.rotation.x = scroll.offset * Math.PI * 0.6;
    });

    return (
        <>
            { perfVisible && 
                <Perf position="top-left" />
            }
            <group ref={backWheel} rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[0, 0, - backWheelControls.size + 80]}>
                    <mesh visible={backWheelControls.visible}>
                        <cylinderGeometry args={[backWheelControls.size, backWheelControls.size, backWheelControls.size, 32, 1, true]} />
                        <meshBasicMaterial color={0x2194ce} wireframe />
                    </mesh>
                <CardGroup cardScale={backWheelControls.cardScale} radius={backWheelControls.size} width={backWheelControls.size * 0.75} wheel="back" />
            </group>
            <group ref={frontWheel} rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[0, 0, 117]}>
                    <mesh visible={frontWheelControls.visible}>
                        <cylinderGeometry args={[80, 80, 3, 32, 1, true]} />
                        <meshBasicMaterial color="red" wireframe />
                    </mesh>
                <CardGroup radius={80} width={10} wheel="front" />
            </group>
        </>
    )
}