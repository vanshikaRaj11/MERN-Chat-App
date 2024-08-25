import React, { useEffect, useState } from "react";
import axios from "axios";

const Chat = () => {
  const [chats, setChats] = useState([]);
  const fetchchats = async () => {
    const { data } = await axios.get("/api/chat");

    setChats(data);
  };
  useEffect(() => {
    fetchchats();
  }, []);
  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default Chat;
