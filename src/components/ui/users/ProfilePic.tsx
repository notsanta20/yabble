import type { BasicUser, FindFriendsUser } from "../../../types/types";

function ProfilePic({ user }: { user: BasicUser | FindFriendsUser }) {
  if (user.profilePic) {
    return (
      <div className="w-[25px] h-[25px] flex justify-center items-center">
        <img
          src={user.profilePic}
          alt="profile-pic"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    );
  }
  return (
    <div className="rounded-full bg-white w-[25px] h-[25px] flex justify-center items-center">
      <h2 className="font-[space_grotesk] font-bold text-lg">
        {user.username[0].toUpperCase()}
      </h2>
    </div>
  );
}

export default ProfilePic;
