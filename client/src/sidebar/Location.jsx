import React from "react";
import { RadioGroup, FormControl, Typography } from "@mui/material";
import InputField from "../components/InputField";

const Location = ({ handleChange }) => {
  return (
    <FormControl component="fieldset">
      <Typography variant="h6" gutterBottom>
        Location
      </Typography>
      <RadioGroup aria-label="location" name="test" onChange={handleChange}>
        <InputField handleChange={handleChange} value="" title="All" name="test" />
        <InputField handleChange={handleChange} value="lahore" title="Lahore" name="test" />
        <InputField handleChange={handleChange} value="islamabad" title="Islamabad" name="test" />
        <InputField handleChange={handleChange} value="london" title="London" name="test" />
        <InputField handleChange={handleChange} value="seattle" title="Seattle" name="test" />
        <InputField handleChange={handleChange} value="boston" title="Boston" name="test" />
        <InputField handleChange={handleChange} value="dubai" title="Dubai" name="test" />
        <InputField handleChange={handleChange} value="uae" title="UAE" name="test" />
      </RadioGroup>
    </FormControl>
  );
};

export default Location;
