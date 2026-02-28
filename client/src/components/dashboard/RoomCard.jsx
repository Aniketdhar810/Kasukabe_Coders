import { useNavigate } from "react-router-dom";
export default function RoomCard({ room }) {
  const navigate = useNavigate();
  return (
    <div className="bg-[#18181F] border border-[#1F2937] rounded-xl p-6 hover:border-lime-400/50 transition group cursor-pointer" onClick={() => navigate("/chat")}>

      <div className="mb-4">
        <h3 className="text-lg font-semibold group-hover:text-lime-400 transition">
          {room.title}
        </h3>
        <p className="text-xs text-gray-500">
          Last active: {room.lastActive}
        </p>
      </div>

      <p className="text-sm text-gray-400 mb-6">
        {room.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {room.tags.map((tag, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs bg-[#2A2A35] border border-[#1F2937] rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="text-xs text-lime-400 font-medium">
        ● {room.online}
      </div>
    </div>
  );
}