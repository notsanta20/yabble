import type { Post } from "../../../types/types";
import ProfilePic from "../users/ProfilePic";
import getPostTime from "../../../utils/getPostTime";
import LikeButton from "../buttons/LikeButton";
import CommentsCounter from "../buttons/CommentsCounter";
import CommentInput from "../form/CommentInput";
import CommentsSection from "./CommentsSection";
import { useNavigate } from "react-router";

function SinglePost({ post }: { post: Post }) {
  const time: string = getPostTime(post.time);
  const navigate = useNavigate();

  function handleUser() {
    navigate(`/user/${post.user.id}`, { replace: true });
  }

  return (
    <article className="flex-auto flex justify-center min-h-0">
      <div className="flex flex-col gap-4 py-2 px-2 md:px-5 w-full md:w-[80%] text-white rounded-2xl border-2 border-(--glass-fill-dark) bg-(--glass-fill-dark) backdrop-blur-(--glass-blur) font-[space_grotesk] overflow-auto single-post-container">
        <div className="flex gap-2 items-center">
          <ProfilePic user={post.user} />
          <h1 className="cursor-pointer" onClick={handleUser}>
            {post.user.username}
          </h1>
          <p className="text-xs">{time + " ago"}</p>
        </div>
        <h2 className="text-md font-[dm_sans]">{post.title}</h2>
        {post.description && (
          <h3 className="text-md font-[dm_sans]">{post.description}</h3>
        )}
        <div className="flex justify-center max-h-[400px]">
          {post.image && (
            <img src={post.image} alt="post-image" className="w-auto h-full" />
          )}
        </div>
        <div className="flex gap-2">
          <LikeButton
            id={post.id}
            likes={post._count.Likes}
            isLiked={post.Likes}
          />
          <CommentsCounter comments={post._count.Comments} />
        </div>
        <CommentInput postId={post.id} />
        <CommentsSection comments={post.Comments!} />
      </div>
    </article>
  );
}

export default SinglePost;
