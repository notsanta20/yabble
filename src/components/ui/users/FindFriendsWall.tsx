import FindFriendCard from "./FindFriendCard";
import { getHeader, getAllUsersApi } from "../../../utils/apis/getRequests";
import { useQuery } from "@tanstack/react-query";
import FindFriendLoader from "../loaders/FindFriendLoader";
import type { FindFriendsUser } from "../../../types/types";
import socket from "../../../app/socket";

function FindFriendsWall() {
  const header = getHeader();
  const token = header.headers.Authorization;
  socket.auth = { token };
  socket.connect();

  const allUsers = useQuery({
    queryKey: ["allUsers"],
    queryFn: () => {
      return getAllUsersApi(header);
    },
  });

  if (allUsers.isPending) {
    return (
      <section className="flex-1 flex md:justify-center">
        <ul className="h-full w-full md:w-[50%] flex flex-col gap-2 rounded-2xl border-2 border-(--glass-border-light) bg-(--glass-fill-light) backdrop-blur-(--glass-blur) p-2">
          <h1 className="text-white text-center font-bold font-[Syncopate] mb-2">
            Find Friends
          </h1>
          <FindFriendLoader />
          <FindFriendLoader />
          <FindFriendLoader />
        </ul>
      </section>
    );
  }

  if (allUsers.error) {
    return (
      <section className="flex-1 flex md:justify-center">
        <ul className="h-full w-full md:w-[50%] flex flex-col gap-2 rounded-2xl border-2 border-(--glass-border-light) bg-(--glass-fill-light) backdrop-blur-(--glass-blur) p-2">
          <h1 className="text-white text-center font-bold font-[Syncopate] mb-2">
            Find Friends
          </h1>
          <div className="flex-auto flex items-center">
            {" "}
            <h2 className="font-[Syncopate] font-bold text-sm text-white text-center">
              Internal server error, failed to fetch users.
            </h2>
          </div>
        </ul>
      </section>
    );
  }

  if (allUsers.data) {
    const data = allUsers.data.data.data;

    if (data.length === 0) {
      return (
        <section className="flex-auto flex md:justify-center min-h-0">
          <div className="w-full md:w-[50%] flex flex-col gap-2 rounded-2xl border-2 border-(--glass-border-light) bg-(--glass-fill-light) backdrop-blur-(--glass-blur) p-2 text-white">
            <h1 className="text-center font-bold font-[Syncopate] mb-2">
              Find Friends
            </h1>
            <h2 className="font-[dm_sans] text-center">
              You are friends with all the users.
            </h2>
          </div>
        </section>
      );
    }

    return (
      <section className="flex-auto flex md:justify-center min-h-0">
        <div className="w-full md:w-[50%] flex flex-col gap-2 rounded-2xl border-2 border-(--glass-border-light) bg-(--glass-fill-light) backdrop-blur-(--glass-blur) p-2">
          <h1 className="text-white text-center font-bold font-[Syncopate] mb-2">
            Find Friends
          </h1>
          <ul className="flex-auto flex flex-col gap-2 overflow-auto request-container">
            {data.map((user: FindFriendsUser) => (
              <FindFriendCard user={user} key={user.id} />
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default FindFriendsWall;
