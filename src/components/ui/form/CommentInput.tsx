import { useForm } from "react-hook-form";
import { commentSchema } from "../../../schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Error, Header, UserComment } from "../../../types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getHeader, addCommentsApi } from "../../../utils/apis/putRequests";

function CommentInput({ postId }: { postId: string }) {
  const header = getHeader();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(commentSchema),
  });

  const comment = useMutation({
    mutationKey: ["comment"],
    mutationFn: ({
      commentData,
      postId,
      header,
    }: {
      commentData: UserComment;
      postId: string;
      header: Header;
    }) => {
      return addCommentsApi({ commentData, postId, header });
    },
    onError: (error: Error) => {
      alert(error.response.data.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["post"] });
    },
  });

  function handleCommentSubmit(commentData: UserComment) {
    comment.mutate({ commentData, postId, header });
    reset();
  }

  return (
    <div>
      <form className="relative" onSubmit={handleSubmit(handleCommentSubmit)}>
        <input
          {...register("comment")}
          type="text"
          name="comment"
          placeholder="join the discussion"
          className="w-full rounded-2xl border-2 border-(--glass-border-light) bg-(--glass-fill-light) backdrop-blur-(--glass-blur) p-3 text-white font-[space_grotesk] outline-none text-sm"
        />
        <button
          className="absolute w-[30px] h-auto top-[50%] translate-y-[-50%] right-[10px] cursor-pointer hover:scale-90"
          disabled={comment.isPending}
        >
          <img
            src={
              "/assets/" +
              (comment.isPending ? "loaders/spinner.svg" : "icons/send.svg")
            }
            alt="add-comment"
            className="rotate-180"
          />
        </button>
      </form>
      <p className="text-sm text-red-600 font-[dm_sans] h-[20px] p-2">
        {typeof errors.comment === "undefined" ? "" : errors.comment.message}
      </p>
    </div>
  );
}

export default CommentInput;
