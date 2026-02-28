import { Send, Bot, Upload } from "lucide-react";
import { useState } from "react";

export default function MessageComposer({ onSend }) {
  const [text, setText] = useState("");

  const submit = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div className="p-4 bg-[#0D0D12]/95 border-t border-gray-800">
      <div className="bg-[#15151A] rounded-xl border border-gray-700 focus-within:ring-1 focus-within:ring-lime-400/50">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-700">
          <button className="text-lime-400 flex items-center gap-1 text-xs font-bold">
            <Bot size={14} /> Ask AI
          </button>
          <button className="text-gray-400 flex items-center gap-1 text-xs">
            <Upload size={14} /> Upload log
          </button>
          <span className="ml-auto text-[10px] text-gray-500 font-mono">
            Markdown supported
          </span>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Message #general-dev or ask @ARIA..."
          className="w-full bg-transparent text-gray-200 resize-none p-4 focus:outline-none min-h-[70px]"
        />

        <div className="flex justify-end px-3 pb-3">
          <button
            onClick={submit}
            className="bg-lime-400 hover:bg-lime-300 text-black p-2 rounded-lg"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}