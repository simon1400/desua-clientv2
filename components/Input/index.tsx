import { FC } from "react";
import { InputS } from "./styled";
import { InputAdornment, OutlinedInputProps } from "@mui/material";

const Input: FC<OutlinedInputProps> = ({ startAdornment, placeholder }) => {
  return <InputS placeholder={placeholder} startAdornment={<InputAdornment position="start">{startAdornment}</InputAdornment>} />;
};

export default Input;
