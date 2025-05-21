import { HeadingSmall } from "../../../components/texts/Heading";
import Menu from "../../../components/ui/menu/Menu";
import UserProfileView from "../../../components/ui/profile/UserProfileView";

function UserProfile() {
  return (
    <main className="flex flex-col gap-2 p-2 h-dvh">
      <HeadingSmall />
      <div className="flex-1 flex gap-2">
        <Menu name="null" />
        <UserProfileView />
      </div>
    </main>
  );
}

export default UserProfile;
