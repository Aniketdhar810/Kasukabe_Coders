import { useEffect, useState } from "react";

/* Sidebar */
import Sidebar from "../components/dashboard/Sidebar.jsx";

/* Main chat */
import ChatHeader from "../components/chat/ChatHeader.jsx";
import MessageList from "../components/chat/MessageList";
import MessageComposer from "../components/chat/MessageComposer";

/* Right panel */
import RightPanel from "../components/chat/RightPannel";

/* Mock data (replace with API later) */
import channelsData from "../data/channels.json";
import messagesData from "../data/message.json";

export default function ChatRoom() {
  const [channels, setChannels] = useState([]);
  const [activeChannel, setActiveChannel] = useState(null);
  const [messages, setMessages] = useState([]);

  /* Force dark mode */
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  /* Load channels */
  useEffect(() => {
    setChannels(channelsData);
    setActiveChannel(channelsData[0]);
  }, []);

  /* Load messages when channel changes */
  useEffect(() => {
    if (!activeChannel) return;

    const filtered = messagesData.filter(
      (msg) => msg.channelId === activeChannel.id
    );

    setMessages(filtered);
  }, [activeChannel]);

  /* Send message (UI only for now) */
  const handleSendMessage = (content) => {
    const newMessage = {
      id: Date.now(),
      type: "user",
      author: "Alex Dev",
      avatar: "/avatars/alex.png",
      time: "Now",
      content,
      channelId: activeChannel.id,
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex bg-background-dark text-gray-200 font-sans">

      {/* ===================== LEFT SIDEBAR ===================== */}
      <Sidebar
        channels={channels}
        activeChannel={activeChannel}
        onChannelChange={setActiveChannel}
      />

      {/* ===================== MAIN CHAT ===================== */}
      <main className="flex-1 flex flex-col min-w-0 relative">

        {/* Header */}
        <ChatHeader channel={activeChannel} />

        {/* Messages */}
        <MessageList messages={messages} />

        {/* Composer */}
        <MessageComposer onSend={handleSendMessage} />

      </main>

      {/* ===================== RIGHT PANEL ===================== */}
      <RightPanel />

    </div>
  );
}