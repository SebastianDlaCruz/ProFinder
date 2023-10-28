import { FormLabel, Select } from "@chakra-ui/react";
import { ChangeEvent } from "react";

interface Props {
  children: JSX.Element | JSX.Element[]
  label: string;
  register: any;
  onChange?: (data: ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
}

const CustomSelect = ({ children, label, register, onChange, value }: Props) => {
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Select {...register} onChange={onChange} value={value}>
        {children}
      </Select>
    </>
  )
}

export default CustomSelect
