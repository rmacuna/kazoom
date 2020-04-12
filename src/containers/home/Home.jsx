import React, { useContext, useState } from "react";
import {
  Flex,
  Stack,
  SimpleGrid,
  Text,
  Button,
  Image,
  useDisclosure,
} from "@chakra-ui/core";
import { AuthContext } from "../../utils/context/AuthContext";
import { firebase } from "../../services/firebase";
import { Redirect } from "react-router-dom";
import { connectToRoom } from "../../services/twilio";
import Room from "../../components/room/Room";
import WaitingCode from "../../components/waiting-code/WaitingCode";
import SongModal from "../../components/song-modal/SongModal";

const signOut = async () => {
  await firebase.auth().signOut();
};

const Home = () => {
  const { auth } = useContext(AuthContext);
  const [countUsers, setCountUsers] = useState(1);
  const [codeSubmitted, setCodeSubmitted] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [room, setRoom] = useState(null);

  const joinToRoom = async (roomName) => {
    const roomResponse = await connectToRoom(roomName);
    setRoom(roomResponse);
  };

  if (auth.user === null) return <Redirect to="/" />;

  return (
    <Flex width="100%" backgroundColor="#1a1f2c">
      <Flex p={4} height="100vh" flex={0.3} bg="gray.700">
        <Stack width="100%">
          <Text as="h1" fontWeight="700" fontSize="27px" color="#fff">
            Games
          </Text>

          <Flex
            mt={5}
            justifyContent="space-between"
            borderRadius={6}
            backgroundColor="gray.600"
            borderColor="gray.800"
            padding={5}
            onClick={onOpen}
            cursor="pointer"
            alignItems="center"
          >
            <Text color="white" fontWeight="600" fontSize="sm">
              Which song is that?
            </Text>
            <Image
              borderRadius={100}
              width={10}
              height={10}
              src="https://user-images.githubusercontent.com/33750251/59486049-ec63fa80-8e6f-11e9-8d17-9a31324a63e8.png"
            />
          </Flex>
        </Stack>

        <Button
          variantColor="red"
          variant="solid"
          position="absolute"
          bottom="10px"
          onClick={() => signOut()}
        >
          Cerrar sesión
        </Button>
      </Flex>
      <SongModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Flex height="100%" p={5} flex={1} flexDirection="column">
        {room ? (
          <Room countUsers={countUsers} room={room}></Room>
        ) : (
          <WaitingCode joinToRoom={joinToRoom} />
        )}
      </Flex>
    </Flex>
  );
};

export default Home;
