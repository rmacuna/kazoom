import * as React from "react";
import {
  Flex,
  Stack,
  Box,
  SimpleGrid,
  Text,
  Input,
  Button,
  Image,
  IconButton,
} from "@chakra-ui/core";

import Camera from "../../components/camera/Camera";
import { firebase } from "../../services/firebase";

const signOut = async () => {
  await firebase.auth().signOut();
};

function Home() {
  const [countUsers, setCountUsers] = React.useState(1);
  return (
    <Flex width="100%" backgroundColor="#1a1f2c">
      <Flex p={4} height="100vh" flex={0.3} bg="gray.700">
        <Stack width="100%">
          <Text as="h1" fontWeight="700" fontSize="27px" color="#fff">
            Games
          </Text>
          {/* <Input
            color="white"
            backgroundColor="gray.600"
            borderColor="gray.500"
            fontSize="sm"
            width="100%"
            placeholder="Buscar contactos"
          /> */}

          <Flex
            mt={5}
            justifyContent="space-between"
            borderRadius={6}
            backgroundColor="gray.600"
            borderColor="gray.800"
            padding={5}
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
      <Flex height="100%" p={5} flex={1} flexDirection="column">
        <SimpleGrid columns={countUsers} spacing={2}>
          <Camera />
        </SimpleGrid>

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
