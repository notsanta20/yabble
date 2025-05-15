import type { Comment } from "../../../types/types";
import CommentCard from "./CommentCard";

function CommentsSection({ comments }: { comments: Array<CommentCard> }) {
  if (comments.length === 0) {
    return (
      <h2 className="flex-auto flex items-center justify-center text-white font-[Syncopate] text-xs font-bold">
        No comments, be first to share what you think.
      </h2>
    );
  }

  return (
    <ul className="flex-auto flex flex-col">
      {comments.map((comment) => (
        <CommentCard comment={comment} key={comment.id} />
      ))}
    </ul>
  );
}

export default CommentsSection;
