import { HeadingSmall } from "../../../components/texts/Heading";
import Menu from "../../../components/ui/menu/Menu";
import MyProfile from "../../../components/ui/profile/MyProfile";

function Profile() {
  return (
    <main className="flex flex-col gap-2 p-2 h-dvh">
      <HeadingSmall />
      <div className="flex-1 flex gap-2">
        <Menu name="profile" />
        <MyProfile />
      </div>
    </main>
  );
}

export default Profile;
