import { Routes, Route } from "react-router";
import Landing from "./routes/Landing";
import Signup from "./routes/auth/Signup";
import Login from "./routes/auth/Login";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route></Route>
    </Routes>
  );
}

export default Router;
