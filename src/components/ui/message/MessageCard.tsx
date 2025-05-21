import type { Chat } from "../../../types/types";
import getMessageTime from "../../../utils/getMessageTime";

function MessageCard({ chat, receiverID }: { chat: Chat; receiverID: string }) {
  const time = getMessageTime(chat.time);

  return (
    <li
      className={
        "flex gap-2 items-center text-white font-[dm_sans] p-2 rounded-2xl border-2 border-(--glass-border-light) bg-(--glass-fill-light) backdrop-blur-(--glass-blur)" +
        (receiverID === chat.receiverId
          ? " flex-row self-end"
          : " flex-row-reverse self-start")
      }
    >
      <span className="text-xs text-white/70">{time}</span>
      {chat.message && <span>{chat.message}</span>}
    </li>
  );
}

export default MessageCard;
