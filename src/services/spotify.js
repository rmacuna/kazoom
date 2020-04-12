import { Client, TrackHandler, PlaylistHandler } from "spotify-sdk";
import firebase from "./firebase";

const client = Client.instance;

client.settings = {
  clientId: "a72de9cdda314bc58b043dac09a81c3c",
  secretId: "2bbce5b5ac1549519adbea4134353899",
  redirect_uri: "localhost:3000/app",
  state: firebase.auth().currentUser ? firebase.auth().currentUser.uid : "",
  scopes: ["streaming", "user-modify-playback-state"],
};
