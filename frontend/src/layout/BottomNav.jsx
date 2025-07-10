import { FaHome, FaSearch, FaBolt, FaUser, FaLeaf } from "react-icons/fa";

export default function BottomNav() {
  return (
    <div className="h-16 bg-[#2b2d36] border-t border-gray-700 flex justify-around items-center text-xs text-gray-300">
      <NavItem icon={<FaHome size={22} />} label="Home" active />
      <NavItem icon={<FaSearch size={20} />} label="Search" />
      <NavItem icon={<FaBolt size={20} />} label="For You" />
      <NavItem icon={<FaUser size={20} />} label="My Library" />
      <div className="relative">
        <NavItem icon={<FaLeaf size={20} />} label="Pro" />
        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
      </div>
    </div>
  );
}

function NavItem({ icon, label, active }) {
  return (
    <div className={`flex flex-col items-center ${active ? "text-white" : "text-gray-400"}`}>
      {icon}
      <span className="text-[11px] mt-1">{label}</span>
    </div>
  );
}
