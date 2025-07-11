export default function Text({ x, y, z, w, h, style, content }) {
  return <div className={style} style={{
    position: "absolute",
    left: x,
    top: y,
    width: w,
    height: h,
    zIndex: z
  }}>{content}</div>;
}
