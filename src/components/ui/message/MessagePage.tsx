import { useParams } from "react-router";
import MessageInput from "../form/MessageInput";
import MessageCard from "./MessageCard";
import type { Chat } from "../../../types/types";
import socket from "../../../app/socket";
import { useState, useEffect, useRef } from "react";
import {
  LeftMessageLoader,
  RightMessageLoader,
} from "../loaders/MessageLoader";

function MessageWall() {
  const { userId } = useParams();
  const [messages, setMessages] = useState<Array<Chat> | null>(null);
  const messagesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    socket.emit("getMessage", userId);
    socket.on("receiveMessages", (data) => {
      setMessages(data);
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

  if (messages && userId) {
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
      <div className="flex-auto flex flex-col gap-3 min-h-0">
        <div
          ref={messagesRef}
          className="flex-auto min-h-0 overflow-auto message-container"
        >
          <ul className="flex flex-col justify-end gap-3">
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
