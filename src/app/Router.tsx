import { Routes, Route } from "react-router";
import Landing from "./routes/Landing";
import Signup from "./routes/auth/Signup";
import Login from "./routes/auth/Login";
import Home from "./routes/app/Home";
import FindFriends from "./routes/app/FindFriends";
import Messages from "./routes/app/Messages";
import Profile from "./routes/app/Profile";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/find-friends" element={<FindFriends />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default Router;
