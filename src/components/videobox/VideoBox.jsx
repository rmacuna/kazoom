import React, { useRef } from "react";

const VideoBox = ({ audioTrack, videoTrack }) => {
  const videoRef = useRef();
  const audioRef = useRef();

  if (audioTrack) audioTrack.attach(audioRef);
  if (videoTrack) videoTrack.attach(videoTrack);

  return (
    <div>
      <audio ref={audioRef}></audio>
      <video ref={videoRef}></video>
    </div>
  );
};

export default VideoBox;
