import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import PropTypes from 'prop-types';

function SelectField({
  label,
  name,
  input,
  fullWidth = false,
  options,
  meta: { touched, error },
  ...other
}) {
  return (
    <>
      <FormControl variant="standard" fullWidth={fullWidth}>
        <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label={label}
          {...input}
          {...other}
        >
          {options.map((item, index) => (
            <MenuItem key={index} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </Select>

        {touched && error && <div className={'errorLabel'}>test</div>}
      </FormControl>
    </>
  );
}

SelectField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  fullWidth: PropTypes.bool,
  options: PropTypes.array,
};

export default SelectField;
