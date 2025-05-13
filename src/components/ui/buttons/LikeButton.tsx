import { getHeader, addLikeApi } from "../../../utils/apis/putRequests";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

function LikeButton({ id, likes }: { id: string; likes: number }) {
  const queryClient = useQueryClient();
  const header = getHeader();
  const { mutate } = useMutation({
    mutationKey: ["addLike", header],
    mutationFn: () => {
      return addLikeApi(id, header);
    },
    onSuccess: () => {
      queryClient.setQueryData(["allPost"], header);
    },
  });

  return (
    <div className="flex gap-2 cursor-pointer">
      <img
        src="/assets/icons/heart.svg"
        alt="like"
        className="w-[22px] h-auto"
        onClick={() => {
          mutate(id, header);
        }}
      />
      <div>{likes}</div>
    </div>
  );
}

export default LikeButton;
