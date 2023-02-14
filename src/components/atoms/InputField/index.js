import React from 'react';
import TextField from '@mui/material/TextField';

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
          <Typography sx={{color: '#d32f2f', fontSize: 12}}>{error}</Typography>
      }
    </>
  );
}

export default InputField;
