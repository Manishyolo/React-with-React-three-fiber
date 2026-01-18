import React from "react";
import * as THREE from "three"
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import { DirectionalLight } from "three";
import { color, log, normalMap } from "three/tsl";
const Dog = () => {
 
    const model = useGLTF("/models/dog.drc.glb");
    useThree(({camera,scene,gl})=>{
        camera.position.z = 0.6;
       gl.toneMapping = THREE.ReinhardToneMapping
       gl.outputColorSpace = THREE.SRGBColorSpace;
        console.log(camera.position)
    })

    // const textures = useTexture({
    //    normalMap:"/models/dog_normals.jpg",
    //    sampleMatCap:"/matCap/mat-2.png"
    // })
    const [normalMap,sampleMatCap] = (useTexture(["/models/dog_normals.jpg","/matCap/mat-2.png"])).map((texture)=>{
          texture.flipY = false;
          texture.colorSpace = THREE.SRGBColorSpace
          return texture;
    })

 
    model.scene.traverse((child)=>{
        if(child.name.includes("DOG")){
          child.material = new THREE.MeshMatcapMaterial({
            normalMap:normalMap,
            matcap:sampleMatCap
          })
        }
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
