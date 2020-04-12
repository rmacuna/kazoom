import React from "react";
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  ModalOverlay,
  Scale,
  Button,
  SimpleGrid,
  Flex,
  Divider,
  Avatar,
  Stack,
  Icon,
  Image,
  Text,
  Input,
} from "@chakra-ui/core";

import SongList from "./song-list/SongList";

const SongModal = (props) => {
  const { isOpen, onOpen, onClose } = props;

  return (
    <Scale in={isOpen}>
      {(styles) => (
        <Modal onClose={onClose} isOpen={true} size="full" isCentered>
          <ModalOverlay opacity={styles.opacity} />
          <ModalContent borderRadius={20} width="900px" {...styles}>
            <ModalCloseButton color="white" />
            <ModalBody p={0} minHeight="707px">
              <SimpleGrid columns={2} spacing={0} minHeight="707px">
                <Flex p={5} flexDirection="column">
                  <Text as="h1" fontWeight="bold" fontSize={20} pb={4}>
                    Choose your song and wait
                  </Text>
                  <Input placeholder="Type the song you want" />
                  <Divider />
                  {/* Code for the modal list */}
                  <SongList
                    songs={[{ name: "Scared to be loneley", id: "1" }]}
                  />
                </Flex>
                <Flex
                  borderTopRightRadius={20}
                  borderBottomRightRadius={20}
                  p={20}
                  height="100%"
                  justifyContent="center"
                  alignItems="center"
                  backgroundColor="#212937"
                >
                  <Image width={250} height={250} src="assets/spotify.png" />
                </Flex>
              </SimpleGrid>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Scale>
  );
};

export default SongModal;
