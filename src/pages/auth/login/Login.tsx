import { Box, FormLabel, Input, Text } from "@chakra-ui/react";
import { AuthContainerButton, AuthForm, Carrusel } from "@components/index";
import UseLogin from "./hook/UseLogin/UseLogin";

const Login = () => {
  const { errorForm, errors, handleSubmit, message, onSubmit, register } = UseLogin();

  return (
    <Box display={"flex"} alignItems={"center"}>
      <AuthForm title="Inicia sesión" w="600px"
        onSubmit={handleSubmit(onSubmit)} isInvalid={errorForm} messageError={message}>
        <FormLabel>Email:</FormLabel>
        <Input type="email" {...register("email")} />
        {errors.email && <Text color={"red.400"}>{errors.email.message}</Text>}
        <FormLabel>Password:</FormLabel>
        <Input type="password"  {...register("password")} />
        {errors.password && <Text color={"red.400"}>{errors.password.message}</Text>}
        <AuthContainerButton text="¿No tenes una Cuenta en ProFinder?" textButton="Iniciar Sesión"
          textLink="Regístrate" to="/register" />
      </AuthForm>
      <Carrusel />
    </Box>
  )
}

export default Login
