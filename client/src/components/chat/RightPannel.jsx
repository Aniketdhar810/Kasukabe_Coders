import { Users, Circle } from "lucide-react";

export default function RightPanel({ onlineUsers = [] }) {
  return (
    <aside className="w-60 bg-[#15151A] border-l border-gray-800 hidden lg:flex flex-col">
      {/* Header */}
      <div className="h-16 border-b border-gray-800 flex items-center px-4 gap-2">
        <Users size={16} className="text-gray-400" />
        <span className="text-sm font-semibold text-gray-300">Online</span>
        <span className="ml-auto text-xs bg-lime-400/10 text-lime-400 border border-lime-400/20 px-2 py-0.5 rounded-full">
          {onlineUsers.length}
        </span>
      </div>

      {/* User list */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1">
        {onlineUsers.length === 0 ? (
          <p className="text-xs text-gray-600 text-center mt-8">No one else is online</p>
        ) : (
          onlineUsers.map((user) => (
            <div
              key={user.userId}
              className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/5 transition"
            >
              <div className="relative flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-lime-400/20 border border-lime-400/30 flex items-center justify-center text-lime-400 font-bold text-xs">
                  {(user.username || "?").charAt(0).toUpperCase()}
                </div>
                <Circle
                  size={8}
                  className="absolute -bottom-0.5 -right-0.5 text-lime-400 fill-lime-400"
                />
              </div>
              <span className="text-sm text-gray-300 truncate">{user.username}</span>
            </div>
          ))
        )}
      </div>

      {/* Footer hint */}
      <div className="p-4 border-t border-gray-800">
        <p className="text-[10px] text-gray-600 text-center leading-relaxed">
          Type <span className="text-lime-400 font-mono">@ai</span> or{" "}
          <span className="text-lime-400 font-mono">@gemini</span> followed by your
          question to get an AI answer in chat.
        </p>
      </div>
    </aside>
  );
}