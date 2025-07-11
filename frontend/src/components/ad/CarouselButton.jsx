export default function CarouselButton({ label, className = "", url = null }) {
  return (
    <>
      {(!url) ? <span className={className}>{label}</span> : <a href={url} className={className}>{label}</a>}
    </>
  );
}
