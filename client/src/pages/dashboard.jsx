import data from "../data/dashboard.json";
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import StatCard from "../components/dashboard/StatCard";
import RoomCard from "../components/dashboard/RoomCard";
import CreateRoomCard from "../components/dashboard/CreateRoomCard";

export default function Dashboard() {
  return (
    <div className="h-screen flex flex-col bg-[#050505] text-white">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex-1 overflow-y-auto p-8">
          {/* Welcome Section */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">
              Welcome back, {data.user.name}.
            </h1>
            <p className="text-gray-400">
              Here's what's happening in your dev rooms today.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {data.stats.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>

          {/* Rooms */}
          <h2 className="text-xl font-bold mb-6">Your Rooms</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {data.rooms.map((room, index) => (
              <RoomCard key={index} room={room} />
            ))}

            <CreateRoomCard />
          </div>
        </main>
      </div>
    </div>
  );
}