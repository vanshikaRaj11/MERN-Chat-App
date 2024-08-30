import { Box } from "@chakra-ui/react";
import { ChatState } from "../context/ChatProvider";
import React from "react";
import SingleChat from "./SingleChat";

const ChatBox = ({fetchAgain, setFetchAgain}) => {
  const { selectedChats } = ChatState();
  return (
    <Box
      d={{ base: selectedChats ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default ChatBox;
