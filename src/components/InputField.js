import React from 'react';

const InputField = props =>
{
  const { className, name, label, type, value, onChange, checked, placeholder } = props;
  return (
    <div className={className}>
      <label htmlFor={name}>
        { label }
        <input
          type={type || 'text'}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
};
export default InputField;
