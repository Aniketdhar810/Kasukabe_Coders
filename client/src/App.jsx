import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import LandingPage from "./pages/LandingPage";
import CreateRoom from "./pages/newRoom";
import Profile from "./pages/profile"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create-room" element={<CreateRoom />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;