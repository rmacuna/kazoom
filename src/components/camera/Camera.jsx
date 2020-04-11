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
  width: 800,
  height: 600,
  facingMode: "user",
};

const Camera = (props) => {
  const webcamRef = React.useRef(null);

  return (
    <Webcam
      audio={false}
      height={720}
      ref={webcamRef}
      screenshotFormat="image/jpeg"
      width={1280}
      videoConstraints={videoConstraints}
    />
  );
};

export default Camera;
