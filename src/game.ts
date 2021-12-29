let stage = new Entity()
stage.addComponent(new GLTFShape("models/Theatre.gltf"))
stage.addComponent(new Transform({
  position: new Vector3(8, 0, 8),
  rotation: Quaternion.Euler(0, 90, 0)
}))
engine.addEntity(stage)
// Define a reusable Cylinder shape component
let CylinderWCollisions = new CylinderShape()
CylinderWCollisions.withCollisions = true