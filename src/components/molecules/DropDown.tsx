import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import React from "react";

type DropDownProps = {
  title: string,
  items: string[],
  values: string[],
  defaultValue: string;
}

function Dropdown(props: DropDownProps) {
  const [choice, setChoice] = React.useState(props.defaultValue);

  const handleChange = (event: SelectChangeEvent) => {
    setChoice(event.target.value as string);
  };

  if (props.items.length != props.values.length) {
    console.error(`Dropdown ${props.title} has error
    props.items.length and props.values.length are not equal`);
    return <span>Dropdown {props.title} error</span>
  }

  const dropdownItems: any[] = [];
  for (let i = 0; i < props.items.length; i++) {
    dropdownItems.push(
      <MenuItem value={props.values[i]} key={i}>
        {props.items[i]}
    </MenuItem>);
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{props.title}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={choice}
        label={props.title}
        onChange={handleChange}
        defaultValue={props.defaultValue}
      >
        {dropdownItems}
      </Select>
    </FormControl>
  )
}

export default Dropdown;
