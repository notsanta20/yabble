import { useForm } from "react-hook-form";
import { messageSchema } from "../../../schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Error, Header, Message } from "../../../types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getHeader, sendMessageApi } from "../../../utils/apis/putRequests";
import alert from "../alert/alert";

function MessageInput({ userId }: { userId: string }) {
  const header = getHeader();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(messageSchema),
  });

  const message = useMutation({
    mutationKey: ["message"],
    mutationFn: ({
      userId,
      text,
      image,
      header,
    }: {
      userId: string;
      text: Message | undefined;
      image: string | undefined;
      header: Header;
    }) => {
      return sendMessageApi({ userId, text, image, header });
    },
    onError: (error: Error) => {
      alert(error.response.data.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["messages"] });
    },
  });

  function handleMessageSubmit(text: Message) {
    const image = undefined;
    message.mutate({ userId, text, image, header });
    reset();
  }

  return (
    <div>
      <form className="relative" onSubmit={handleSubmit(handleMessageSubmit)}>
        <input
          {...register("message")}
          type="text"
          name="message"
          placeholder="start chatting"
          className="w-full rounded-2xl border-2 border-(--glass-border-dark) bg-(--glass-fill-dark) backdrop-blur-(--glass-blur) p-3 text-white font-[space_grotesk] outline-none text-sm"
        />
        <button
          className="absolute w-[30px] h-auto top-[50%] translate-y-[-50%] right-[10px] cursor-pointer hover:scale-90"
          disabled={message.isPending}
        >
          <img
            src={
              "/assets/" +
              (message.isPending ? "loaders/spinner.svg" : "icons/send.svg")
            }
            alt="add-comment"
          />
        </button>
      </form>
      <p className="text-sm text-red-600 font-[dm_sans] h-[20px] p-2">
        {typeof errors.message === "undefined" ? "" : errors.message.message}
      </p>
    </div>
  );
}

export default MessageInput;
