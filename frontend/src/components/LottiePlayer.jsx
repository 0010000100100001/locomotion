import Lottie from "react-lottie-player";

export default function LottiePlayer({ src, loop = true, autoplay = true, className = "w-full h-40" }) {
  return (
    <Lottie
      loop={loop}
      play={autoplay}
      animationData={src}
      className={className}
    />
  );
}
