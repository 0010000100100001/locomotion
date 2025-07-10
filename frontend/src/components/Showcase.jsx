export default function Showcase({ title, subtitle, animation, cta }) {
  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-[#1f1f27] p-4 shadow-md">
      {/* Lottie or image placeholder */}
      {animation ? (
        <div className="w-full h-40" ref={animation} />
      ) : (
        <div className="w-full h-40 bg-[#2b2d36] flex items-center justify-center text-gray-500 text-sm">
          Animation Placeholder
        </div>
      )}

      {/* Text overlays */}
      <div className="mt-3">
        {title && <div className="text-lg font-semibold text-white">{title}</div>}
        {subtitle && <div className="text-sm text-gray-400">{subtitle}</div>}
      </div>

      {/* CTA */}
      {cta && (
        <div className="mt-3">
          <a
            href={cta.url}
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white text-sm px-4 py-2 rounded-full"
          >
            {cta.text}
          </a>
        </div>
      )}
    </div>
  );
}
