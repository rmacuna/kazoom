import React, { useState } from "react";
import { Flex, Button, Input, Stack, Text } from "@chakra-ui/core";
import WaitingLottie from "../animations/waiting/WaitingLottie";

function WaitingCode({ joinToRoom }) {
  const [roomName, setRoomName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const _join = () => {
    if (!isLoading && !isInvalid) {
      setIsLoading(true);
      joinToRoom(roomName);
    }
  };

  const _onKeyDown = (ev) => (ev.key === "Enter" ? _join() : {});

  const handleChange = (event) => {
    const txt = event.target.value || "";
    setIsInvalid(!txt || !txt.trim());
    setRoomName(txt.trim());
  };

  return (
    <Flex width="100%" justifyContent="center" flexDirection="column">
      <Stack spacing={4}>
        <WaitingLottie />
        <Text
          textAlign="center"
          color="gray.500"
          fontWeight="600"
          fontSize="xl"
          marginBottom="10px"
        >
          Please, enter the room id:
        </Text>
      </Stack>
      <Flex justifyContent="center">
        <Input
          value={roomName}
          onChange={handleChange}
          onKeyDown={_onKeyDown}
          color="white"
          width={300}
          borderColor="gray.500"
          backgroundColor="gray.700"
          isInvalid={isInvalid}
        />
      </Flex>

      <Flex mt={4} width="100%" justifyContent="center">
        <Stack isInline spacing={3}>
          <Button
            isLoading={isLoading}
            size="md"
            variantColor="purple"
            onClick={_join}
          >
            Let's party 🎉!
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}

export default WaitingCode;
