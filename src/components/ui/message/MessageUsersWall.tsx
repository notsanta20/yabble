import { useState } from "react";
import type { Error, FriendList } from "../../../types/types";
import { getHeader, getFriendsList } from "../../../utils/apis/getRequests";
import alert from "../alert/alert";
import MessageUser from "./MessageUser";
import { useQuery } from "@tanstack/react-query";

function MessageUsersWall() {
  const [userMenu, setUserMenu] = useState<string | null>(null);
  const header = getHeader();

  const friends = useQuery({
    queryKey: ["friend"],
    queryFn: () => {
      return getFriendsList(header);
    },
  });

  function handleUserMenuHighlight(name: string) {
    setUserMenu(name);
  }

  if (friends.isPending) {
  }

  if (friends.error) {
    const error: Error = friends.error;
    alert(error.response.data.message);
  }

  if (friends.data) {
    const data = friends.data.data.data;

    return (
      <aside>
        <ul className="flex flex-col justify-center gap-2 p-2 rounded-2xl border-2 border-(--glass-border-dark) bg-(--glass-fill-dark) backdrop-blur-(--glass-blur)">
          <h1 className="text-white text-sm text-center font-[Syncopate] font-bold">
            Friends
          </h1>
          {data[0].followers.map((data: FriendList) => (
            <MessageUser
              user={data}
              key={data.id}
              menu={userMenu}
              handleUserMenuHighlight={handleUserMenuHighlight}
            />
          ))}
          {data[0].myFriends.map((data: FriendList) => (
            <MessageUser
              user={data}
              key={data.id}
              menu={userMenu}
              handleUserMenuHighlight={handleUserMenuHighlight}
            />
          ))}
        </ul>
      </aside>
    );
  }
}

export default MessageUsersWall;
