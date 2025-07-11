export default function Carousel({ items = [] }) {
  return (
    <div className="overflow-x-auto">
      <div className="flex space-x-4 py-2">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="relative min-w-[140px] h-[180px] flex-shrink-0 rounded-lg overflow-hidden shadow"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="absolute inset-0 bg-black/50 p-3 flex flex-col justify-between pointer-events-none">
              <div className="text-sm font-semibold text-white">{item.label}</div>

              {item.cta?.url && (
                <div className="pointer-events-auto">
                  <a
                    href={item.cta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs mt-2 bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 rounded-full inline-block"
                  >
                    {item.cta.text || "View"}
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
