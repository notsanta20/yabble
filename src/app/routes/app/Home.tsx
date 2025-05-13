import { HeadingSmall } from "../../../components/texts/Heading";
import Menu from "../../../components/ui/menu/Menu";
import PostWall from "../../../components/ui/Post/PostWall";
import ActiveUsers from "../../../components/ui/users/ActiveUsers";

function Home() {
  return (
    <main className="flex flex-col gap-2 p-2 h-screen">
      <HeadingSmall />
      <div className="flex-1 flex gap-2">
        <Menu name="home" />
        <div className="flex-1">
          <PostWall />
        </div>
        <ActiveUsers />
      </div>
    </main>
  );
}

export default Home;
