import { UseUserContext } from "@context/index";
import { FireBaseAuth } from "@utilities/index";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UseAuth = () => {
  const navigate = useNavigate();
  const { user, setUser } = UseUserContext();
  useEffect(() => {

    onAuthStateChanged(FireBaseAuth, (userCredential) => {
      if (userCredential) {
        if (userCredential.email && userCredential.displayName) {
          const { email, displayName, uid, photoURL } = userCredential;
          setUser(
            {
              ...user,
              email, displayName, uid, photoURL
            })
        }
      } else {
        navigate('/login')
      }
    })
  }, [])

  return {
    user
  }
}

export default UseAuth
