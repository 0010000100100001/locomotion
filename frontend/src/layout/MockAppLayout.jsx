import BottomNav from "./BottomNav";

export default function MockAppLayout({ children }) {
  return (
    <div
      className="w-full h-screen bg-[#2b2d36] text-white flex flex-col shadow-xl border border-gray-700 overflow-hidden"
      style={{ height: '100dvh' }}
    >
      {/* Status Bar */}
      <div className="h-5 bg-[#2b2d36]" />

      {/* Fixed Tabs (Music, Podcasts, etc.) */}
      <div className="px-4 py-2 bg-[#2b2d36] border-b border-gray-700">
        <div className="flex space-x-6 text-sm font-medium text-gray-300">
          <span className="text-white border-b-2 border-teal-400 pb-1">Music</span>
          <span>Podcasts</span>
          <span className="relative">JioTunes</span>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
        {children}
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
