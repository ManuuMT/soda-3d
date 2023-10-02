import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap, { Power4 } from "gsap";
import React, { useLayoutEffect } from "react";
import {
  GenerateAnimations,
  GenerateInitMaterials,
  LoadTextures,
} from "./Utils";

const Bottle = (props) => {
  const { cristalMaterial, sodaMaterial, brandMaterial } =
    GenerateInitMaterials();
  const scene = useThree((state) => state.scene);
  const timeline = gsap.timeline({ defaults: { duration: 2, ease: Power4 } });
  const { nodes, materials } = useGLTF("/Bottle.glb");
  const scroll = useScroll();

  const colorsMaterial = {
    cristal: "#8c8c8c",
    soda: "#000",
  };

  useLayoutEffect(() => {
    const textures = LoadTextures(["React", "CocaCola", "Pepsi", "Fanta"]);

    const animations = GenerateAnimations(
      scene,
      colorsMaterial,
      cristalMaterial,
      sodaMaterial,
      brandMaterial,
      textures
    );

    animations.map((animation) => {
      timeline.to(
        animation.target,
        {
          ...animation.animationsProperties,
        },
        animation.pointTime
      );
    });

    // timeline.to(bottleGroup.rotation, { y: Math.PI * 2 }, 2);
    // timeline.to(bottleGroup.rotation, { y: -Math.PI * 2 }, 4);
    // timeline.to(bottleGroup.rotation, { y: Math.PI * 2 }, 6);
  }, []);

  useFrame(() => {
    timeline.seek(scroll.offset * timeline.duration());
  });

  return (
    <group name="BottleGroup" {...props} dispose={null}>
      <mesh
        name="Bottle"
        geometry={nodes.Bottle.geometry}
        material={cristalMaterial}
      />
      <mesh
        name="Soda"
        geometry={nodes.Soda.geometry}
        material={sodaMaterial}
      />
      <mesh
        name="Brand"
        geometry={nodes.Brand.geometry}
        material={brandMaterial}
      />
      <mesh name="Cap" geometry={nodes.Cap.geometry} material={brandMaterial} />
    </group>
  );
};

useGLTF.preload("/Bottle.glb");
export default Bottle;
