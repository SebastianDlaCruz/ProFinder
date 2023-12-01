import { Box } from "@chakra-ui/react";
import { NavBar } from "@components/index";
import Search from "@pages/home/components/Search/Search";
import UseOpenSearch from "@pages/home/hook/UseOpenSearch/UseOpenSearch";

const Profile = () => {
  const { open, handleCloset, handleOpen } = UseOpenSearch();

  return (
    <>
      <NavBar handleOpen={handleOpen} handleCloset={handleCloset} />
      <Search open={open} />
      <Box>

      </Box>
    </>
  )
}

export default Profile
