import { useNavigate } from "react-router";
import type { FriendList } from "../../../types/types";
import ProfilePic from "../users/ProfilePic";

function MessageUser({
  user,
  menu,
  handleUserMenuHighlight,
  handlePageSelect,
}: {
  user: FriendList;
  menu: string | null;
  handleUserMenuHighlight: Function;
  handlePageSelect: Function;
}) {
  const navigate = useNavigate();

  return (
    <button
      className={
        "flex items-center gap-2 p-2 rounded-2xl border-2 cursor-pointer hover:bg-(--glass-fill-light) hover:border-(--glass-border-light)" +
        (user.username === menu
          ? " bg-(--glass-fill-light) border-(--glass-border-light)"
          : " border-(--transparent)")
      }
      onClick={() => {
        handleUserMenuHighlight(user.username);
        handlePageSelect();
        navigate(`/messages/${user.id}`, { replace: true });
      }}
    >
      {user && <ProfilePic user={user} />}

      <h2 className="text-white text-left text-sm font-[Syncopate] font-bold flex-1">
        {user.username}
      </h2>
      <img
        src={"/assets/icons/" + (user.isOnline ? "online.svg" : "offline.svg")}
        alt="online-status"
      />
    </button>
  );
}

export default MessageUser;
