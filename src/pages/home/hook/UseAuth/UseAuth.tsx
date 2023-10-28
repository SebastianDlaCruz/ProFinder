import { UseUserContext } from "@context/index";
import { FireBaseAuth, FirebaseDB } from "@utilities/index";
import { Unsubscribe, onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UseAuth = () => {
  const navigate = useNavigate();
  const { user, setUser } = UseUserContext();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null;

    onAuthStateChanged(FireBaseAuth, (userCredential) => {
      if (userCredential) {
        if (userCredential.email && userCredential.displayName) {
          const { email, displayName, uid, photoURL } = userCredential;
          unsubscribe = onSnapshot(collection(FirebaseDB, 'Profile'), (doc) => {
            doc.forEach(profile => {
              const data = profile.data();
              if (data.id === uid) {
                setUser({
                  ...user,
                  email, displayName,
                  uid, photoURL,
                  description: data.description,
                  keywords: data.description
                })
              }
            })
          });
          setIsLoading(true);
        }
      } else {
        navigate('/login')
      }
    })
    return () => {
      if (unsubscribe) {
        unsubscribe()
      }
    };

  }, [])



  return {
    user,
    isLoading
  }
}

export default UseAuth
