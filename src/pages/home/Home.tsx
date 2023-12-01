import { Box } from "@chakra-ui/react";
import { NavBar } from "@components/index";
import UseOpenSearch from "@pages/home/hook/UseOpenSearch/UseOpenSearch";
import Post from "./components/Post/Post";
import PublicationBox from "./components/PublicationBox/PublicationBox";
import Search from "./components/Search/Search";
import UseAuth from "./hook/UseAuth/UseAuth";

const Home = () => {
  const { user, isLoading } = UseAuth();
  const { open, handleCloset, handleOpen } = UseOpenSearch();

  return (
    <>
      <NavBar handleOpen={handleOpen} handleCloset={handleCloset} />
      <Search open={open} />
      <Box as="main" minH={"100vh"}>
        <PublicationBox user={user} isLoading={isLoading} />
        <Post />

      </Box>
    </>
  )
}

export default Home
