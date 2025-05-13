import type { BasicUser } from "../../../types/types";
import ProfilePic from "./ProfilePic";

function ActiveUserCard({ user }: { user: BasicUser }) {
  return (
    <li className="flex gap-2 items-center p-2">
      <ProfilePic user={user} />
      <h2 className="font-[Syncopate] font-bold text-white text-xs">
        {user.username}
      </h2>
    </li>
  );
}

export default ActiveUserCard;
