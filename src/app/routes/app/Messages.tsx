import { HeadingSmall } from "../../../components/texts/Heading";
import Menu from "../../../components/ui/menu/Menu";
import MessageUsersWall from "../../../components/ui/message/MessageUsersWall";
import { Outlet } from "react-router";
import socket from "../../socket";
import { getHeader } from "../../../utils/apis/getRequests";

function Messages() {
  const header = getHeader();
  const token = header.headers.Authorization;
  socket.auth = { token };
  socket.connect();

  return (
    <main className="flex flex-col gap-2 p-2 h-dvh">
      <HeadingSmall />
      <div className="flex-auto flex gap-2 min-h-0">
        <div className="max-sm:flex-auto flex flex-col-reverse md:flex-col gap-2">
          <Menu name="messages" />
          <MessageUsersWall />
        </div>
        <section className="flex-auto hidden md:flex gap-2">
          <Outlet />
        </section>
      </div>
    </main>
  );
}

export default Messages;
