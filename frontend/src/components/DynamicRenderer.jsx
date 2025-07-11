// src/components/DynamicRenderer.jsx
import { componentRegistry } from "./registry";

export default function DynamicRenderer({ node }) {
  if (!node || !node.componentType) return null;

  const Component = componentRegistry[node.componentType];

  if (!Component) {
    console.warn(`Unknown component type: ${node.componentType}`);
    return null;
  }

  const { props = {}, children = [] } = node;

  return (
    <Component {...props}>
      {Array.isArray(children) &&
        children.map((child, index) => (
          <DynamicRenderer key={index} node={child} />
        ))}
    </Component>
  );
}
