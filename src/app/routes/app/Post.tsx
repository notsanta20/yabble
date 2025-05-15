import { HeadingSmall } from "../../../components/texts/Heading";
import Menu from "../../../components/ui/menu/Menu";
import SinglePost from "../../../components/ui/Post/SinglePost";
import type { Post } from "../../../types/types";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getHeader, getPostApi } from "../../../utils/apis/getRequests";
import PostLoader from "../../../components/ui/loaders/PostLoader";

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
    return (
      <main className="flex flex-col gap-2 p-2 h-dvh">
        <HeadingSmall />
        <section className="flex gap-2 h-full">
          <Menu name="post" />
          <PostLoader />
        </section>
      </main>
    );
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
