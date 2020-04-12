import { firebase, functions } from "./firebase";
import { connect, createLocalTracks } from "twilio-video";

const getToken = async (roomName) => {
  const fn = functions.httpsCallable("videoToken");
  const {
    data: { jwt },
  } = await fn({ room: roomName });
  return jwt;
};

export const connectToRoom = async (roomName) => {
  const token = await getToken(roomName);

  const localTracks = await createLocalTracks({
    audio: true,
    video: {
      width: 640,
    },
  });

  const room = await connect(token, {
    name: roomName,
    tracks: localTracks,
  });

  return room;
};
