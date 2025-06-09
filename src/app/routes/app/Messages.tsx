import { HeadingSmall } from "../../../components/texts/Heading";
import Menu from "../../../components/ui/menu/Menu";
import MessageUsersWall from "../../../components/ui/message/MessageUsersWall";
import { Outlet } from "react-router";
import socket from "../../socket";
import { getHeader } from "../../../utils/apis/getRequests";
import { useEffect, useState } from "react";

function Messages() {
  const [isPageClicked, setIsPageClicked] = useState<boolean>(false);
  const header = getHeader();
  const token = header.headers.Authorization;
  socket.auth = { token };
  socket.connect();

  useEffect(() => {
    setIsPageClicked(false);
  }, []);

  return (
    <main className="flex flex-col gap-2 p-2 h-dvh">
      <HeadingSmall />
      <div className="flex-auto flex flex-col-reverse md:flex-row gap-2 min-h-0">
        <Menu name="messages" />
        <div className="flex-auto flex gap-2 overflow-auto">
          <MessageUsersWall
            isPageClicked={isPageClicked}
            setIsPageClicked={setIsPageClicked}
          />
          <section
            className={
              "flex-auto md:flex gap-2 " + (isPageClicked ? "flex" : "hidden")
            }
          >
            <Outlet context={setIsPageClicked} />
          </section>
        </div>
      </div>
    </main>
  );
}

export default Messages;
