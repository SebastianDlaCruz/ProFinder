import { Box, Skeleton, SkeletonCircle, Text, useDisclosure } from "@chakra-ui/react"
import { ImageProfile } from "@components/index"
import { UserModel } from "@context/index"
import ModalPost from "../ModalPost/ModalPost"
import userIcon from '/assets/icons/user.svg'

interface Props {
  user: UserModel
  isLoading: boolean
}

const PublicationBox = ({ user, isLoading }: Props) => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (

    <>
      <Box display={"grid"} placeItems={"center"} h={"98px"} marginBlockStart={"29px"}>
        <Box bgColor={"green.500"} w={"486px"} h={"200px"} padding={"20px"} borderRadius={"16px"}>
          <Box as="figure" display={"flex"} alignItems={"center"} gap="12px" margin={"12px 0"}>
            {isLoading ? (<>
              <ImageProfile src={user.photoURL || userIcon} alt={user.displayName} boxSize="47px" />
              <Box as="figcaption" color="#fff">
                {user.displayName}
              </Box>
            </>) : (<>
              <SkeletonCircle size='20' />
              <Skeleton height='20px' w={'200px'} />
            </>)}

          </Box>
          <Box w="100%" h="46px" borderRadius={"12px"} border="none"
            bgColor="green.800" _placeholder={{ color: "white" }} _hover={{
              bgColor: "green.700",
            }} onClick={onOpen}>
            <Text color="#ffffffc5" lineHeight={"40px"} paddingLeft={"12px"}>Crear publicación</Text>
          </Box>
        </Box>
      </Box>
      <ModalPost isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default PublicationBox
