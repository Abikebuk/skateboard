import './Home.sass';
import {Canvas, useThree} from '@react-three/fiber';
import {Bounds, OrbitControls, useBounds, useGLTF} from '@react-three/drei';
import skateboardGltf from '../assets/skateboard-full.glb';

// eslint-disable-next-line react/display-name, react/prop-types
function Skateboard(props) {
  const {nodes} = useGLTF(skateboardGltf);
  const {width} = useThree((state) => state.viewport);
  console.log(nodes);
  return (
    <group {...props} dispose={null} scale={width}>
      {Object.keys(nodes).map((k) => loadSkateboardPart(nodes[k]))}
    </group>
  );
}
function loadAll(node) {
  if (node.type === 'Object3D' && node.visible === true) {
    return <Bounds fit clip observe damping={6} margin={1.2}>
      {loadGroup(node)}
    </Bounds>;
  }
  if (node.type ==='Group') {
    return loadGroup(node);
  }
  if (node.type === 'Mesh' && node.visible === true) {
    return loadMesh(node);
  }
}

function loadMesh(node) {
  const api = useBounds();

  return (
    <mesh
      key={node.name}
      geometry={node.geometry}
      position={node.position}
      scale={node.scale}
      rotation={node.rotation}
      material={node.material}
      onClick={(e) => {
        console.log(e);
        e.stopPropagation();
        e.delta <= 5 && api.refresh(e.object).fit();
      }
      }
      onPointerMissed={(e) => e.button === 0 && api.refresh().fit()}
    >
      {node.children.map((children) => loadAll(children))}
    </mesh>
  );
}

function loadGroup(node) {
  return (
    <group
      key={node.name}
      position={node.position}
      rotation={node.rotation}
      scale={node.scale}
    >
      {node.children.map((children) => loadAll(children))}
    </group>
  );
}

function loadSkateboardPart(node) {
  switch (node.name) {
    case 'Skateboard_Sub_assembly1':
      return (loadAll(node.parent));
    case 'Skateboard_Sub_assembly2':
      break;
    case 'Solid1':
      break;
    default:
      break;
  }
}


export default function Home() {
  return <Canvas>
    <ambientLight/>
    <Bounds fit clip observe damping={12} margin={2}>
      <Skateboard />
    </Bounds>
    <OrbitControls/>
  </Canvas>;
}
