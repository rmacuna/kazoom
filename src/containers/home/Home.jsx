import React from "react";
import { Flex, Stack, Box, SimpleGrid, Text, Input, Button } from "@chakra-ui/core";
import Camera from "../../components/camera/Camera";
function Home() {
  return (
    <SimpleGrid columns={2} spacing={0}>
      <Flex p={4} height="100vh" width="40%" bg="gray.50">
        <Stack width="100%">
          <Text as="h1" fontWeight="700" fontSize="lg">
            Contactos
          </Text>
          <Input fontSize="sm" width="100%" placeholder="Buscar contactos" />
        </Stack>
      </Flex>
      <Flex height="100vh">
        <Camera />
      </Flex>
    </SimpleGrid>
  );
}

export default Home;
