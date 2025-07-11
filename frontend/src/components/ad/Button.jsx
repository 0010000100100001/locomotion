// src/components/Button.jsx
export default function Button({ label, className = "", url = null }) {
  return (
    <>
      {(!url) ? <span className={className}>{label}</span> : <a href={url} className={className}>{label}</a>}
    </>
  );
}
