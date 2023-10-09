import { Box, FormLabel, Input, Select } from "@chakra-ui/react"
import { AuthContainerButton, AuthForm, Carrusel } from "@components/index"

const Register = () => {
  return (
    <Box display={"flex"} alignItems={"center"}>
      <Carrusel />
      <AuthForm title="Regístrate" w="600px">
        <FormLabel>Nombre:</FormLabel>
        <Input type="text" />
        <FormLabel>Email:</FormLabel>
        <Input type="email" />
        <FormLabel>Password:</FormLabel>
        <Input type="password" />
        <FormLabel>Tipo de registro:</FormLabel>
        <Select>
          <option>usuario</option>
          <option>trabajador</option>
        </Select>
        <AuthContainerButton text="¿Ya tenes una Cuenta en ProFinder?" textButton="Registrate"
          textLink="Inicia sesión" to="/login" />
      </AuthForm>
    </Box>
  )
}

export default Register
