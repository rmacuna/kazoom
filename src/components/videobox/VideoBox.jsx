import React, { useRef } from "react";

const VideoBox = ({ stream, muted }) => {
  const videoRef = useRef();

  videoRef.current.srcOjbect = stream;

  return <video autoPlay muted={muted} ref={videoRef}></video>;
};

export default VideoBox;
