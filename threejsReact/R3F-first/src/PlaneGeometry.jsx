import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'
import { DoubleSide } from 'three';

const PlaneGeometry = (props) => {
    const ref = useRef();

    const [over, setOver] = useState(false)
    const [click, setClick] =useState(false)
  return (
    <mesh
    ref={ref}
    {...props}
    onClick={()=>setClick(!click)}
    onPointerOver={()=>setOver(true)}
    onPointerOut={()=>setOver(false)}
    position={[0,0.5,0]}
    >
        <planeBufferGeometry args={[8,8]} />
        <meshBasicMaterial attach="material"  side={DoubleSide}
         color={'red'}/>
    </mesh>
  )
}

export default PlaneGeometry