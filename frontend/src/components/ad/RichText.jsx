export default function RichText({ text, className = "" }) {
  return <div className={`text-xl font-bold text-center ${className}`}>{text}</div>;
}
