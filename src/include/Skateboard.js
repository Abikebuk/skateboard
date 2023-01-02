import {Canvas, useThree} from '@react-three/fiber'
import {Bounds, ContactShadows, Float, OrbitControls, useBounds, useGLTF} from '@react-three/drei'
import skateboardGltf from '../assets/skateboard-full.glb'

function SkateboardModel(props) {
  const {nodes} = useGLTF(skateboardGltf)
  const {width} = useThree((state) => state.viewport)
  // const skateboard = Object.keys(nodes).map((k) => loadSkateboardPart(nodes[k]))
  console.log(nodes)
  const skateboard = nodes.Skateboard_Sub_assembly1.parent.children
  console.log(skateboard)
  return (
    <group {...props} dispose={null} scale={width}>
      { skateboard.map((k) => loadMainPart(k))}
    </group>
  )
}

function loadAll(node) {
  if (node.type === 'Object3D' && node.visible === true) {
    return <Bounds fit clip observe damping={6} margin={1.2}>
      {loadGroup(node)}
    </Bounds>
  }
  if (node.type ==='Group') {
    return loadGroup(node)
  }
  if (node.type === 'Mesh' && node.visible === true) {
    return loadMesh(node)
  }
}

function loadMesh(node) {
  const api = useBounds()

  return (
    <mesh
      key={node.name}
      geometry={node.geometry}
      position={node.position}
      scale={node.scale}
      rotation={node.rotation}
      material={node.material}
    >
      {node.children.map((children) => loadAll(children))}
    </mesh>
  )
}

function loadGroupInteractable(node) {
  const api = useBounds()
  {
    return (
      <group
        key={node.name}
        position={node.position}
        rotation={node.rotation}
        scale={node.scale}
        onClick={(e) => {
          console.log(e)
          e.stopPropagation()
          node.delta <= 2 && api.refresh(node).fit()
        }
        }
        onPointerMissed={(e) => e.button === 0 && api.refresh().fit()}
      >
        {node.children.map((children) => loadAll(children))}
      </group>
    )
  }
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
  )
}

function loadMainPart(node) {
  console.log(node.name)
  switch (node.name) {
    case 'Skateboard_Sub_assembly1':
      return <Bounds fit clip observe damping={6} margin={1.2}>
        {loadGroupInteractable(node)}
      </Bounds>
    case 'board1':
      return <Bounds fit clip observe damping={6} margin={1.2}>
        {loadGroupInteractable(node)}
      </Bounds>
    case 'Skateboard_Sub_assembly2':
      return <Bounds fit clip observe damping={6} margin={1.2}>
        {loadGroupInteractable(node)}
      </Bounds>
  }
}

function loadSkateboardPart(node) {
  switch (node.name) {
    case 'Skateboard_Sub_assembly1':
      return (loadAll(node.parent))
    case 'Skateboard_Sub_assembly2':
      break
    case 'Solid1':
      break
    default:
      break
  }
}


export default function Skateboard() {
  return <Canvas camera={{position: [0, -10, 80], fov: 50}} dpr={[1, 2]}>
    <Float
      speed={1}
      rotationIntensity={0.3}
      floatIntensity={1}
      floatingRange={[-0.2, 0.2]}
    >
      <Bounds fit clip observe damping={12} margin={2}>
        <SkateboardModel />
      </Bounds>
    </Float>
    <spotLight position={[-100, -100, -100]} intensity={0.2} angle={0.3} penumbra={1} />
    <hemisphereLight color="white" groundColor="#ffffff" position={[-7, 25, 13]} intensity={1} />

    <ContactShadows
      rotation-x={Math.PI / 2} position={[0, -35, 0]}
      opacity={0.2} width={200}
      height={200} blur={1} far={50} />
    <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} />
  </Canvas>
}
