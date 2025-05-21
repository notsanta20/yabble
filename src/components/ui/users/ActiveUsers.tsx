import ActiveUserLoader from "../loaders/ActiveUserLoader";
import ActiveUserCard from "./ActiveUserCard";
import { useQuery } from "@tanstack/react-query";
import { getHeader, activeUsersApi } from "../../../utils/apis/getRequests";
import type { ActiveUser } from "../../../types/types";
import { useNavigate } from "react-router";
import alert from "../alert/alert";

function ActiveUsers() {
  const navigate = useNavigate();
  const header = getHeader();

  const { isPending, data, error } = useQuery({
    queryKey: ["activeUsers", header],
    queryFn: () => {
      return activeUsersApi(header);
    },
    refetchOnMount: true,
  });

  if (isPending) {
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

  if (error) {
    const message = error.response.data.message;
    alert(message);
    navigate("/login", { replace: true });

    return (
      <aside className="hidden md:flex flex-col gap-2 p-2 rounded-2xl border-2 border-(--glass-border-light) bg-(--glass-fill-dark) backdrop-blur-(--glass-blur) w-[220px]">
        <h1 className="font-[Syncopate] font-bold text-white text-xs text-center">
          Active users
        </h1>
        <h2 className="text-white font-[space_grotesk] text-center">
          Error in fetching users
        </h2>
      </aside>
    );
  }

  if (data) {
    const userData = data.data.data;

    if (userData.length === 0) {
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
          {userData.map((user: ActiveUser) => (
            <ActiveUserCard user={user.user} key={user.id} />
          ))}
        </ul>
      </aside>
    );
  }
}

export default ActiveUsers;
