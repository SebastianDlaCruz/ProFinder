import { Button, FormControl, Input } from "@chakra-ui/react";
import { UseUserContext } from "@context/index";
import { ModelComment } from "@pages/home/model/commet.model";
import { createComment } from "@pages/home/services/createComment/CreateComment.service";
import { ChangeEvent, FormEvent, useState } from "react";
interface Props {
  id: string;
}

const Comment = ({ id }: Props) => {

  const { user } = UseUserContext();
  const [comment, setComment] = useState('')

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setComment(event.target.value);


  const handleSubmit = (event: FormEvent<HTMLDivElement>) => {
    event.preventDefault();

    const newComment: ModelComment = {
      comment,
      description: user.description,
      idPost: id,
      idUser: user.uid,
      imgUser: user.photoURL || '',
      nameUser: user.displayName
    }

    createComment(newComment);
    setComment('')
  }


  return (
    <FormControl display={"flex"} w={"465px"} as="form" onSubmit={handleSubmit}>
      <Input type="text" placeholder="Comentar" color="white"
        _placeholder={{ color: "white" }} value={comment} onChange={onChange} />
      <Button type="submit">Enviar</Button>
    </FormControl>
  )
}

export default Comment
