import { firebase, functions } from "./firebase";
import { connect } from "twilio-video";

export const getToken = async (roomName) => {
  const fn = functions.httpsCallable("videoToken");
  const { jwt } = await fn({ room: roomName });
  return jwt;
};

export const connectToRoom = async (roomName) => {
  const token = await getToken(roomName);

  const room = await connect(token, {
    name: roomName,
  });

  return room;
};
