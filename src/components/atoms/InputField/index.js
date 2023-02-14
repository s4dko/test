import React from 'react';
import TextField from '@mui/material/TextField';

function InputField({
  label, name, input, meta: { touched, error }, ...other
}) {
  return (
    <>
      <TextField
        id={name}
        label={label}
        variant="standard"
        {...input}
        {...other}
      />

      { touched && error &&
          <div className={'errorLabel'}>{error}</div>
      }
    </>
  );
}

export default InputField;
