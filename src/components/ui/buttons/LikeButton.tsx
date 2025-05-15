import { getHeader, addLikeApi } from "../../../utils/apis/putRequests";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Header } from "../../../types/types";
import alert from "../alert/alert";

function LikeButton({
  id,
  likes,
  isLiked,
}: {
  id: string;
  likes: number;
  isLiked: Array<object>;
}) {
  const queryClient = useQueryClient();
  const header = getHeader();
  const { mutate } = useMutation({
    mutationKey: ["addLike", header],
    mutationFn: ({ id, header }: { id: string; header: Header }) => {
      return addLikeApi({ id, header });
    },
    onSettled: (error) => {
      if (error) {
        alert(error.response.data.message);
      } else {
        queryClient.invalidateQueries({ queryKey: ["allPost"] });
        queryClient.invalidateQueries({ queryKey: ["post"] });
        queryClient.invalidateQueries({ queryKey: ["currentUser"] });
      }
    },
  });

  return (
    <div className="flex gap-2 cursor-pointer">
      <img
        src={
          "/assets/icons/" +
          (isLiked.length > 0 ? "heartFilled.svg" : "heart.svg")
        }
        alt="like"
        className="w-[22px] h-auto"
        onClick={(e) => {
          e.stopPropagation();
          mutate({ id, header });
        }}
      />
      <div>{likes}</div>
    </div>
  );
}

export default LikeButton;
