export default function Root({ x = 0, y = 0, z = 0, w = "auto", h = "auto", style = "", children }) {
  const resolve = (val, fallback) => (val === "auto" ? "auto" : val ?? fallback);

  const inlineStyles = {
    position: "relative",
    left: resolve(x, 0),
    top: resolve(y, 0),
    zIndex: resolve(z, 0),
    width: resolve(w, "100%"),
    height: resolve(h, "auto"),
  };

  return (
    <div className={style} style={inlineStyles}>
      {children}
    </div>
  );
}
