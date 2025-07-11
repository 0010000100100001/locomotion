import { componentRegistry } from "./registry";

export default function SkeletonRenderer({ node }) {
  if (!node || !node.componentType) return null;

  const Component = componentRegistry[node.componentType];
  if (!Component) {
    console.warn(`Component not found for type: ${node.componentType}`);
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
    </Component>
  );
}
