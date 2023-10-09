import { FormControl, Heading } from "@chakra-ui/react";

interface Props {
  children: JSX.Element | JSX.Element[];
  title: string;
  w: string;
}

const AuthForm = ({ children, title, w }: Props) => {
  return (
    <FormControl as="form"
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      w={w} h={"100vh"}
      flex="1"
      gap="12px"
      padding={"12px 66px"}
      backgroundColor={"green.500"} color="#fff">
      <Heading as="h1" color="#fff" textAlign={"center"} marginBlockEnd={"23px"}>{title}</Heading>
      {children}
    </FormControl>

  )
}

export default AuthForm
