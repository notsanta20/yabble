import type { Comment as CommentCard } from "../../../types/types";
import getPostTime from "../../../utils/getPostTime";
import ProfilePic from "../users/ProfilePic";

function CommentCard({ comment }: { comment: CommentCard }) {
  const time = getPostTime(comment.time);

  return (
    <li className="flex gap-2 p-2 items-center text-white">
      <ProfilePic user={comment.user} />
      <div>
        <div className="flex gap-2 items-center">
          <h1 className="font-[space+grotesk]">{comment.user.username}</h1>
          <p className="text-xs">{time + " ago"}</p>
        </div>
        <p className="font-[dm_sans] text-xs">{comment.comment}</p>
      </div>
    </li>
  );
}

export default CommentCard;
