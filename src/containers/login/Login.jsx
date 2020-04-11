import React, { useState } from "react";
import {
  Button,
  Flex,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/core";
import Card from "../../components/card/Card";
import { apiRequest } from "../../utils/helpers.js";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../context/AuthContext";

const Signin = () => {
  const auth = React.useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  // const { colorMode, toggleColorMode } = useColorMode();
  const authHandler = async (values) => {
    try {
      setLoading(true);
      const userData = await apiRequest(
        "https://jsonplaceholder.typicode.com/users",
        "post",
        { email: values.email, password: values.password }
      );
      return userData;
    } catch (err) {
      setLoading(false);
      showError(err.message);
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { setSubmitting }) => {
      authHandler(values).then((data) => {
        const { id, email } = data;
        auth.setAuthStatus({ id, email });
        setSubmitting(false);
      });
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Required Field"),
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

      <Card
        borderRadius={4}
        minWidth="400px"
        borderColor="gray.200"
        backgroundColor="white"
      >
        <Flex borderBottomWidth="1px" p={4}>
          <Text as="h1" fontWeight="600" fontSize="lg">
            Please sign in
          </Text>
        </Flex>
        <form autoComplete={false} onSubmit={formik.handleSubmit}>
          <Stack p={4} spacing={2}>
            <FormControl>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                type="email"
                autoComplete="false"
                id="email"
                placeholder="Escribe tu nombre "
                {...formik.getFieldProps("email")}
              />
            </FormControl>
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                autoComplete="new-password"
                type="password"
                id="password"
                placeholder="Escribe tu contraeña"
                {...formik.getFieldProps("password")}
              />
            </FormControl>
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
            <Button
              isLoading={formik.isSubmitting}
              loadingText="Submitting"
              type="submit"
              mt={4}
              variantColor="whatsapp"
            >
              Sign in
            </Button>
          </Stack>
        </form>
      </Card>
    </Flex>
  );
};

export default Signin;
