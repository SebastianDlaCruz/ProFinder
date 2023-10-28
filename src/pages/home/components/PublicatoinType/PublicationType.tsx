import { Box, Text } from "@chakra-ui/react"
enum TypeServices {
  OFREZCO = "Ofrezco",
  BUSCO = "Busco"
}

interface Props {
  type: string
}

const PublicationType = ({ type }: Props) => {

  if (type === TypeServices.BUSCO) {
    return (
      <Box bgColor={"blackAlpha.900"} padding={".3em"} borderRadius={"3px"}>
        <Text color={"blue.500"} fontWeight={"700"}>{type} servicio</Text>
      </Box>)
  }

  if (type === TypeServices.OFREZCO) {
    return (
      <Box bgColor={"blackAlpha.900"} padding={".3em"} borderRadius={"3px"}>
        <Text color="yellow.300" fontWeight={"700"}>{type} servicio</Text>
      </Box>)
  }
}

export default PublicationType
