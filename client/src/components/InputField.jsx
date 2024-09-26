import React from "react";
import { FormControlLabel, Radio } from "@mui/material";

const InputField = ({ handleChange, value, title, name }) => {
  return (
    <FormControlLabel
      value={value}
      control={<Radio onChange={handleChange} />}
      label={title}
      name={name}
    />
  );
};

export default InputField;
