import type { User } from "../../../types/types";

function UserPic({ user }: { user: User }) {
  if (user.profilePic) {
    return (
      <div className=" rounded-full w-[100px] h-[100px] flex justify-center items-center">
        <img src={user.profilePic} alt="profile-pic" />
      </div>
    );
  }
  return (
    <div className="rounded-full bg-white w-[100px] h-[100px] flex justify-center items-center">
      <h2 className="font-[Syncopate] font-bold text-6xl text-black">
        {user.username[0].toUpperCase()}
      </h2>
    </div>
  );
}

export default UserPic;
