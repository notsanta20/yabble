import { Routes, Route } from "react-router";
import Landing from "./routes/Landing";
import Signup from "./routes/auth/Signup";
import Login from "./routes/auth/Login";
import Home from "./routes/app/Home";
import FindFriends from "./routes/app/FindFriends";
import Messages from "./routes/app/Messages";
import Profile from "./routes/app/Profile";
import UserProfile from "./routes/app/UserProfile";
import Post from "./routes/app/Post";
import MessageDefaultPage from "../components/ui/message/MessageDefaultPage";
import MessagePage from "../components/ui/message/MessagePage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/find-friends" element={<FindFriends />} />
      <Route path="/messages" element={<Messages />}>
        <Route index element={<MessageDefaultPage />} />
        <Route path=":userId" element={<MessagePage />} />
      </Route>
      <Route path="/profile" element={<Profile />} />
      <Route path="/user/:userId" element={<UserProfile />} />
      <Route path="/post/:postId" element={<Post />} />
    </Routes>
  );
}

export default Router;
