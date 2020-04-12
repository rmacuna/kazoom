import React, { useEffect, useState, useRef } from "react";
import { SimpleGrid } from "@chakra-ui/core";
import Camera from "../camera/Camera";
import VideoBox from "../videobox/VideoBox";

/**
 *
 * @param {Object} props
 * @param {import('twilio-video').Room} props.room
 */
const Room = ({ countUsers, room }) => {
  console.log({ room });

  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    room.localParticipant.tracks.forEach((publication) => {
      const track = publication.track;
      setTracks([...tracks, track]);
    });

    room.on("participantConnected", (participant) => {
      console.log(`Participant "${participant.identity}" connected`);

      participant.tracks.forEach((publication) => {
        if (publication.isSubscribed) {
          const track = publication.track;
          setTracks([...tracks, track]);
        }
      });

      participant.on("trackSubscribed", (track) => {
        setTracks([...tracks, track]);
      });
    });

    room.once("participantDisconnected", (participant) => {
      console.log(
        `Participant "${participant.identity}" has disconnected from the Room`
      );
    });
  }, []);

  return (
    <SimpleGrid columns={countUsers} spacing={2}>
      {tracks.map((track) => (
        <VideoBox track={track} key={track.sid}></VideoBox>
      ))}
    </SimpleGrid>
  );
};

export default Room;
