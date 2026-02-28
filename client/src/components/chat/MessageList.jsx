import { Bot } from "lucide-react";

export default function MessageList({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 space-y-8">
      {messages.map((msg) =>
        msg.type === "ai" ? (
          <AIMessage key={msg.id} msg={msg} />
        ) : (
          <UserMessage key={msg.id} msg={msg} />
        )
      )}
    </div>
  );
}

/* ---------------- USER MESSAGE ---------------- */

function UserMessage({ msg }) {
  return (
    <div className="flex gap-4">
      <img
        src={msg.avatar || "/avatars/default.png"}
        className="w-10 h-10 rounded-full bg-gray-800"
        alt=""
      />
      <div className="flex-1">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="font-bold text-gray-200">{msg.author}</span>
          <span className="text-xs text-gray-500">{msg.time}</span>
        </div>
        <p className="text-gray-300 text-sm">{msg.content}</p>
      </div>
    </div>
  );
}

/* ---------------- AI MESSAGE ---------------- */

function AIMessage({ msg }) {
  return (
    <div className="relative bg-[#1A1A23]/70 border border-lime-400/10 rounded-xl px-5 py-6">
      <div className="absolute -top-3 left-4 bg-lime-400 text-black text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
        <Bot size={12} /> AI
      </div>

      <div className="flex gap-4">
        <div className="w-10 h-10 rounded bg-black flex items-center justify-center">
          <Bot size={22} className="text-lime-400" />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-bold text-lime-400">
              {msg.author}
            </span>
            <span className="text-xs text-gray-500">
              {msg.time}
            </span>
            <span className="text-[10px] px-1.5 py-0.5 bg-gray-800 rounded border border-gray-700">
              {msg.model}
            </span>
          </div>

          <p className="text-gray-300 text-sm mb-3">
            {msg.content.text}
          </p>

          {msg.content.code && (
            <pre className="bg-[#1E1E24] border border-gray-700 rounded-lg p-4 text-xs overflow-x-auto">
              <code>{msg.content.code.body}</code>
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}