import { Box, FormLabel, Input } from "@chakra-ui/react"
import { AuthContainerButton, AuthForm, Carrusel } from "@components/index"
const Login = () => {
  return (
    <Box display={"flex"} alignItems={"center"}>
      <AuthForm title="Inicia sesión" w="600px" >
        <FormLabel>Email:</FormLabel>
        <Input type="email" />
        <FormLabel>Password:</FormLabel>
        <Input type="password" />
        <AuthContainerButton text="¿No tenes una Cuenta en ProFinder?" textButton="Iniciar Sesión"
          textLink="Regístrate" to="/register" />
      </AuthForm>
      <Carrusel />
    </Box>
  )
}

export default Login
