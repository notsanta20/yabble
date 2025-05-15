import { useNavigate } from "react-router";
import type { BasicUser } from "../../../types/types";
import ProfilePic from "./ProfilePic";

function ActiveUserCard({ user }: { user: BasicUser }) {
  const navigate = useNavigate();

  function handleUser() {
    navigate(`/user/${user.id}`, { replace: true });
  }

  return (
    <li
      className="flex gap-2 items-center p-2 cursor-pointer"
      onClick={handleUser}
    >
      <ProfilePic user={user} />
      <h2 className="font-[Syncopate] font-bold text-white text-xs">
        {user.username}
      </h2>
    </li>
  );
}

export default ActiveUserCard;
