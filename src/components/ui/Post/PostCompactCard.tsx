import type { PostCompact } from "../../../types/types";
import getPostTime from "../../../utils/getPostTime";
import CommentsCounter from "../buttons/CommentsCounter";
import LikeButton from "../buttons/LikeButton";
import { useNavigate } from "react-router";

function PostCompact({ post }: { post: PostCompact }) {
  const time: string = getPostTime(post.time);
  const navigate = useNavigate();

  function handlePostClick(id: string) {
    navigate(`/post/${id}`, { replace: true });
  }

  return (
    <li
      className="flex gap-2 p-2 rounded-2xl border-2 border-(--glass-border-light) bg-(--glass-fill-dark) backdrop-blur-(--glass-blur) hover:bg-(--glass-fill-light) text-white font-[space_grotesk]"
      onClick={() => {
        handlePostClick(post.id);
      }}
    >
      <div className="w-[80px] h-[60px] rounded-2xl">
        <img
          src={post.image ? post.image : "/assets/icons/post.svg"}
          alt="post-pic"
          className="w-full"
        />
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <h1 className="text-lg">{post.user.username}</h1>
        <h2 className="font-[dm_sans]">{post.title}</h2>
        <div className="flex gap-4">
          <LikeButton
            id={post.id}
            likes={post._count.Likes}
            isLiked={post.Likes}
          />
          <CommentsCounter comments={post._count.Comments} />
          <div className="flex gap-1">
            <img
              src="/assets/icons/time.svg"
              alt="comment"
              className="w-[22px] h-auto"
            />
            <div>{time + " ago"}</div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default PostCompact;
