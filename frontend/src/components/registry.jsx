// src/components/registry.js
import Root from "./ad/Root";
import LottiePlayer from "./ad/LottiePlayer";
import RichText from "./ad/RichText";
import Carousel from "./ad/Carousel";
import Button from "./ad/Button";

// Simple fallback component
const Text = ({ content, className }) => (
  <div className={className}>{content}</div>
);

export const componentRegistry = {
  "root": Root,
  "lottie": LottiePlayer,
  "rich-text": RichText,
  "carousel": Carousel,
  "button": Button,
  "text": Text
};
