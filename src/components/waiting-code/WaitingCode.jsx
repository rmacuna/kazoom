import React from "react";
import { Flex, Box, Input, Stack, Text } from "@chakra-ui/core";
import WaitingLottie from "../animations/waiting/WaitingLottie";

function WaitingCode(props) {
  const { code, setCode } = props;

  const handleChange = (event) => {
    setCode(event.target.value);
  };
  return (
    <Flex width="100%" justifyContent="center" flexDirection="column">
      <Stack spacing={4}>
        <WaitingLottie />
      </Stack>
      <Flex justifyContent="center">
        <Input
          value={code}
          onChange={handleChange}
          color="white"
          width={300}
          borderColor="gray.500"
          backgroundColor="gray.700"
        />
      </Flex>
    </Flex>
  );
}

export default WaitingCode;
