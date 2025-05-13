import { HeadingSmall } from "../../../components/texts/Heading";
import Menu from "../../../components/ui/menu/Menu";
import PostWall from "../../../components/ui/Post/PostWall";
import ActiveUsers from "../../../components/ui/users/ActiveUsers";

function Home() {
  return (
    <main className="flex flex-col gap-2 p-2 h-dvh">
      <HeadingSmall />
      <section className="flex-1 flex flex-col-reverse md:flex-row gap-2">
        <Menu name="home" />
        <article className="flex-auto">
          <PostWall />
        </article>
        <ActiveUsers />
      </section>
    </main>
  );
}

export default Home;
