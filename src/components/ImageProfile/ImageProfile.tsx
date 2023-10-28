import { Image } from "@chakra-ui/react";
import imgUser from '/assets/icons/user.svg';

interface Props {
  src: string;
  alt: string;
  boxSize: string
}

const ImageProfile = ({ alt, src, boxSize }: Props) => {
  return (
    <Image src={src || imgUser} alt={alt}
      boxSize={boxSize} objectFit={"cover"} borderRadius={"full"} border={"1px solid white"} />
  )
}

export default ImageProfile
