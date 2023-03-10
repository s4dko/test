import React from 'react';
import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

function InputField({ label, name, input, mask, meta: { touched, error }, ...other }) {
  const isError = Boolean(touched && error);
  return (
    <>
      <TextField
        {...input}
        id={name}
        label={label}
        variant="standard"
        error={isError}
        InputProps={{
          inputComponent: mask && mask,
        }}
        {...other}
      />

      {isError && <Typography sx={{ color: '#d32f2f', fontSize: 12 }}>{error}</Typography>}
    </>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  input: PropTypes.object,
  mask: PropTypes.func,
  meta: PropTypes.object,
};

export default InputField;
