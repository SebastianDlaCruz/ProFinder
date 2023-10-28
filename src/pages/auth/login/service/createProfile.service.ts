import { FirebaseDB } from "@utilities/index"
import { addDoc, collection } from "firebase/firestore"


export const createProfile = async (id: string) => {
  try {
    await addDoc(collection(FirebaseDB, 'Profile'), {
      id,
      description: '',
      keywords: ''
    })
  } catch (error) {
    console.error(error)
  }

}