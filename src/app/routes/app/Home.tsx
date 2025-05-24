import { useRef } from "react";
import { HeadingSmall } from "../../../components/texts/Heading";
import Menu from "../../../components/ui/menu/Menu";
import PostWall from "../../../components/ui/Post/PostWall";
import ActiveUsers from "../../../components/ui/users/ActiveUsers";
import PostModal from "../../../components/ui/modal/PostModal";

function Home() {
  const postDialogRef = useRef<HTMLDialogElement | null>(null);

  function openModal() {
    if (postDialogRef.current) {
      postDialogRef.current.showModal();
    }
  }

  return (
    <main className="flex flex-col gap-2 p-2 h-dvh">
      <HeadingSmall />
      <section className="flex-1 flex flex-col-reverse md:flex-row gap-2">
        <Menu name="home" />
        <article className="flex-auto flex flex-col gap-2 px-10">
          <button
            className="text-white text-sm font-[Syncopate] font-bold py-2 px-3 rounded-2xl border-2 border-(--glass-border-light) bg-(--glass-fill-light) hover:cursor-pointer hover:bg-(--glass-fill-dark) hover:border(--glass-border-dark) outline-none"
            onClick={openModal}
          >
            Create Post
          </button>
          <PostWall />
          <PostModal ref={postDialogRef} />
        </article>
        <ActiveUsers />
      </section>
    </main>
  );
}

export default Home;
