import * as THREE from "three";

export const GenerateInitMaterials = () => {
  const reactTexture = new THREE.TextureLoader().load("/React.png");
  reactTexture.flipY = false;

  const cristalMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x8c8c8c,
    metalness: 0.0,
    roughness: 0.2,
    transparent: true,
    opacity: 1,
    envMapIntensity: 1.0,
    transmission: 1,
  });

  const sodaMaterial = new THREE.MeshStandardMaterial({
    color: 0x000,
    roughness: 1,
    opacity: 1,
    metalness: 1,
    transparent: false,
  });

  const brandMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.5,
    metalness: 1,
    envMapIntensity: 1,
    transparent: true,
    map: reactTexture,
  });

  return { cristalMaterial, sodaMaterial, brandMaterial };
};

export const LoadTextures = (imagePaths) => {
  const textureLoader = new THREE.TextureLoader();
  const textures = {};

  imagePaths.forEach((img) => {
    const path = `/${img}.png`;
    const texture = textureLoader.load(path);
    texture.flipY = false;
    textures[img] = texture;
  });

  return textures;
};

export const GenerateAnimations = (
  scene,
  colors,
  cristalMaterial,
  sodaMaterial,
  brandMaterial,
  textures
) => {
  const Animations = [
    // Init Animations - Page 0
    {
      target: scene.getObjectByName("BottleGroup").position,
      pointTime: 0,
      animationsProperties: {
        x: 0,
        onUpdate: () => {},
      },
    },
    {
      target: scene.getObjectByName("BottleGroup").rotation,
      pointTime: 0,
      animationsProperties: {
        y: 0,
        onUpdate: () => {},
      },
    },
    {
      target: colors,
      pointTime: 0,
      animationsProperties: {
        cristal: "#8c8c8c",
        soda: "#000",
        onUpdate: () => {
          cristalMaterial.color.set(
            new THREE.Color(colors.cristal.replace(",1)", ")"))
          );
          cristalMaterial.needsUpdate = true;

          sodaMaterial.color.set(
            new THREE.Color(colors.soda.replace(",1)", ")"))
          );
          sodaMaterial.needsUpdate = true;
        },
      },
    },
    {
      target: colors,
      pointTime: 0.5,
      animationsProperties: {
        onUpdate: () => {
          brandMaterial.map = textures["React"];
          brandMaterial.needsUpdate = true;
        },
      },
    },
    {
      target: document.getElementById("bg_container"),
      pointTime: 0.1,
      animationsProperties: {
        background: "#000000",
      },
    },

    // Coca Cola - Page 1
    {
      target: scene.getObjectByName("BottleGroup").position,
      pointTime: 2,
      animationsProperties: {
        x: 1.5,
        onUpdate: () => {},
      },
    },
    {
      target: scene.getObjectByName("BottleGroup").rotation,
      pointTime: 2,
      animationsProperties: {
        y: Math.PI * 2,
        onUpdate: () => {},
      },
    },
    {
      target: colors,
      pointTime: 2,
      animationsProperties: {
        cristal: "#555555",
        soda: "#000000",
        onUpdate: () => {
          cristalMaterial.color.set(
            new THREE.Color(colors.cristal.replace(",1)", ")"))
          );
          cristalMaterial.needsUpdate = true;

          sodaMaterial.color.set(
            new THREE.Color(colors.soda.replace(",1)", ")"))
          );
          sodaMaterial.needsUpdate = true;
        },
      },
    },
    {
      target: colors,
      pointTime: 3,
      animationsProperties: {
        onUpdate: () => {
          brandMaterial.map = textures["CocaCola"];
          brandMaterial.needsUpdate = true;
        },
      },
    },
    {
      target: document.getElementById("CocaCola_Card"),
      pointTime: 2.5,
      animationsProperties: {
        opacity: 1,
        left: "25%",
        onUpdate: () => {},
      },
    },
    {
      target: document.getElementById("bg_container"),
      pointTime: 2.1,
      animationsProperties: {
        background: "#F37070",
      },
    },
    //   Pepsi - Page 2
    {
      target: scene.getObjectByName("BottleGroup").position,
      pointTime: 4,
      animationsProperties: {
        x: -2,
        onUpdate: () => {},
      },
    },
    {
      target: scene.getObjectByName("BottleGroup").rotation,
      pointTime: 4,
      animationsProperties: {
        y: -Math.PI * 2,
        onUpdate: () => {},
      },
    },
    {
      target: colors,
      pointTime: 4,
      animationsProperties: {
        cristal: "#555555",
        soda: "#000000",
        onUpdate: () => {
          cristalMaterial.color.set(
            new THREE.Color(colors.cristal.replace(",1)", ")"))
          );
          cristalMaterial.needsUpdate = true;

          sodaMaterial.color.set(
            new THREE.Color(colors.soda.replace(",1)", ")"))
          );
          sodaMaterial.needsUpdate = true;
        },
      },
    },
    {
      target: colors,
      pointTime: 5,
      animationsProperties: {
        onUpdate: () => {
          brandMaterial.map = textures["Pepsi"];
          brandMaterial.needsUpdate = true;
        },
      },
    },
    {
      target: document.getElementById("Pepsi_Card"),
      pointTime: 4.5,
      animationsProperties: {
        opacity: 1,
        left: "65%",
        onUpdate: () => {},
      },
    },
    {
      target: document.getElementById("CocaCola_Card"),
      pointTime: 4.5,
      animationsProperties: {
        opacity: 0,
        left: "50%",
        duration: 0.5,
        onUpdate: () => {},
      },
    },
    {
      target: document.getElementById("bg_container"),
      pointTime: 4.1,
      animationsProperties: {
        background: "#71C4F4",
      },
    },
    // Fanta - Page 3
    {
      target: scene.getObjectByName("BottleGroup").position,
      pointTime: 6,
      animationsProperties: {
        x: 1,
        onUpdate: () => {},
      },
    },
    {
      target: scene.getObjectByName("BottleGroup").rotation,
      pointTime: 6,
      animationsProperties: {
        y: Math.PI * 2,
        onUpdate: () => {},
      },
    },
    {
      target: colors,
      pointTime: 6.1,
      animationsProperties: {
        cristal: "#ff9900",
        soda: "#ffcccc",
        onUpdate: () => {
          cristalMaterial.color.set(
            new THREE.Color(colors.cristal.replace(",1)", ")"))
          );
          cristalMaterial.needsUpdate = true;

          sodaMaterial.color.set(
            new THREE.Color(colors.soda.replace(",1)", ")"))
          );
          sodaMaterial.needsUpdate = true;
        },
      },
    },
    {
      target: colors,
      pointTime: 7,
      animationsProperties: {
        onUpdate: () => {
          brandMaterial.map = textures["Fanta"];
          brandMaterial.needsUpdate = true;
        },
      },
    },
    {
      target: document.getElementById("Fanta_Card"),
      pointTime: 6.5,
      animationsProperties: {
        opacity: 1,
        left: "25%",
        onUpdate: () => {},
      },
    },
    {
      target: document.getElementById("Pepsi_Card"),
      pointTime: 6.5,
      animationsProperties: {
        opacity: 0,
        left: "50%",
        duration: 0.5,
        onUpdate: () => {},
      },
    },
    {
      target: document.getElementById("bg_container"),
      pointTime: 6.1,
      animationsProperties: {
        background: "#c98300",
      },
    },
  ];
  return Animations;
};
