import { useState } from "react";

const UseOpenSearch = () => {

  const [open, setOpen] = useState('-100%');

  const handleOpen = () => setOpen('0%')
  const handleCloset = () => setOpen('-100%')

  return {
    open,
    handleOpen,
    handleCloset
  }
}

export default UseOpenSearch;
