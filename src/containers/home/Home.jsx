import React from "react";
import {
  Flex,
  Stack,
  Box,
  SimpleGrid,
  Text,
  Input,
  Button,
  IconButton,
} from "@chakra-ui/core";

import Camera from "../../components/camera/Camera";
import { firebase } from "../../services/firebase";

const signOut = async () => {
  await firebase.auth().signOut();
};

function Home() {
  return (
    <Flex width="100%" backgroundColor="#1a1f2c">
      <Flex p={4} height="100vh" flex={0.3} bg="gray.700">
        <Stack width="100%">
          <Text as="h1" fontWeight="600" fontSize="27px" color="#fff">
            Songs
          </Text>
          <Input color="white" backgroundColor="gray.600" borderColor="gray.500" fontSize="sm" width="100%" placeholder="Buscar contactos" />
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
      <Flex height="100%" p={5} flex={1} flexDirection="column">
        <Camera />
        <Flex mt={4} width="100%" justifyContent="center">
          <Stack isInline spacing={3}>
            {/* <IconButton
              size="lg"
              icon="add"
              borderRadius="100%"
              variantColor="purple"
            ></IconButton> */}
            <Button size="md" variantColor="purple">
              Unirse a la llamada
            </Button>
            {/* <IconButton
              size="lg"
              icon="add"
              borderRadius="100%"
              variantColor="purple"
            ></IconButton> */}
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Home;
