import { HeadingSmall } from "../../../components/texts/Heading";
import Menu from "../../../components/ui/menu/Menu";
import FindFriendsWall from "../../../components/ui/users/FindFriendsWall";

function FindFriends() {
  return (
    <main className="flex flex-col gap-2 p-2 h-dvh">
      <HeadingSmall />
      <div className="flex-auto flex flex-col-reverse md:flex-row gap-2 min-h-0">
        <Menu name="find-friends" />
        <FindFriendsWall />
      </div>
    </main>
  );
}

export default FindFriends;
