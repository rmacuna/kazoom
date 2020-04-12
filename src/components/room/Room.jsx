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
  const remoteMediaDivRef = useRef();
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    //room.localParticipant.tracks.forEach((publication) => {
    // const track = publication.track;
    // remoteMediaDivRef.current.appendChild(track.attach());
    //});

    room.on("participantConnected", (participant) => {
      console.log(`Participant "${participant.identity}" connected`);

      participant.tracks.forEach((publication) => {
        if (publication.isSubscribed) {
          const track = publication.track;
          remoteMediaDivRef.current.appendChild(track.attach());
        }
      });

      participant.on("trackSubscribed", (track) => {
        remoteMediaDivRef.current.appendChild(track.attach());
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
      <div id="remote-media-div" ref={remoteMediaDivRef}></div>
    </SimpleGrid>
  );
};

export default Room;
