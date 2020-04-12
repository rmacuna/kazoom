import * as React from "react";
import useOffsets from "../../utils/hooks/useOffsets";
import Webcam from "react-webcam";
// import useUserMedia from '../../utils/hooks/useUserMedia'
// import userCardRatio from '../../utils/hooks/userCardRatio'

// const CAPTURE_OPTIONS = {
//   audio: false,
//   video: { facingMode: "environment" }
// };

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const Camera = (props) => {
  const webcamRef = React.useRef(null);

  return (
    <Webcam
      style={{borderRadius: 10}}
      audio={false}
      height="100%"
      ref={webcamRef}
      screenshotFormat="image/jpeg"
      width="100%"
      videoConstraints={videoConstraints}
      {...props}
    />
  );
};

export default Camera;
