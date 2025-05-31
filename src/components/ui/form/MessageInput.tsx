import { useForm } from "react-hook-form";
import { messageSchema } from "../../../schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Chat, Message } from "../../../types/types";
import socket from "../../../app/socket";

function MessageInput({
  userId,
  messages,
  setMessages,
}: {
  userId: string;
  messages: Array<Chat>;
  setMessages: Function;
}) {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(messageSchema),
  });

  function handleMessageSubmit(text: Message) {
    const image = undefined;
    socket.emit("sendMessage", { userId, text, image });
    const newMessage = [...messages];
    const time = new Date();
    newMessage.push({
      contactId: userId,
      id: time.toString(),
      image: null,
      message: text.message,
      receiverId: userId,
      senderId: time.toString(),
      time: time.toString(),
    });
    setMessages(newMessage);
    reset();
    setFocus("message");
  }

  return (
    <div>
      <form className="relative" onSubmit={handleSubmit(handleMessageSubmit)}>
        <input
          {...register("message")}
          type="text"
          name="message"
          placeholder="start chatting"
          autoComplete="off"
          className="w-full rounded-2xl border-2 border-(--glass-border-dark) bg-(--glass-fill-dark) backdrop-blur-(--glass-blur) p-3 text-white font-[space_grotesk] outline-none text-sm"
        />
        <button
          className="absolute w-[30px] h-auto top-[50%] translate-y-[-50%] right-[10px] cursor-pointer hover:scale-90"
          disabled={errors.message ? true : false}
        >
          <img src={"/assets/icons/send.svg"} alt="add-comment" />
        </button>
      </form>
    </div>
  );
}

export default MessageInput;
