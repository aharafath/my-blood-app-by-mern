import { useState } from "react";

const useForm = (initialState) => {
  //Form Input
  const [input, setInput] = useState(initialState);

  //Handle Input Change
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //Handle Form Reset
  const handleInputReset = () => {
    setInput(initialState);
  };

  return { input, handleInputChange, handleInputReset };
};

export default useForm;
