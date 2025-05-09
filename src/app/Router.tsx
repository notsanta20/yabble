import { Routes, Route } from "react-router";
import Landing from "./routes/Landing";
import Signup from "./routes/auth/Signup";
import Login from "./routes/auth/Login";
import Lobby from "./routes/app/Lobby";
import Home from "./routes/app/Home";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Lobby />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default Router;
