import { FormErrorMessage } from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';
interface Props {
  textError: string | undefined;
  error: FieldError | undefined
}

const MessageError = ({ error, textError }: Props) => {

  return (
    <>
      {error && <FormErrorMessage>{textError}</FormErrorMessage>}
    </>
  )


}

export default MessageError
