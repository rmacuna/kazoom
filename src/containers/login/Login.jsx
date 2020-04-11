import React, { useEffect, useState } from "react";
import {
  Button,
  Flex,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/core";
// import { apiRequest } from "../../helpers/authHelper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../utils/context/AuthContext";
import { firebase } from "./../../services/firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const SignInModal = (props) => {
  return (
    <Modal isCentered size="360px" {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Signin to Kazoom</ModalHeader>
        <ModalCloseButton></ModalCloseButton>
        <ModalBody p="0">
          <StyledFirebaseAuth
            firebaseAuth={firebase.auth()}
            uiConfig={{
              signInFlow: "popup",
              signInOptions: [
                {
                  provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                  defaultCountry: "CO",
                },
              ],
              callbacks: {
                signInSuccessWithAuthResult: () => false,
              },
            }}
          ></StyledFirebaseAuth>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const Signin = () => {
  const auth = React.useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const { isOpen, onClose, onOpen, onToggle } = useDisclosure(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { setSubmitting }) => {
      // authHandler(values).then((data) => {
      //   const { id, email } = data;
      //   auth.setAuthStatus({ id, email });
      //   setSubmitting(false);
      // });
      setSubmitting(false);
    },
    validationSchema: Yup.object({
      phone: Yup.number().required("Required Field"),
      password: Yup.string().required("Please enter your password"),
    }),
  });

  return (
    /* Header goes here */
    <Flex
      height="100vh"
      backgroundColor={"gray.50"}
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        borderRadius={4}
        minWidth="400px"
        borderColor="gray.200"
        backgroundColor="white"
      >
        <Flex align="center" justify="center" borderBottomWidth="1px" p={4}>
          <Button onClick={() => onOpen()}>Signin to Kazoom</Button>

          <SignInModal
            isOpen={isOpen}
            onClose={onClose}
            onOpen={onOpen}
            onToggle={onToggle}
          ></SignInModal>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default Signin;
