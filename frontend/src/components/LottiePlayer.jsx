import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";

export default function LottiePlayer({ src, className = "", loop = true, autoplay = true }) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    if (typeof src === "string") {
      fetch(src)
        .then((res) => res.json())
        .then(setAnimationData)
        .catch((err) => {
          console.error("Failed to load Lottie JSON:", err);
        });
    } else {
      setAnimationData(src);
    }
  }, [src]);

  return (
    <Lottie
      loop={loop}
      play={autoplay}
      animationData={animationData}
      className={className}
    />
  );
}
