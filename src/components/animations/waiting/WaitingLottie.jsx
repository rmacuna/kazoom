import React from "react";
import animationData from "../../../lotties/waiting.json";
import Lottie from "react-lottie";
import { Stack, Text } from "@chakra-ui/core";

function WaitingLottie(props) {
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
      <Text textAlign="center" color="gray.500" fontWeight="600" fontSize="xl">
        Ingresa el codigo de la sala
      </Text>
    </Stack>
  );
}

export default WaitingLottie;
