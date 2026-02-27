export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#0F0F16] border-r border-[#1F2937] p-6 hidden md:block">
      <button className="w-full bg-lime-400 text-black font-semibold py-2 rounded-lg mb-6">
        + Create Room
      </button>

      <nav className="space-y-3 text-gray-400">
        <div className="text-white">Dashboard</div>
        <div>Explore</div>
        <div>Recent Activity</div>
      </nav>
    </aside>
  );
}