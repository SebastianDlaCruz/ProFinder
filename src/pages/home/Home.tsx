import { NavBar } from "@components/index";
import UseAuth from "./hook/UseAuth/UseAuth";
const Home = () => {

  const { user } = UseAuth();
  return (
    <div>
      <NavBar />
      Aca renderiza las demas publicaciones de los servicios
      <p>{user.displayName}{user.email}</p>
    </div>
  )
}

export default Home
