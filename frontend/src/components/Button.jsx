// src/components/Button.jsx
export default function Button({ label, className = "", onClick, url }) {
  const Element = url ? "a" : "button";
  return (
    <Element
      href={url}
      onClick={onClick}
      className={`px-4 py-2 rounded-full bg-pink-600 hover:bg-pink-700 text-white text-sm ${className}`}
    >
      {label}
    </Element>
  );
}
