import { Box, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { profesiones } from "./util/index.util";

const Carrusel = () => {

  const [counter, setCounter] = useState(0);

  useEffect(() => {

    const id = setInterval(() => {
      setCounter(prevCounter => {
        if (prevCounter === 2) {
          return 0;
        } else {
          return prevCounter + 1;
        }
      })
    }, 9000)

    return () => {
      clearInterval(id)
    }

  }, [])


  return (
    <Box position={"relative"} h={"100vh"} w={"400px"} flex={2}>
      {profesiones.map((item, index) => <Image key={index} src={item} alt="profesiones"
        position={"absolute"} objectFit={"cover"} w="100%" h="100%"
        opacity={counter === index ? "1" : "0"} transition={"opacity 1s ease-in"} />)}
      <Text as="h2" position={"absolute"}
        bottom={"3%"} left={"12%"} color="#fff"
        fontSize={"3em"} fontWeight={"semibold"} zIndex={"2"}>ProFinder</Text>
    </Box>
  )
}

export default Carrusel
