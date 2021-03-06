import React from 'react';

const SelectField = props =>
{
  const { className, name, label, children, onChange } = props;
  return (
    <div className={className}>
      <label htmlFor={name}>{ label }</label>
      <select name={ name } id={ name } onChange={ onChange } defaultValue="- Select one -" >
        <option disabled >
          - Select one -
        </option>
        { children }
      </select>
    </div>
  );
};
export default SelectField;
