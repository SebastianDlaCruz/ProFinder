import { ContextUser } from "@context/User/User.context";
import { useContext } from "react";
const UseUserContext = () => {
  const { user, setUser } = useContext(ContextUser);
  return { user, setUser }
}

export default UseUserContext
