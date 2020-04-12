import React from "react";
import { Flex, Stack, Avatar, ListIcon, Text, ListItem } from "@chakra-ui/core";

const Song = ({ song, index }) => {
  return (
    <ListItem key={index} display="flex" alignItems="center">
      <Avatar name="album" />
      <Text pl={4}>{song.name}</Text>
    </ListItem>
  );
};

export default Song;
