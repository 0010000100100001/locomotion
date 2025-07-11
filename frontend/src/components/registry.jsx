// src/components/registry.js
import Root from "./Root";
import LottiePlayer from "./LottiePlayer";
import RichText from "./RichText";
import Carousel from "./Carousel";
import Button from "./Button";

// Simple fallback component
const Text = ({ content, className }) => (
  <div className={className}>{content}</div>
);

export const componentRegistry = {
  root: Root,
  lottie: LottiePlayer,
  "rich-text": RichText,
  carousel: Carousel,
  button: Button,
  text: Text,
};
