import { useNavigate } from "react-router";
import type { FriendList } from "../../../types/types";
import ProfilePic from "../users/ProfilePic";

function MessageUser({
  user,
  menu,
  handleUserMenuHighlight,
}: {
  user: FriendList;
  menu: string | null;
  handleUserMenuHighlight: Function;
}) {
  const navigate = useNavigate();
  const userName: string = user.userA
    ? user.userA.username
    : user.userB
    ? user.userB.username
    : "blank";

  const userId: string = user.userA
    ? user.userA.id
    : user.userB
    ? user.userB.id
    : "blank";

  return (
    <button
      className={
        "flex items-center gap-2 p-2 rounded-2xl border-2 cursor-pointer hover:bg-(--glass-fill-light) hover:border-(--glass-border-light)" +
        (userName === menu
          ? " bg-(--glass-fill-light) border-(--glass-border-light)"
          : " border-(--transparent)")
      }
      onClick={() => {
        handleUserMenuHighlight(userName);
        navigate(`/messages/${userId}`, { replace: true });
      }}
    >
      {user.userA && <ProfilePic user={user.userA} />}
      {user.userB && <ProfilePic user={user.userB} />}

      <h2 className="text-white text-sm font-[Syncopate] font-bold">
        {userName}
      </h2>
    </button>
  );
}

export default MessageUser;
