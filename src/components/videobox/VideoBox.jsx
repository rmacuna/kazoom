import React, { useRef } from "react";

const VideoBox = ({ stream, muted }) => {
  const videoRef = useRef();

  videoRef.current.srcOjbect = stream;

  return (
    <div>
      <audio autoPlay></audio>
      <video autoPlay muted={muted} ref={videoRef}></video>
    </div>
  );
};

export default VideoBox;
