import { Box, Text } from "@chakra-ui/react";
import { ImageProfile } from "@components/index";
import { UseGetData } from "@hook/index";
import { ModelPublic } from "@pages/home/model/post.model";
import Comment from "../Comment/Comment";
import ContainerComments from "../ContainerComments/ContainerComments";
import PublicationType from "../PublicatoinType/PublicationType";

const Post = () => {

  const { documentInfo, isLoading, isSuccess } = UseGetData<ModelPublic>({ nameDoc: 'Publicaciones' });

  return (
    <Box as="section" display={"flex"} flexDirection={"column"}
      alignItems={"center"} justifyContent={"center"} gap={"27px"} minH={"100vh"} marginBlockStart={"12%"}>
      {
        documentInfo.map(item => (
          <Box as="article" w={"500px"} minH={"100%"} backgroundColor={"green.600"} borderRadius={"12px"}>
            <Box as="header" display={"flex"} alignItems={"center"} justifyContent={"space-between"} padding={"12px 20px"}>
              <Box display={"flex"} gap={"12px"}>
                <ImageProfile src={item.nameUser} alt={item.nameUser} boxSize="60px" />
                <Box>
                  <Text as="h2" color="whiteAlpha.900" fontSize={"1.5em"}>Sebastian</Text>
                  <Text color="whiteAlpha.900">Experto </Text>
                </Box>
              </Box>
              <PublicationType type={item.publicationType} />
              <button>opciones</button>
            </Box>

            <Box minH="110px" padding={"0 22px"}>
              <Text color="whiteAlpha.900">{item.post}</Text>
              <Text fontWeight={"bold"} p="9px 0" color="whiteAlpha.700">{item.services.toUpperCase()}</Text>
            </Box>
            <ContainerComments id={item.id} />
            <Box as="footer" display={"flex"} justifyContent={"center"} padding={"21px 0"}>
              <Comment id={item.id} />
            </Box>
          </Box>
        ))
      }

    </Box>

  )
}

export default Post
