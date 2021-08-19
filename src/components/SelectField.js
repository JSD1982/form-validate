import React from 'react';
const SelectField = props => {
  return (
    <div className={props.className}>
      <label htmlFor={props.name}>{props.label}</label>

      <select name={props.name} id={props.name} onChange={props.onChange}>
        <option selected disabled>
          - Select one -
        </option>
        {props.children}
      </select>
    </div>
  );
};
export default SelectField;
