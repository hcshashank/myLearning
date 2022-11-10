import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
 
function Cylinder3d(props) {
 
  const ref = useRef();

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame(() => (ref.current.rotation.x =ref.current.rotation.y += 0.01));
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <cylinderGeometry args={[1,0,1]} />
      <meshStandardMaterial
        wireframe={props.wireframe}  
        color={hovered ? "hotpink" : "orange"}
      />
    </mesh>
  );
}
 
export default Cylinder3d;