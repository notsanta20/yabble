import { HeadingSmall } from "../../../components/texts/Heading";
import Menu from "../../../components/ui/menu/Menu";
import SinglePost from "../../../components/ui/Post/SinglePost";
import type { Post } from "../../../types/types";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getHeader, getPostApi } from "../../../utils/apis/getRequests";

// const test: Post = {
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
//   Likes: [],
//   Comments: [],
//   user: {
//     id: "asdfjalksdfjlk",
//     username: "testUser",
//     profilePic: null,
//   },
// };

function Post() {
  const { postId } = useParams();
  const header = getHeader();
  const { isPending, data, error } = useQuery({
    queryKey: ["post"],
    queryFn: () => {
      if (postId) {
        return getPostApi(header, postId);
      }
    },
  });

  if (isPending) {
  }

  if (error) {
    alert(error.response.data.message);
  }

  if (data) {
    const post = data.data.data;
    return (
      <main className="flex flex-col gap-2 p-2 h-dvh">
        <HeadingSmall />
        <section className="flex gap-2 h-full">
          <Menu name="post" />
          <SinglePost post={post} />;
        </section>
      </main>
    );
  }
}

export default Post;
