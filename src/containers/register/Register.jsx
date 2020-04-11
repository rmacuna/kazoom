import React, { useState } from "react";
import {
  Button,
  Flex,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Icon
} from "@chakra-ui/core";
// import { apiRequest } from "../../helpers/authHelper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../utils/context/AuthContext";

const Register = () => {
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
      username: "",
      fullname: "",
      email:"",
      password:""
    },
    onSubmit: (values, { setSubmitting }) => {
      // authHandler(values).then((data) => {
      //   const { id, email } = data;
      //   auth.setAuthStatus({ id, email });
      //   setSubmitting(false);
      // });
        setSubmitting(false);
        //console.log("digito:"+values+"and"+ setSubmitting)
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Required Field"),
      password: Yup.string().required("Please enter your password"),
      username: Yup.string().required("Please enter your username"),
      fullname: Yup.string().required("Please enter your fullname")
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
        <Flex borderBottomWidth="1px" p={4} direction="column">
          <Text as="h1" fontWeight="600" fontSize="lg">
            Welcome to Kazoom ! 
          </Text>
          <Text as="h2" fontWeight="300" fontSize="lg">
            a fun way to talk
          </Text>
        </Flex>
        <form autoComplete={false} onSubmit={formik.handleSubmit}>
          <Stack p={4} spacing={2}>
            <FormControl>
              <FormLabel htmlFor="email">Username</FormLabel>
              <Input
                type="username"
                autoComplete="false"
                id="username"
                placeholder="Escribe tu username"
                {...formik.getFieldProps("username")}
              />
            </FormControl>
            {formik.touched.username && formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}
            <FormControl>
              <FormLabel htmlFor="email">Fullname</FormLabel>
              <Input
                type="fullname"
                autoComplete="false"
                id="fullname"
                placeholder="Escribe tu Fullname"
                {...formik.getFieldProps("fullname")}
              />
            </FormControl>
            {formik.touched.fullname && formik.errors.fullname ? (
              <div>{formik.errors.fullname}</div>
            ) : null}
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                type="email"
                autoComplete="false"
                id="email"
                placeholder="Escribe tu Email"
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
                placeholder="Escribe tu contraseña"
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
              Sign up
            </Button>
          </Stack>
        </form>
      </Stack>
    </Flex>
  );
};

export default Register;
