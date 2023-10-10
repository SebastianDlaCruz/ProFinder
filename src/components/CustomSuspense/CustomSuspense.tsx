
import { Suspense } from "react";
import { Loading } from "..";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const CustomSuspense = ({ children }: Props) => {
  return (
    <Suspense fallback={<Loading />}>
      {children}
    </Suspense>
  )
}

export default CustomSuspense
