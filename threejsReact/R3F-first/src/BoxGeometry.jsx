import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { useState } from 'react'

const BoxGeometry = (props) => {
    const ref = useRef()
    const [hover , setHover] = useState()
    const [click, setClick] = useState()
    useFrame(()=>ref.current.rotation.y +=0.01)
  return (
    <mesh
    {...props}
    ref = {ref}
    scale={click?1.5:1}
    onClick={()=>setClick(!click)}
    onPointerOver={()=>setHover(true)}
    onPointerOut={()=>setHover(false)}
    >
    <boxGeometry args={[1,1,1]}/>
    <meshBasicMaterial
    wireframe= {props.wireframe}
    color={hover?'blue':'green'}
    />

    </mesh>
  )
}

export default BoxGeometry