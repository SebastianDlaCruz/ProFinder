import { SettingsIcon } from '@chakra-ui/icons'
import { Box, FormControl, Input, Menu, MenuItem, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
const NavBar = () => {

  return (
    <Box as="nav" display={'flex'} justifyContent={"space-around"}
      alignItems={"center"} h={"80px"} bgColor={"green.500"}>
      <Box display={"flex"} gap={"12px"} alignItems={"center"}>
        <SettingsIcon color={"#fff"} boxSize={6} />
        <Text as="h1" color={"#fff"} fontSize={"1.2em"}>ProFinder</Text>
      </Box>
      <FormControl w={"500px"}>
        <Input type='search' placeholder='Buscar servicio' color={"#fff"} _placeholder={{ color: "#fff" }} />
      </FormControl>
      <Box as="menu" display={"flex"} alignItems={"center"} gap={"19px"} color={"white"}>
        <Menu>
          <Box as="li" listStyleType={"none"}><MenuItem as={NavLink} to={'/'}>Inicio</MenuItem></Box>
          <Box as="li" listStyleType={"none"}><MenuItem as={NavLink} to={'/login'}>Perfil</MenuItem></Box>
          <Box as="li" listStyleType={"none"}>Cerrar Session</Box>
        </Menu>
      </Box>

    </Box>
  )
}

export default NavBar
