import { Search, Pin, HelpCircle, Hash } from "lucide-react";

export default function ChatHeader({ channel }) {
  if (!channel) return null;

  return (
    <header className="h-16 border-b border-gray-800 bg-[#15151A]/80 backdrop-blur flex items-center justify-between px-6">
      <div className="flex items-center gap-3 min-w-0">
        <Hash size={18} className="text-gray-500" />
        <h2 className="font-bold text-lg text-white truncate">
          {channel.name}
        </h2>
        <span className="hidden md:block h-4 w-px bg-gray-700 mx-2" />
        <p className="hidden md:block text-sm text-gray-500 truncate max-w-md">
          Main channel for general development discussions.
        </p>
      </div>

      <div className="flex items-center gap-4 text-gray-500">
        <Search className="hover:text-lime-400 cursor-pointer" size={18} />
        <Pin className="hover:text-lime-400 cursor-pointer" size={18} />
        <HelpCircle className="hover:text-lime-400 cursor-pointer" size={18} />
      </div>
    </header>
  );
}