
import { Box, Text } from "@chakra-ui/react";
import { ImageProfile } from "@components/index";
import useGetData from "@hook/UseGetData/UseGetData";
import { ModelCommentInfo } from "@pages/home/model/commet.model";

interface Props {
  id: string;
}

const ContainerComments = ({ id }: Props) => {

  const { documentInfo, isSuccess } = useGetData<ModelCommentInfo>({ nameDoc: "Comentarios" });
  if (isSuccess) {
    return (
      <Box padding={"12px 20px"} >
        <Text as="h3" color="white">Comentarios</Text>
        <Box display={"flex"} flexDirection={"column"} p="12px 0" gap="12px" overflowY={"scroll"} maxH={"200px"}>
          {
            documentInfo.map(item => {
              if (item.idPost === id) {
                return (<Box backgroundColor={"green.700"} p="12px" borderRadius={"10px"}>
                  <Box display={"flex"} alignItems={"center"} gap="12px" padding={"12px 0"}>
                    <ImageProfile src={item.imgUser} alt={item.nameUser} boxSize="41px" />
                    <Box>
                      <Text as="strong" color="white">{item.nameUser}</Text>
                      <Text color="white">{item.description}</Text>
                    </Box>
                  </Box>
                  <Text color="white">{item.comment}</Text>
                </Box>)
              }
            })
          }
        </Box>
      </Box>
    )
  } else {
    return (null)
  }
}

export default ContainerComments
