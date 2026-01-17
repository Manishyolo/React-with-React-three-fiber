import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { DirectionalLight } from "three";
import { log } from "three/tsl";
const Dog = () => {
 
    const model = useGLTF("/models/dog.drc.glb");
    useThree(({camera,scene,gl})=>{
        camera.position.z = 0.6;
       
        console.log(camera.position)
    })
  

  return (
    <>
      <primitive object={model.scene} position={[0.25,-0.55,0]} rotation={[0,Math.PI / 3.9,0]}></primitive>
      <directionalLight position={[0,5,5]} color={0xFFFFFF} intensity={10}></directionalLight>
      <OrbitControls/>
    </>
  );
};

export default Dog;
