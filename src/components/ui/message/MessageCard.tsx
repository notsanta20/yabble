import type { Chat } from "../../../types/types";
import getPostTime from "../../../utils/getPostTime";

function MessageCard({
  chat,
  userId,
}: {
  chat: Chat;

  userId: string;
}) {
  const time = getPostTime(chat.time);
  return (
    <li
      className={
        "flex gap-2 items-center text-white font-[dm_sans] p-2 rounded-2xl border-2 border-(--glass-border-light) bg-(--glass-fill-light) backdrop-blur-(--glass-blur)" +
        (userId === chat.receiverId ? " self-start" : " self-end")
      }
    >
      <span className="text-xs">{time}</span>
      {chat.message && <span>{chat.message}</span>}
    </li>
  );
}

export default MessageCard;
