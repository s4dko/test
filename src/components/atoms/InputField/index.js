import React from 'react';
import TextField from '@mui/material/TextField';

function InputField({
  label, name, meta: { touched, error }, ...other
}) {
  return (
    <>
      <TextField
        id={name}
        label={label}
        variant="standard"
        {...other}
      />

      { touched && error &&
          <div className={'errorLabel'}>test</div>
      }
    </>
  );
}

export default InputField;
