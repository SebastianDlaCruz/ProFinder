import { Box, FormLabel, Input, Text } from "@chakra-ui/react";
import { AuthContainerButton, AuthForm, Carrusel } from "@components/index";
import UseRegister from "./hook/UseRegister/UseRegister";

const Register = () => {
  const { errorForm, errors, handleSubmit, message, onSubmit, register } = UseRegister();

  return (
    <Box display={"flex"} alignItems={"center"}>
      <Carrusel />
      <AuthForm title="Regístrate" w="600px"
        onSubmit={handleSubmit(onSubmit)} isInvalid={errorForm}
        messageError={message}>
        <FormLabel>Nombre:</FormLabel>
        <Input type="text" {...register("name")} />
        {errors.name && <Text>{errors.name.message}</Text>}
        <FormLabel>Email:</FormLabel>
        <Input type="email"  {...register("email")} />
        {errors.email && <Text>{errors.email.message}</Text>}
        <FormLabel>Password:</FormLabel>
        <Input type="password" {...register("password")} />
        {errors.password && <Text>{errors.password.message}</Text>}
        <AuthContainerButton text="¿Ya tenes una Cuenta en ProFinder?" textButton="Registrate"
          textLink="Inicia sesión" to="/login" />
      </AuthForm>
    </Box>
  )
}

export default Register
