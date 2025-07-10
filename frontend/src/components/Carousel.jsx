export default function Carousel({ children }) {
  return (
    <div className="overflow-x-auto whitespace-nowrap space-x-3 flex no-scrollbar">
      {children}
    </div>
  );
}
