import React from 'react';
import PropTypes from 'prop-types';
import css from './Input.module.css';

const Input = ({ children, ...other }) => {
  const {
    label,
    value,
    onChange,
    type,
    name,
    pattern,
    title,
    required = false,
  } = other;
  return (
    <p>
      <label className={css.labelContact}>
        <span className={css.spanContact}>{label}</span>
        <input
          className={css.contactsInput}
          value={value}
          onChange={onChange}
          type={type}
          name={name}
          pattern={pattern}
          title={title}
          required={required}
        />
        {children}
      </label>
    </p>
  );
};

Input.ptopTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
};
export default Input;
