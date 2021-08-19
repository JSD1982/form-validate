import React from 'react';
const InputField = props => {
  return (
    <div className={props.className}>
      <label htmlFor={props.name}>
        {props.label}
        <input
          type={props.type ? props.type : 'text'}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          checked={props.checked}
          placeholder={props.placeholder}
        />
      </label>
    </div>
  );
};
export default InputField;
