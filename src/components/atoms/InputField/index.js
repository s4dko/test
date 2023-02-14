import React from 'react';
import TextField from '@mui/material/TextField';

import '@atoms/InputField/index.module.css'
import Typography from "@mui/material/Typography";

function InputField({
  label, name, input, meta: { touched, error }, ...other
}) {
  const isError = touched && error;
  return (
    <>
      <TextField
        id={name}
        label={label}
        variant="standard"
        error={isError}
        {...input}
        {...other}
      />

      { isError &&
          <Typography className="errorLabel">{error}</Typography>
      }
    </>
  );
}

export default InputField;
