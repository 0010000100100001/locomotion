export default function Button({
  label = "Click Me",
  onClick = () => {},
  variant = "primary",
  fullWidth = false,
  size = "md",
}) {
  const baseStyles = "rounded-xl font-semibold transition-all duration-200";

  const variants = {
    primary: "bg-pink-500 text-white hover:bg-pink-600",
    secondary: "bg-gray-700 text-white hover:bg-gray-600",
    outline: "border border-white text-white hover:bg-white hover:text-black",
  };

  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-3",
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : "w-fit"}
      `}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
