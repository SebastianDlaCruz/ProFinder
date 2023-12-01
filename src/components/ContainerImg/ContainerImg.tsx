import { SmallCloseIcon } from "@chakra-ui/icons";
import { Box, Button, Image, Spinner } from "@chakra-ui/react";
import { statusImage } from "@hook/UseGetImg/UseGetImg";

interface Props {
  src: string;
  status: string;
  onClick: () => void;
}

const ContainerImage = ({ status, src, onClick }: Props) => {

  if (status === statusImage.NULL) return null;

  if (status === statusImage.PENDING) return (<Spinner size='xl' color="orange.400" />)

  if (status === statusImage.SUCCESS) {
    return (

      <Box minW={"320px"} minH={"170px"} display={"flex"} alignItems={"center"} margin={"12px 0"} position={"relative"}>
        <Button as={SmallCloseIcon} size={"sm"} w={"36px"} h={"36px"} borderRadius={"50%"}
          position={"absolute"} insetInlineEnd={"-1%"} insetBlockStart={"-3%"} onClick={onClick} />
        <Image src={src} alt={src} h={"200px"} w={"100%"} objectFit={"cover"} objectPosition={"center"} />
      </Box>

    )
  }

  return null
}

export default ContainerImage