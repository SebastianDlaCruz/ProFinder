import { ResponseAuth } from "@pages/auth/register/model/createUser.model";
import { FireBaseAuth } from "@utilities/index";
import { signInWithEmailAndPassword } from "firebase/auth";

export const singUser = async (email: string, password: string): Promise<ResponseAuth> => {
  try {
    const userCredential = await signInWithEmailAndPassword(FireBaseAuth, email, password);
    if (!userCredential) throw new Error("Error al iniciar session");

    return {
      status: true,
      message: 'éxito'
    }

  } catch (error) {
    console.error(error);
    return {
      status: false,
      message: 'no se puedo iniciar session. Asegúrese que estar registrado o ingrese bien las credenciales'
    }
  }

}
