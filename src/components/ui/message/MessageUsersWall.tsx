import { useState, useEffect } from "react";
import type { FriendList } from "../../../types/types";
import alert from "../alert/alert";
import MessageUser from "./MessageUser";
import socket from "../../../app/socket";
import ActiveUserLoader from "../loaders/ActiveUserLoader";

function MessageUsersWall() {
  const [userMenu, setUserMenu] = useState<string | null>(null);
  const [users, setUsers] = useState<Array<FriendList> | null>(null);

  useEffect(() => {
    socket.emit("getUsers");
    socket.on("users", (data) => {
      setUsers(data);
    });
  }, []);

  socket.on("error", (error) => {
    alert(error);
  });

  function handleUserMenuHighlight(name: string) {
    setUserMenu(name);
  }

  if (!users) {
    return (
      <aside className="flex-auto min-h-0 flex flex-col gap-2 p-2 rounded-2xl border-2 border-(--glass-border-dark) bg-(--glass-fill-dark) backdrop-blur-(--glass-blur)">
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
      <aside className="flex-auto min-h-0 flex flex-col gap-2 p-2 rounded-2xl border-2 border-(--glass-border-dark) bg-(--glass-fill-dark) backdrop-blur-(--glass-blur)">
        <h1 className="text-white text-sm text-center font-[Syncopate] font-bold">
          Friends
        </h1>
        <div className="min-h-0 overflow-auto">
          {" "}
          <ul className="flex flex-col gap-2">
            {users.map((data: FriendList) => (
              <MessageUser
                user={data}
                key={data.id}
                menu={userMenu}
                handleUserMenuHighlight={handleUserMenuHighlight}
              />
            ))}
          </ul>
        </div>
      </aside>
    );
  }
}

export default MessageUsersWall;
