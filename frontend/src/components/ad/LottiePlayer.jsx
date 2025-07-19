import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";

export default function LottiePlayer({ id, x, y, z, h, w, style, src, loop = true, autoplay = true }) {
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
      id={id}
      loop={loop}
      play={autoplay}
      animationData={animationData}
      className={style}
      style={{
        position: "absolute",
        left: x || 0,
        top: y || 0,
        zIndex: z || 1,
        width: w || "auto",
        height: h || "auto",
      }}
    />
  );
}
