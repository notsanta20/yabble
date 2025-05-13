import type { FindFriendsUser } from "../../../types/types";
import ProfilePic from "./ProfilePic";
import RequestButton from "../buttons/RequestButton";

function FindFriendCard({ user }: { user: FindFriendsUser }) {
  return (
    <li className="flex gap-2 items-center p-3 rounded-2xl border-2 border-(--glass-border-dark) bg-(--glass-fill-dark)">
      <ProfilePic user={user} />
      <h2 className="flex-auto font-[Syncopate] text-sm text-white font-bold">
        {user.username}
      </h2>
      <RequestButton user={user} />
    </li>
  );
}

export default FindFriendCard;
