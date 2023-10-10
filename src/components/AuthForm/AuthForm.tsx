/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, Heading, Text } from "@chakra-ui/react";

interface Props {
  children: JSX.Element | JSX.Element[] | any;
  title: string;
  w: string;
  onSubmit: () => void;
  isInvalid: boolean;
  messageError: string;
}

const AuthForm = ({ children, title, w, onSubmit, isInvalid, messageError }: Props) => {
  return (
    <>
      <FormControl as="form"
        onSubmit={onSubmit}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        w={w} h={"100vh"}
        flex="1"
        gap="12px"
        padding={"12px 66px"}
        backgroundColor={"green.500"} color="#fff"
        isInvalid={isInvalid}>
        <Heading as="h1" color="#fff" textAlign={"center"} marginBlockEnd={"23px"}>{title}</Heading>
        {children}
      </FormControl>
      {messageError && <Text textAlign={"center"} fontWeight={"bold"} color="red.400">{messageError}</Text>}
    </>

  )
}

export default AuthForm
