import PostCompactCard from "./PostCompactCard";
import type { PostCompact } from "../../../types/types";
import { useQuery } from "@tanstack/react-query";
import { getHeader, allPostsApi } from "../../../utils/apis/getRequests";
import alert from "../alert/alert";

// const test: PostCompact = {
//   id: "testID",
//   title:
//     "Vikram Misri “It may be a surprise to Pakistan to see citizens criticising their own govt, cuz that is the hallmark of a functioning democracy” ",
//   description: null,
//   image: null,
//   time: "2025-05-08T08:05:48.300Z",
//   userId: "testststst",
//   _count: {
//     Likes: 1,
//     Comments: 2,
//   },
//   user: {
//     id: "asdfjalksdfjlk",
//     username: "testUser",
//     profilePic: null,
//   },
// };

function PostWall() {
  const header = getHeader();
  const { isPending, data, error } = useQuery({
    queryKey: ["allPost", header],
    queryFn: () => {
      return allPostsApi(header);
    },
  });

  if (isPending) {
  }

  if (error) {
    alert(error.response.data.message);
  }

  if (data) {
    const allPosts = data.data.data;
    return (
      <ul className="min-h-0 flex flex-col gap-2 px-10 overflow-y-auto">
        {allPosts.map((post: PostCompact) => (
          <PostCompactCard post={post} key={post.id} />
        ))}
      </ul>
    );
  }

  // return (
  //   <ul className=" flex flex-col gap-2 px-10 overflow-y-auto">
  //     <PostCompactCard post={test} />
  //     <PostCompactCard post={test} />
  //     <PostCompactCard post={test} />
  //   </ul>
  // );
}

export default PostWall;
