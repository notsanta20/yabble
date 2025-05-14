import type { Post } from "../../../types/types";
import ProfilePic from "../users/ProfilePic";
import getPostTime from "../../../utils/getPostTime";
import LikeButton from "../buttons/LikeButton";
import CommentsCounter from "../buttons/CommentsCounter";
import CommentInput from "../form/CommentInput";
import CommentsSection from "./CommentsSection";

function SinglePost({ post }: { post: Post }) {
  const time: string = getPostTime(post.time);
  return (
    <article className="flex-auto flex justify-center">
      <div className="flex flex-col gap-4 py-2 px-5 w-[80%] text-white rounded-2xl border-2 border-(--glass-fill-dark) bg-(--glass-fill-dark) backdrop-blur-(--glass-blur) font-[space_grotesk]">
        <div className="flex gap-2 items-center">
          <ProfilePic user={post.user} />
          <h1>{post.user.username}</h1>
          <p className="text-xs">{time + " ago"}</p>
        </div>
        <h2 className="text-md font-[dm_sans]">{post.title}</h2>
        {post.description && (
          <h3 className="text-md font-[dm_sans]">{post.description}</h3>
        )}
        {post.image && <img src={post.image} alt="post-image" />}
        <div className="flex gap-2">
          <LikeButton
            id={post.id}
            likes={post._count.Likes}
            isLiked={post.Likes}
          />
          <CommentsCounter comments={post._count.Comments} />
        </div>
        <CommentInput />
        <CommentsSection comments={post.Comments} />
      </div>
    </article>
  );
}

export default SinglePost;
