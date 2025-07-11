import Button from "./Button";

// src/components/Carousel.jsx
export default function Carousel({ x, y, z, w, h, style, items = [] }) {
  const resolve = (val, fallback) => (val === "auto" ? "auto" : val ?? fallback);
  return (
    <div className={style} style={{    
                position: "absolute",
                left: resolve(x, 0),
                top: resolve(y, 0),
                height: h || "190px",
                width: w || "390px",
                zIndex: z || "auto",
              }}>
      <div className="flex space-x-4 py-2">
        {items.map((item, idx) => (
          <a href={item.data.cta.url} key={idx}>
            <div
              className="relative flex-shrink-0 rounded-lg overflow-hidden shadow"
              style={{
                backgroundImage: `url(${item.data.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: item.props.h || "180px",
                width: item.props.w || "140px",
                zIndex: item.props.z || "auto",
              }}
            >
              <div className="absolute inset-0 bg-black/50 p-3 flex flex-col justify-between ">
                <div className="text-sm font-semibold text-white">{item.label}</div>
                {item.data.cta?.url && (
                  <Button
                    label={item.data.cta.text || "View"}
                    className={item.props.style || ''}
                    />
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
