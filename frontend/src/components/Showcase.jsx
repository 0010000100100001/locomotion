import LottiePlayer from "./LottiePlayer";
import Carousel from "./Carousel";

export default function Showcase({ title, subtitle, animationJson, cta }) {
const sampleItems = [
  {
    label: "Maalik",
    image: "https://placehold.co/160x180?text=Maalik",
    cta: { text: "Book Now", url: "https://example.com/maalik" }
  },
  {
    label: "F1 Album",
    image: "https://placehold.co/160x180?text=F1+Album",
    cta: { text: "Play", url: "https://example.com/f1-album" }
  },
  {
    label: "Top 40",
    image: "https://placehold.co/160x180?text=Top+40",
    cta: { text: "Listen", url: "https://example.com/top-40" }
  }
];


  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-[#1f1f27] p-4 shadow-md" style={{ background: "mediumslateblue" }}>
      {animationJson ? (
        <LottiePlayer src={animationJson} className="w-full h-40" />
      ) : (
        <div className="w-full h-40 bg-[#2b2d36] flex items-center justify-center text-gray-500 text-sm">Animation Placeholder</div>
      )}

      <Carousel items={sampleItems} />

      <div className="mt-3">
        {title && <div className="text-lg font-semibold text-white">{title}</div>}
        {subtitle && <div className="text-sm text-gray-400">{subtitle}</div>}
      </div>

      {cta && (
        <div className="mt-3">
          <a href={cta.url} className="inline-block bg-pink-600 hover:bg-pink-700 text-white text-sm px-4 py-2 rounded-full">
            {cta.text}
          </a>
        </div>
      )}
    </div>
  );
}
