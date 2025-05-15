import UserPic from "./UserPic";
import RequestButton from "../buttons/RequestButton";
import ButtonFunc from "../buttons/ButtonFunc";
import UserSection from "./UserSections";
import { useState } from "react";
import type { User } from "../../../types/types";

function UserProfile({ user }: { user: User }) {
  const [page, setPage] = useState("Posts");

  function updateView(e) {
    setPage(e.target.textContent);
  }

  return (
    <section className="flex-auto flex items-center justify-center text-white">
      <div className="w-[50%] h-full flex flex-col gap-5 py-3 px-15 rounded-2xl border-2 border-(--glass-border-light) bg-(--glass-fill-light) backdrop-blur-(--glass-blur)">
        <div className="flex gap-4 items-center mt-[30px] py-5 px-3 rounded-2xl border-2 border-(--glass-border-dark) bg-(--glass-fill-dark)">
          <UserPic user={user} />
          <div className="flex-auto flex flex-col justify-around">
            <h1 className="font-[Syncopate] font-bold text-lg">
              {user.username}
            </h1>
            <p className="font-[space_grotesk] text-slate-300">{user.bio}</p>
          </div>
          <RequestButton user={user} />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <ButtonFunc text="Posts" callback={updateView} />
          <ButtonFunc text="Likes" callback={updateView} />
          <ButtonFunc text="Comments" callback={updateView} />
        </div>
        <div className="flex-auto flex justify-center items-center">
          <UserSection page={page} user={user} />
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
