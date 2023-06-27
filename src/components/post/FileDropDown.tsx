import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export const MyDropdown = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <Select onChange={handleChange}>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>
    </div>
  );
};
export default MyDropdown;
