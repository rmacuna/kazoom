import React from "react";
import { List, ListItem, ListIcon, Avatar } from "@chakra-ui/core";
import Song from "../song/Song";

const SongList = ({ songs }) => {
  return (
    <List m={0} p={0} alignItems="center">
      {songs.map((song, index) => {
        return <Song index={index} song={song} />;
      })}
    </List>
  );
};

export default SongList;
