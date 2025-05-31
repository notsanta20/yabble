import { useParams, useOutletContext } from "react-router";
import MessageInput from "../form/MessageInput";
import MessageCard from "./MessageCard";
import type { Chat, User } from "../../../types/types";
import socket from "../../../app/socket";
import { useState, useEffect, useRef } from "react";
import {
  LeftMessageLoader,
  RightMessageLoader,
} from "../loaders/MessageLoader";
import ProfilePic from "../users/ProfilePic";

function MessageWall() {
  const [setIsPageClicked] = useOutletContext();
  const { userId } = useParams();
  const [messages, setMessages] = useState<Array<Chat> | null>(null);
  const [receiverData, setReceiverData] = useState<User | null>(null);
  const messagesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    socket.emit("getMessage", userId);
    socket.on("receiveMessages", (data, receiverData) => {
      setMessages(data);
      setReceiverData(receiverData);
    });
  }, [userId]);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  socket.on("receive", (messageData) => {
    let newMessages;
    if (messages) {
      newMessages = messages.slice();
      newMessages.push(messageData);
      setMessages(newMessages);
    }
  });

  function goBack() {
    setIsPageClicked(false);
  }

  if (!messages) {
    return (
      <section className="flex-auto min-h-0 overflow-auto">
        <ul className="flex flex-col gap-3">
          <LeftMessageLoader />
          <RightMessageLoader />
          <LeftMessageLoader />
          <RightMessageLoader />
          <LeftMessageLoader />
          <RightMessageLoader />
          <LeftMessageLoader />
          <RightMessageLoader />
          <RightMessageLoader />
          <LeftMessageLoader />
          <RightMessageLoader />
          <LeftMessageLoader />
          <RightMessageLoader />
        </ul>
      </section>
    );
  }

  if (messages && receiverData && userId) {
    if (messages.length === 0) {
      return (
        <section className="flex-auto flex flex-col gap-3">
          <div className="flex-auto flex justify-center items-center">
            <h1 className=" text-white font-[Syncopate] font-bold">Say hi!!</h1>
          </div>
          <MessageInput
            userId={userId}
            messages={messages}
            setMessages={setMessages}
          />
        </section>
      );
    }

    return (
      <div className="flex-auto flex flex-col gap-2">
        <div className="p-2 rounded-2xl border-2 border-(--glass-border-light) bg-(--glass-fill-light) text-white font-[space_grotesk] flex gap-2 items-center md:hidden">
          <ProfilePic user={receiverData} />
          <h1 className="flex-auto text-xl">{receiverData.username}</h1>
          <button
            className="w-[30px] cursor-pointer rotate-[-90deg] hover:scale-90"
            onClick={goBack}
          >
            <img src={"/assets/icons/send.svg"} alt="add-comment" />
          </button>
        </div>
        <div
          ref={messagesRef}
          className="flex-auto min-h-0 overflow-auto message-container"
        >
          <ul className="flex flex-col gap-3">
            {messages.map((chat: Chat) => (
              <MessageCard chat={chat} receiverID={userId} key={chat.id} />
            ))}
          </ul>
        </div>
        <MessageInput
          userId={userId}
          messages={messages}
          setMessages={setMessages}
        />
      </div>
    );
  }
}

export default MessageWall;
