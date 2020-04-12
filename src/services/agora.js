import * as AgoraRTC from "agora-rtc-sdk";

const option = {
  appID: "1adf0dc6f32647479de68dffd87ee746",
};

export const client = AgoraRTC.createClient({ mode: "rtc", codec: "h264" });

export const init = () =>
  new Promise((resolve, reject) =>
    client.init(option.appID, resolve, (err) => reject(err))
  );

export const join = (channel, uid = null) =>
  new Promise((resolve, reject) =>
    client.join(
      null,
      channel,
      uid,
      (uid) => resolve(uid),
      (err) => reject(err)
    )
  );

export const createLocalStream = (uid) =>
  AgoraRTC.createStream({
    streamID: uid,
    audio: true,
    video: true,
    screen: false,
  });
