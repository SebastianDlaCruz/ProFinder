import { Box, Spinner, Text } from "@chakra-ui/react"


const Loading = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}
      alignItems={"center"} justifyContent={"center"} minH={"100vh"}>
      <Spinner
        w="100px"
        h="100px"
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='green.400'
        size='xl'
      />
      <Text fontSize={"3em"} color="green.400" fontWeight={"bold"}>Cargando...</Text>
    </Box>
  )
}

export default Loading
