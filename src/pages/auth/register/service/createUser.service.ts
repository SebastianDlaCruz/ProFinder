import { FireBaseAuth } from "@utilities/index";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ResponseAuth } from "../model/createUser.model";

export const createUser = async (name: string, email: string, password: string): Promise<ResponseAuth> => {
  try {

    const userCredential = await createUserWithEmailAndPassword(FireBaseAuth, email, password);

    if (!userCredential) throw new Error("Erro al registra el usuario");

    await updateProfile(userCredential.user, { displayName: name, photoURL: '' });

    return {
      status: true,
      message: "registro de usuario exitoso"
    }

  } catch (error) {
    console.error(error);
    return {
      status: false,
      message: 'Error al registrar al usuario. Verifique las credenciales.',
    }

  }

};