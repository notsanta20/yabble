import ActiveUserLoader from "../loaders/ActiveUserLoader";
import ActiveUserCard from "./ActiveUserCard";
import type { FriendList } from "../../../types/types";
import socket from "../../../app/socket";
import { useEffect, useState } from "react";

function ActiveUsers() {
  const [users, setUsers] = useState<Array<FriendList> | null>(null);

  useEffect(() => {
    socket.emit("getUsers");
    socket.on("users", (data) => {
      setUsers(data);
    });
  }, []);

  if (!users) {
    return (
      <aside className="hidden md:flex flex-col gap-2 p-2 rounded-2xl border-2 border-(--glass-border-light) bg-(--glass-fill-dark) backdrop-blur-(--glass-blur) w-[220px]">
        <h1 className="font-[Syncopate] font-bold text-white text-xs text-center">
          Active users
        </h1>
        <ActiveUserLoader />
        <ActiveUserLoader />
        <ActiveUserLoader />
      </aside>
    );
  }

  if (users) {
    if (users.length === 0) {
      return (
        <aside className="hidden md:flex flex-col gap-2 p-2 rounded-2xl border-2 border-(--glass-border-light) bg-(--glass-fill-dark) backdrop-blur-(--glass-blur) w-[220px]">
          <h1 className="font-[Syncopate] font-bold text-white text-xs text-center">
            Active users
          </h1>
          <h2 className="text-white font-[space_grotesk] text-center">
            No users are online
          </h2>
        </aside>
      );
    }

    return (
      <aside className="hidden md:flex flex-col gap-2 p-2 rounded-2xl border-2 border-(--glass-border-light) bg-(--glass-fill-dark) backdrop-blur-(--glass-blur) w-[220px]">
        <h1 className="font-[Syncopate] font-bold text-white text-xs text-center">
          Active users
        </h1>

        <ul>
          {users.map((user: FriendList) => {
            if (user.isOnline) {
              return <ActiveUserCard user={user} key={user.id} />;
            }
          })}
        </ul>
      </aside>
    );
  }
}

export default ActiveUsers;
