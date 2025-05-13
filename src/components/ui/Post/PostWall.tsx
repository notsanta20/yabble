import PostCompactCard from "./PostCompactCard";
import type { PostCompact } from "../../../types/types";
function PostWall() {
  const test: PostCompact = {
    id: "testID",
    title:
      "Vikram Misri “It may be a surprise to Pakistan to see citizens criticising their own govt, cuz that is the hallmark of a functioning democracy” ",
    description: null,
    image: null,
    time: "2025-05-08T08:05:48.300Z",
    userId: "testststst",
    _count: {
      Likes: 1,
      Comments: 2,
    },
    user: {
      id: "asdfjalksdfjlk",
      username: "testUser",
      profilePic: null,
    },
  };

  return (
    <section className="flex flex-col gap-2 px-10">
      <PostCompactCard post={test} />
      <PostCompactCard post={test} />
      <PostCompactCard post={test} />
    </section>
  );
}

export default PostWall;
