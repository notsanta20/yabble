import ActiveUserLoader from "../loaders/ActiveUserLoader";
import ActiveUserCard from "./ActiveUserCard";
import { useQuery } from "@tanstack/react-query";
import { activeUsersApi } from "../../../utils/apis/getRequests";
import type { BasicUser } from "../../../types/types";
import { useNavigate } from "react-router";
import alert from "../alert/alert";

function ActiveUsers() {
  const navigate = useNavigate();
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["activeUsers"],
    queryFn: activeUsersApi,
    refetchOnMount: true,
  });

  if (error) {
    if (error.status === 401) {
      alert("Login to view posts");
      navigate("/login", { replace: true });
      return;
    }
  }

  return (
    <section className="flex flex-col gap-2 p-2 rounded-2xl border-2 border-(--glass-border-light) bg-(--glass-fill-dark) backdrop-blur-(--glass-blur) w-[220px]">
      <h1 className="font-[Syncopate] font-bold text-white text-xs text-center">
        Active users
      </h1>
      {isPending && <ActiveUserLoader />}
      {isPending && <ActiveUserLoader />}
      {isPending && <ActiveUserLoader />}
      {isError && (
        <h2 className="text-white font-[space_grotesk] text-center">
          Error in fetching users
        </h2>
      )}
      {data && (
        <ul>
          {data.data.data.map((d: BasicUser) => (
            <ActiveUserCard user={d} key={d.id} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default ActiveUsers;
