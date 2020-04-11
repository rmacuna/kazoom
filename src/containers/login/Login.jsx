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
// import { apiRequest } from "../../helpers/authHelper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../utils/context/AuthContext";

const Signin = () => {
  const auth = React.useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  // const { colorMode, toggleColorMode } = useColorMode();
  // const authHandler = async (values) => {
  //   try {
  //     setLoading(true);
  //     const userData = await apiRequest(
  //       "https://jsonplaceholder.typicode.com/users",
  //       "post",
  //       { email: values.email, password: values.password }
  //     );
  //     return userData;
  //   } catch (err) {
  //     setLoading(false);
  //   }
  // };
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
        <Flex borderBottomWidth="1px" p={4}>
          <Text as="h1" fontWeight="600" fontSize="lg">
            Signin to kazoom
          </Text>
        </Flex>
        <form autoComplete={false} onSubmit={formik.handleSubmit}>
          <Stack p={4} spacing={2}>
            <FormControl>
              <FormLabel htmlFor="number">Phone number</FormLabel>
              <Input
                type="number"
                autoComplete="false"
                id="number"
                placeholder="Please type your phone number"
                {...formik.getFieldProps("phone")}
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
      </Stack>
    </Flex>
  );
};

export default Signin;
