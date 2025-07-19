export default function Button({ x, y, z, h, w, style, label, url }) {
  return (
    <>
      <a href={url} className={style} style={
        {
          position: "absolute",
          left: x || 0,
          top: y || 0,
          zIndex: z || 1,
          width: w || "auto",
          height: h || "auto",
        }
      }>{label}</a>
    </>
  );
}
