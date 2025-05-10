import { HeadingSmall } from "../../../components/texts/Heading";
import Menu from "../../../components/ui/menu/Menu";

function Profile() {
  return (
    <main className="flex flex-col gap-2 p-2">
      <HeadingSmall />
      <div className="flex-1 flex gap-2">
        <Menu name="profile" />
        <div className="flex-1">Profile</div>
      </div>
    </main>
  );
}

export default Profile;
