import React from "react";
import animationData from "../../../lotties/waiting.json";
import Lottie from "react-lottie";
import { Stack } from "@chakra-ui/core";

const WaitingLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Stack spacing={4}>
      <Lottie
        isClickToPauseDisabled={true}
        options={defaultOptions}
        height={500}
        width={500}
      />
    </Stack>
  );
};

export default WaitingLottie;
