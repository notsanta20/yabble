import { useParams } from "react-router";
import MessageInput from "../form/MessageInput";
import MessageCard from "./MessageCard";
import { getHeader, getMessages } from "../../../utils/apis/getRequests";
import { useQuery } from "@tanstack/react-query";
import type { Chat } from "../../../types/types";

function MessageWall() {
  const { userId } = useParams();
  const header = getHeader();

  const messages = useQuery({
    queryKey: ["messages", userId],
    queryFn: () => {
      if (userId) {
        return getMessages(header, userId);
      }
    },
  });

  if (messages.isPending) {
  }

  if (messages.data && userId) {
    const data = messages.data.data.data;

    if (data.length === 0) {
      return (
        <section className="flex-auto flex flex-col gap-3">
          <div className="flex-auto flex justify-center items-center">
            <h1 className=" text-white font-[Syncopate] font-bold">Say hi!!</h1>
          </div>
          <MessageInput userId={userId} />
        </section>
      );
    }

    return (
      <div className="flex-auto flex flex-col gap-3 h-full">
        <ul className="flex-auto flex flex-col justify-end gap-3">
          {data.map((chat: Chat) => (
            <MessageCard chat={chat} receiverID={userId} key={chat.id} />
          ))}
        </ul>
        <MessageInput userId={userId} />
      </div>
    );
  }
}

export default MessageWall;
