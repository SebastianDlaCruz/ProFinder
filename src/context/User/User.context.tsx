import { Dispatch, SetStateAction, createContext, useState } from "react";
import { UserModel } from "./model/user.model";
import { initialUser } from "./util/initialUser/initialUser.util";

export const ContextUser = createContext<{
  user: UserModel
  setUser: Dispatch<SetStateAction<UserModel>>
}>({
  user: initialUser,
  setUser: () => null
})

interface Props {
  children: JSX.Element | JSX.Element[];
}


const UserProvider = ({ children }: Props) => {

  const [user, setUser] = useState<UserModel>(initialUser);

  return (
    <ContextUser.Provider value={{ user, setUser }}>
      {children}
    </ContextUser.Provider>
  )
}

export default UserProvider;
