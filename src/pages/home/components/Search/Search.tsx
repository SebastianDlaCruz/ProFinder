import { Box } from "@chakra-ui/react";
interface Props {
  open: string;
}
const Search = ({ open }: Props) => {

  return (
    <Box position={"fixed"} backgroundColor={"green.500"} minHeight={"100vh"} w={"100%"} transform={`translateY(${open})`}
      transition={"transform 1s ease"} zIndex={"1"}
    >
      hola
    </Box >
  )
}

export default Search
