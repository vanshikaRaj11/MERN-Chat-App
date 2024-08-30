import { Badge } from '@chakra-ui/react';
import { IoMdClose } from "react-icons/io";
import React from 'react'

const UserBadgeItem = ({user,handleFunction}) => {
  return (
    <Badge
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      colorScheme="purple"
      cursor="pointer"
      onClick={handleFunction}
    >
      {user.name}
      <IoMdClose pl={1} />
    </Badge>
  );
}

export default UserBadgeItem
