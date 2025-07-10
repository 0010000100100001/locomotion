export default function MockAppLayout({ children }) {
  return (
    <div className="font-lato w-full h-screen mx-auto bg-[#2b2d36] text-white flex flex-col shadow-xl border border-gray-700 overflow-hidden">
      {/* Status Bar */}
      <div className="h-5 bg-[#2b2d36]" />

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
        {children}
      </div>

      {/* Footer (Optional) */}
      <div className="h-12 flex items-center justify-center text-sm text-gray-400 border-t border-gray-700">
        Mini Player / Bottom Nav
      </div>
    </div>
  );
}
