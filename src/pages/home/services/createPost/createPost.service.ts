import { schemaPostType } from "@pages/home/util/index.util"
import { FirebaseDB } from "@utilities/index"
import { addDoc, collection } from "firebase/firestore"

export const createPost = async (data: schemaPostType) => {
  try {
    await addDoc(collection(FirebaseDB, 'Publicaciones'), { ...data })
  } catch (error) {
    console.error(error)
  }
}