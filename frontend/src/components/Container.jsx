export default function Container({ children, padding = "p-4", rounded = "rounded-xl", bg = "bg-[#1f1f28]" }) {
  return (
    <div className={`${padding} ${rounded} ${bg} w-full`}>
      {children}
    </div>
  );
}