import { useState, useEffect } from "react";
import type { FriendList } from "../../../types/types";
import alert from "../alert/alert";
import MessageUser from "./MessageUser";
import socket from "../../../app/socket";
import ActiveUserLoader from "../loaders/ActiveUserLoader";
import Cookies from "js-cookie";

function MessageUsersWall({
  isPageClicked,
  setIsPageClicked,
}: {
  isPageClicked: boolean;
  setIsPageClicked: Function;
}) {
  const userMenuState = Cookies.get("userMenu");
  const [userMenu, setUserMenu] = useState<string | null>(null);
  const [users, setUsers] = useState<Array<FriendList> | null>(null);

  useEffect(() => {
    socket.emit("getUsers");
    socket.on("users", (data) => {
      setUsers(data);
    });
    if (userMenuState) {
      setUserMenu(userMenuState);
    }
  }, []);

  socket.on("error", (error) => {
    alert(error);
  });

  function handleUserMenuHighlight(name: string) {
    setUserMenu(name);
    Cookies.set("userMenu", name);
  }

  function handlePageSelect() {
    setIsPageClicked(true);
    Cookies.set("messagePageState", "cat");
  }

  if (!users) {
    return (
      <aside
        className={
          "flex-auto min-h-0 flex flex-col gap-2 p-2 rounded-2xl border-2 border-(--glass-border-dark) bg-(--glass-fill-dark) backdrop-blur-(--glass-blur) " +
          (isPageClicked ? "hidden" : "flex")
        }
      >
        <ul>
          <ActiveUserLoader />
          <ActiveUserLoader />
          <ActiveUserLoader />
        </ul>
      </aside>
    );
  }

  if (users) {
    return (
      <aside
        className={
          "max-sm:flex-auto md:min-w-[200px] min-h-0 flex-col gap-2 p-2 rounded-2xl border-2 border-(--glass-border-dark) bg-(--glass-fill-dark) backdrop-blur-(--glass-blur) md:flex " +
          (isPageClicked ? "hidden" : "flex")
        }
      >
        <h1 className="text-white text-sm text-center font-[Syncopate] font-bold">
          Friends
        </h1>
        <div className="min-h-0 overflow-auto">
          <ul className="flex flex-col gap-2">
            {users.map((data: FriendList) => (
              <MessageUser
                user={data}
                key={data.id}
                menu={userMenu}
                handleUserMenuHighlight={handleUserMenuHighlight}
                handlePageSelect={handlePageSelect}
              />
            ))}
          </ul>
        </div>
      </aside>
    );
  }
}

export default MessageUsersWall;
