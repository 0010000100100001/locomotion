export default function Card({ image, text, borderRadius = "lg", textPosition = "bottom" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-${borderRadius} w-full h-40 shadow-md`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "10px",
      }}
    >
      <div className={`absolute inset-0 bg-black/40 flex items-end p-3 ${textPosition === "center" ? "items-center justify-center" : ""}`}>
        <p className="text-white text-sm font-semibold">{text}</p>
      </div>
    </div>
  );
}
