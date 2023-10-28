import { Box } from "@chakra-ui/react";
import { NavBar } from "@components/index";
import Post from "./components/Post/Post";
import PublicationBox from "./components/PublicationBox/PublicationBox";
import UseAuth from "./hook/UseAuth/UseAuth";

const Home = () => {
  const { user, isLoading } = UseAuth();
  return (
    <>
      <NavBar />
      <Box as="main" minH={"100vh"}>
        <PublicationBox user={user} isLoading={isLoading} />
        <Post />

      </Box>
    </>
  )
}

export default Home
