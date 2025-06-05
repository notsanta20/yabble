import { HeadingSmall } from "../../../components/texts/Heading";
import Menu from "../../../components/ui/menu/Menu";
import SinglePost from "../../../components/ui/Post/SinglePost";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getHeader, getPostApi } from "../../../utils/apis/getRequests";
import PostLoader from "../../../components/ui/loaders/PostLoader";
import notification from "../../../components/ui/alert/notification";
import axios from "axios";

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

  if (axios.isAxiosError(error)) {
    if (error.response) {
      notification(error.response.data.message);
    }
  }

  if (data) {
    const post = data.data.data;
    return (
      <main className="flex flex-col gap-2 p-2 h-dvh">
        <HeadingSmall />
        <section className="flex-1 flex flex-col-reverse md:flex-row gap-2 min-h-0">
          <Menu name="post" />
          <SinglePost post={post} />
        </section>
      </main>
    );
  }
}

export default Post;
