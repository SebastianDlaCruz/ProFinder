import { zodResolver } from "@hookform/resolvers/zod";
import { schemaRegister } from "@pages/auth/register/util/schemaRegister/schemaRegister";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { singUser } from "../../service/singUser.service";
import { schemaUserType } from "../../util/schemaUser/schemaUser";

const UseLogin = () => {

  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [errorForm, setErrorForm] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<schemaUserType>({
    resolver: zodResolver(schemaRegister)
  });
  const onSubmit = (data: schemaUserType) => {
    const { email, password } = data;

    if (email !== undefined && password !== undefined) {
      singUser(email, password)
        .then((res) => {
          if (res.status) {
            navigate('/', { replace: true });
          } else {
            setMessage(res.message);
          }
        })
        .catch(() => {
          setErrorForm(true);
        });
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    message,
    errorForm,
    onSubmit
  }
}

export default UseLogin
