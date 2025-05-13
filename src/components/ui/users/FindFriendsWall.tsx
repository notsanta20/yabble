import FindFriendCard from "./FindFriendCard";
import { getHeader, getAllUsersApi } from "../../../utils/apis/getRequests";
import { useQuery } from "@tanstack/react-query";
import type { Header } from "../../../types/types";
import FindFriendLoader from "../loaders/FindFriendLoader";

function FindFriendsWall() {
  const test = {
    id: "teasdfag",
    username: "user1",
    profilePic: null,
    myRequests: [],
    userRequests: [],
    myFriends: [],
    followers: [],
  };

  const header = getHeader();
  const allUsers = useQuery({
    queryKey: ["allUsers"],
    queryFn: () => {
      return getAllUsersApi(header);
    },
  });

  if (allUsers.isPending) {
    return (
      <section className="flex-1 flex justify-center">
        <ul className="h-full w-[50%] flex flex-col gap-2 rounded-2xl border-2 border-(--glass-border-light) bg-(--glass-fill-light) backdrop-blur-(--glass-blur) p-2">
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

  if (allUsers.data) {
    const data = allUsers.data.data.data;
    return (
      <section className="flex-1 flex justify-center">
        <ul className="h-full w-[50%] flex flex-col gap-2 rounded-2xl border-2 border-(--glass-border-light) bg-(--glass-fill-light) backdrop-blur-(--glass-blur) p-2">
          <h1 className="text-white text-center font-bold font-[Syncopate] mb-2">
            Find Friends
          </h1>
          {data.map((user) => (
            <FindFriendCard user={user} key={user.id} />
          ))}
        </ul>
      </section>
    );
  }
}

export default FindFriendsWall;
