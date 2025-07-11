import { componentRegistry } from "./registry";

export default function SkeletonRenderer({ node }) {
  if (!node || !node.component_type) return null;
  const Component = componentRegistry[node.component_type];
  if (!Component) {
    console.warn(`Component not found for type: ${node.component_type}`);
    return null;
  }

  const { props = {}, children = [] } = node;
  console.log("Rendering node:", node);
  return (
    <Component {...props}>
      {Array.isArray(children) &&
        children.map((child, index) => (
          <SkeletonRenderer key={index} node={child} />
        ))}
        World
    </Component>
  );
}
