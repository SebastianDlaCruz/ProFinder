import {
  Button,
  FormControl, FormLabel,
  Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalFooter, ModalHeader, ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Textarea
} from "@chakra-ui/react";
import ContainerImage from "@components/ContainerImg/ContainerImg";
import InputFileImg from "@components/InputFile/InputFile";
import { MessageError } from "@components/index";
import useGetImg from "@hook/UseGetImg/UseGetImg";
import { services, typeOfService } from "@pages/home/util/index.util";
import { useRef } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import UseModal from "./hook/UseModal/UseModal";

interface Props {
  isOpen: boolean;
  onClose: () => void
}

const ModalPost = ({ isOpen, onClose }: Props) => {

  const { errors, handleSubmit, onSubmit, register, onChangeServices, typeService } = UseModal();
  const { handleImageUpdate, handleResetImg, imgRef, imgSrc, stateImg, setImgSrc, setStateImg } = useGetImg();

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Crea publicación</ModalHeader>

          <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
            <ModalBody pb={6}>

              <FormControl isInvalid={errors.post ? true : false}>
                <FormLabel>Publicación</FormLabel>
                <Textarea resize={"none"} minH={"150px"} {...register("post")} ></Textarea>
                <MessageError error={errors.post} textError={errors.post?.message} />
              </FormControl>
              <ContainerImage onClick={handleResetImg} src={imgSrc} status={stateImg} />
              <FormControl isInvalid={errors.typeService ? true : false}>
                <CustomSelect label="Tipo de servicio" register={register("typeService")} onChange={onChangeServices}>
                  {
                    typeOfService.map((item, index) => <option key={index} value={item}>{item}</option>)
                  }
                </CustomSelect>
                <MessageError error={errors.post} textError={errors.typeService?.message} />
              </FormControl>

              <FormControl isInvalid={errors.services ? true : false}>
                <CustomSelect label="Servicios" register={register("services")} >
                  {services.map((item, index) => {
                    if (typeService !== '' && typeService === item.type) {
                      return (<option key={index} value={item.service}>{item.service}</option>)
                    } else {
                      return (<p>no tienes servicios</p>)
                    }
                  })}
                </CustomSelect>
                <MessageError error={errors.post} textError={errors.services?.message} />
              </FormControl>

              <FormControl isInvalid={errors.publicationType ? true : false}>
                <RadioGroup >
                  <Stack direction='row'>
                    <Radio value='Ofrezco'{...register('publicationType')}>Ofrezco servicio</Radio>
                    <Radio value='Busco'{...register('publicationType')}>Busco servicio</Radio>
                  </Stack>
                </RadioGroup>
                <MessageError error={errors.post} textError={errors.typeService?.message} />
              </FormControl>


            </ModalBody>
            <ModalFooter>
              <InputFileImg onClick={handleImageUpdate} refImg={imgRef} />
              <Button type="submit" colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>

          </FormControl>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalPost
