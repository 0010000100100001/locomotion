import LottiePlayer from "./LottiePlayer";
import Carousel from "./Carousel";
import { useEffect, useState } from "react";

export default function Showcase({ title, subtitle, skeletonData, cta }) {
  const [animationData, setAnimationData] = useState(null);
  const sampleItems = [
    {
      label: "Maalik",
      image: "https://placehold.co/160x180?text=Maalik",
      cta: { text: "Book Now", url: "https://example.com/maalik" },
    },
    {
      label: "F1 Album",
      image: "https://placehold.co/160x180?text=F1+Album",
      cta: { text: "Play", url: "https://example.com/f1-album" },
    },
    {
      label: "Top 40",
      image: "https://placehold.co/160x180?text=Top+40",
      cta: { text: "Listen", url: "https://example.com/top-40" },
    },
  ];

  useEffect(() => {
    fetch(skeletonData.animationUrl)
      .then((res) => res.json())
      .then(setAnimationData);
  }, []);

  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-[#1f1f27] p-4 shadow-md" style={{ background: "mediumslateblue" }}>
      {/* Lottie background layer */}
      <div className="relative w-full h-40">
        {animationData ? (
          <div className="absolute inset-0 z-0">
            <LottiePlayer src={animationData} className="w-full h-full" />
          </div>
        ) : (
          <div className="absolute inset-0 z-0 bg-[#2b2d36] flex items-center justify-center text-gray-500 text-sm">Animation Placeholder</div>
        )}

        {/* Foreground content over Lottie */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <p className="text-lg font-semibold" style={{ color: "#f7dc59" }}>
            Listen to our monsoon playlists
          </p>
        </div>
      </div>

      {/* Carousel section */}
      <div className="mt-4">
        <Carousel items={sampleItems} />
      </div>

      {/* Text & CTA */}
      <div className="mt-3 space-y-2">
        {title && <div className="text-lg font-semibold text-white">{title}</div>}
        {subtitle && <div className="text-sm text-gray-400">{subtitle}</div>}

        {cta && (
          <a href={cta.url} className="inline-block bg-pink-600 hover:bg-pink-700 text-white text-sm px-4 py-2 rounded-full">
            {cta.text}
          </a>
        )}
      </div>
    </div>
  );
}
