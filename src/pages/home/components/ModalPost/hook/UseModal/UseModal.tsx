import { zodResolver } from "@hookform/resolvers/zod";
import { createPost } from "@pages/home/services/createPost/createPost.service";
import { schemaPost, schemaPostType } from "@pages/home/util/index.util";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";

const UseModal = () => {

  const [typeService, setTypeService] = useState('');


  const onChangeServices = (data: ChangeEvent<HTMLSelectElement>) => setTypeService(data.target.value);


  const { register, handleSubmit, formState: { errors }, reset } = useForm<schemaPostType>({
    resolver: zodResolver(schemaPost)
  });

  const onSubmit = (data: schemaPostType) => {
    const value = Object.values(data);
    console.log(value);
    if (value.some(value => value !== '')) {
      createPost(data);
      reset();
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    onChangeServices,
    typeService
  }
}

export default UseModal
