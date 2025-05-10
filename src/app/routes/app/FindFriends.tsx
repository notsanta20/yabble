import { HeadingSmall } from "../../../components/texts/Heading";
import Menu from "../../../components/ui/menu/Menu";

function FindFriends() {
  return (
    <main className="flex flex-col gap-2 p-2">
      <HeadingSmall />
      <div className="flex-1 flex gap-2">
        <Menu name="find-friends" />
        <div className="flex-1">Find Friends</div>
      </div>
    </main>
  );
}

export default FindFriends;
