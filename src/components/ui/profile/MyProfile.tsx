import UserPic from "./UserPic";
import ButtonFunc from "../buttons/ButtonFunc";
import UserSection from "./UserSections";
import { useRef, useState } from "react";
import { getHeader, getCurrentUserApi } from "../../../utils/apis/getRequests";
import { useQuery } from "@tanstack/react-query";
import EditModal from "../modal/EditModal";
import ProfileLoader from "../loaders/ProfileLoader";

function MyProfile() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const [page, setPage] = useState("Posts");
  const header = getHeader();

  const currentUser = useQuery({
    queryKey: ["currentUser"],
    queryFn: () => {
      return getCurrentUserApi(header);
    },
  });

  function updateView(e) {
    setPage(e.target.textContent);
  }

  function openEditModal() {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }

  if (currentUser.isPending) {
    return <ProfileLoader />;
  }

  if (currentUser.data) {
    const userData = currentUser.data.data.data;
    return (
      <section className="flex-auto flex items-center justify-center text-white">
        <div className="min-w-[50%] h-full flex flex-col gap-5 py-3 px-15 rounded-2xl border-2 border-(--glass-border-light) bg-(--glass-fill-light) backdrop-blur-(--glass-blur)">
          <div className="min-w-[400px] flex gap-4 items-center mt-[30px] py-5 px-3 rounded-2xl border-2 border-(--glass-border-dark) bg-(--glass-fill-dark)">
            <UserPic user={userData} />
            <div className="flex-auto flex flex-col justify-around">
              <h1 className="font-[Syncopate] font-bold text-lg">
                {userData.username}
              </h1>
              <p className="font-[space_grotesk] text-slate-300">
                {userData.bio}
              </p>
            </div>
            <ButtonFunc
              text="Edit"
              callback={openEditModal}
              isPending={false}
            />
          </div>
          <div className="min-w-[400px] grid grid-cols-3 gap-2">
            <ButtonFunc text="Posts" callback={updateView} page={page} />
            <ButtonFunc text="Likes" callback={updateView} page={page} />
            <ButtonFunc text="Comments" callback={updateView} page={page} />
          </div>
          <div className="min-w-[400px] flex-auto">
            <UserSection page={page} user={userData} />
          </div>
        </div>
        <EditModal ref={dialogRef} />
      </section>
    );
  }
}

export default MyProfile;
