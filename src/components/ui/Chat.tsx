"use client";
import { authKey } from "@/constants/storageKey";
import { getFromLocalStorage } from "@/utils/local-storage";
// components/Chat.js
import { useEffect, useState } from "react";
import io from "socket.io-client";

const Chat = ({ userId }: { userId: string }) => {
  console.log(userId);
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const socket = io("http://localhost:5000", {
    auth: {
      token: "64ddefc800e406140bd0993d",
    },
  });
  useEffect(() => {
    // Join the chat room when the component mounts
    socket.emit("join", userId);

    socket.on("message", (message) => {
      console.log(message);
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId]);

  const sendMessage = () => {
    console.log("Sending message:", {
      senderId: userId,
      receiverId: userId,
      content: input,
    });
    if (input.trim() !== "") {
      const receiverId = "REPLACE_WITH_RECEIVER_ID xx"; // Replace with the actual receiver's ID
      socket.emit("sendMessage", {
        senderId: userId,
        receiverId,
        content: input,
      });

      setInput("");
    }
  };
  return (
    <div>
      <div>
        {messages?.map((message) => (
          <div key={message.id}>
            {message.senderId === userId
              ? "You: "
              : `User ${message.senderId}: `}
            {message.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
