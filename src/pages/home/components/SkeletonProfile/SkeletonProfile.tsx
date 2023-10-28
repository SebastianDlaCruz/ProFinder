import { Box, Skeleton, SkeletonCircle } from '@chakra-ui/react';
import { ImageProfile } from '@components/index';
import { UserModel } from '@context/index';
import userIcon from '/assets/icons/user.svg';

interface Props {
  isLoading: boolean;
  user: UserModel;
}

const SkeletonProfile = ({ isLoading, user }: Props) => {

  if (isLoading) {
    return (
      <>
        <ImageProfile src={user.photoURL || userIcon} alt={user.displayName} boxSize="47px" />
        <Box as="figcaption" color="#fff">
          {user.displayName}
        </Box>
      </>
    )
  } else {
    return (
      <>
        <SkeletonCircle size='20' />
        <Skeleton height='20px' w={'200px'} />
      </>
    )
  }
}

export default SkeletonProfile
