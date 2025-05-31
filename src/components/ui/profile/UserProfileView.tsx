import RequestButton from "../buttons/RequestButton";
import UserPic from "./UserPic";
import ButtonFunc from "../buttons/ButtonFunc";
import UserSection from "./UserSections";
import { useState } from "react";
import { getHeader, getUserApi } from "../../../utils/apis/getRequests";
import { useQuery } from "@tanstack/react-query";
import ProfileLoader from "../loaders/ProfileLoader";
import { useParams } from "react-router";
import socket from "../../../app/socket";
import { useNavigate } from "react-router";
import alert from "../alert/alert";

function UserProfileView() {
  const navigate = useNavigate();
  const [page, setPage] = useState("Posts");
  const { userId } = useParams();
  const header = getHeader();
  const token = header.headers.Authorization;
  socket.auth = { token };
  socket.connect();

  const user = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      if (userId) {
        return getUserApi(header, userId);
      }
    },
  });

  function updateView(e) {
    setPage(e.target.textContent);
  }

  if (user.isPending) {
    return <ProfileLoader />;
  }

  if (user.data) {
    const userData = user.data.data.data;

    if (!user.data.data.auth) {
      alert("login to view the page");
      navigate("/login", { replace: true });
      return;
    }

    return (
      <section className="flex-auto flex items-center md:justify-center text-white min-h-0">
        <div className="w-full md:min-w-[400px] md:max-w-[60%] h-full flex flex-col md:items-center gap-5 py-3 px-2 md:px-15 rounded-2xl border-2 border-(--glass-border-light) bg-(--glass-fill-light) backdrop-blur-(--glass-blur)">
          <div className="md:min-w-[400px] flex gap-4 items-center mt-[30px] py-5 px-3 rounded-2xl border-2 border-(--glass-border-dark) bg-(--glass-fill-dark)">
            <UserPic user={userData} />
            <div className="flex-auto flex flex-col justify-around">
              <h1 className="font-[Syncopate] font-bold text-lg">
                {userData.username}
              </h1>
              <p className="font-[space_grotesk] text-slate-300">
                {userData.bio}
              </p>
            </div>
            <RequestButton user={userData} />
          </div>
          <div className="md:min-w-[400px] grid grid-cols-3 gap-2">
            <ButtonFunc
              text="Posts"
              callback={updateView}
              page={page}
              isPending={false}
            />
            <ButtonFunc
              text="Likes"
              callback={updateView}
              page={page}
              isPending={false}
            />
            <ButtonFunc
              text="Comments"
              callback={updateView}
              page={page}
              isPending={false}
            />
          </div>
          <div className="md:min-w-[400px] flex-auto min-h-0 overflow-auto">
            <UserSection page={page} user={userData} />
          </div>
        </div>
      </section>
    );
  }
}

export default UserProfileView;
