import PostCompactCard from "./PostCompactCard";
import type { Post } from "../../../types/types";
import { useQuery } from "@tanstack/react-query";
import { getHeader, allPostsApi } from "../../../utils/apis/getRequests";
import PostCompactLoader from "../loaders/PostCompactLoader";
import alert from "../alert/alert";
import socket from "../../../app/socket";
import { useNavigate } from "react-router";

function PostWall() {
  const navigate = useNavigate();
  const header = getHeader();
  const token = header.headers.Authorization;
  socket.auth = { token };
  socket.connect();

  const { isPending, data, error } = useQuery({
    queryKey: ["allPost", header],
    queryFn: () => {
      return allPostsApi(header);
    },
  });

  if (isPending) {
    return (
      <ul className="flex flex-col gap-2">
        <PostCompactLoader />
        <PostCompactLoader />
        <PostCompactLoader />
      </ul>
    );
  }

  if (error) {
    alert(error.response.data.message);
  }

  if (typeof data === "undefined") {
    return (
      <div className="flex h-full items-center">
        <h1 className="font-[Syncopate] font-bold text-sm text-white text-center">
          Internal server error, failed to fetch posts.
        </h1>
      </div>
    );
  }

  if (data) {
    if (!data.data.auth) {
      alert("login to view the page");
      navigate("/login", { replace: true });
      return;
    }

    const allPosts = data.data.data;
    return (
      <ul className="flex flex-col gap-2 overflow-y-auto post-container">
        {allPosts.map((post: Post) => (
          <PostCompactCard post={post} key={post.id} />
        ))}
      </ul>
    );
  }
}

export default PostWall;
