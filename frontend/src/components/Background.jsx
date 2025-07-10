export default function Background({ gradient = "from-indigo-700 via-purple-700 to-pink-500", children }) {
  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradient} p-4 rounded-2xl`}>
      {children}
    </div>
  );
}
