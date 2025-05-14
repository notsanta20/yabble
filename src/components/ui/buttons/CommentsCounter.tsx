function CommentsCounter({ comments }: { comments: number }) {
  return (
    <div className="flex gap-1">
      <img
        src="/assets/icons/comments.svg"
        alt="comment"
        className="w-[22px] h-auto"
      />
      <div>{comments}</div>
    </div>
  );
}

export default CommentsCounter;
