// components/RenderSkeleton.js
import { componentRegistry } from "./registry";

export default function RenderSkeleton({ node }) {
  if (!node || !node.component_type) return null;

  const Component = componentRegistry[node.component_type];
  if (!Component) {
    console.warn(`Unknown component_type: ${node.component_type}`);
    return null;
  }

  const { props = {}, children = [] } = node;

  // Extract className from style
  const actualProps = { ...props, className: props.style };
  delete actualProps.style;

  return (
    <Component {...actualProps}>
      {Array.isArray(children)
        ? children.map((child) => (
            <RenderSkeleton key={child.id || child.component_type} node={child} />
          ))
        : null}
    </Component>
  );
}
