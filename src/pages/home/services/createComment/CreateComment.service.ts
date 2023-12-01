import { ModelComment } from "@pages/home/model/commet.model";
import { FirebaseDB } from "@utilities/index";
import { addDoc, collection } from "firebase/firestore";

export const createComment = async (data: ModelComment) => {
  try {
    await addDoc(collection(FirebaseDB, 'Comentarios'), { ...data });
  } catch (error) {
    console.log('error' + error);
  }
}