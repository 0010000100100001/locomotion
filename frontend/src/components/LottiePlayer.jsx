import Lottie from "react-lottie-player";

export default function LottiePlayer({ src, className = "", loop = true, autoplay = true }) {
  return (
    <Lottie
      loop={loop}
      play={autoplay}
      animationData={src}
      className={className}
    />
  );
}