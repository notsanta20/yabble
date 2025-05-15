import type { FindFriendsUser } from "../../../types/types";
import ProfilePic from "./ProfilePic";
import RequestButton from "../buttons/RequestButton";
import { useNavigate } from "react-router";

function FindFriendCard({ user }: { user: FindFriendsUser }) {
  const navigate = useNavigate();

  function handleUserClick() {
    navigate(`/user/${user.id}`, { replace: true });
  }

  return (
    <li
      className="flex gap-2 items-center p-3 rounded-2xl border-2 border-(--glass-border-dark) bg-(--glass-fill-dark) cursor-pointer"
      onClick={handleUserClick}
    >
      <ProfilePic user={user} />
      <h2 className="flex-auto font-[Syncopate] text-sm text-white font-bold">
        {user.username}
      </h2>
      <RequestButton user={user} />
    </li>
  );
}

export default FindFriendCard;
