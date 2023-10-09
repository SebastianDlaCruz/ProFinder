import { Box, Button, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface Props {
  textButton: string;
  to: string;
  textLink: string;
  text: string
}

const AuthContainerButton = ({ textButton, text, to, textLink }: Props) => {
  return (
    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap="12px" marginBlockStart={"42px"}>
      <Button>{textButton}</Button>
      <Text>{text}<Link as={RouterLink} to={to} color="blue">{textLink}</Link></Text>
    </Box>
  )
}

export default AuthContainerButton
