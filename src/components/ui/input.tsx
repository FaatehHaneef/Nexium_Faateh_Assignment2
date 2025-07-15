'use client';

import React from 'react';

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  type?: string;
  name?: string;
  id?: string;
  autoFocus?: boolean;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  autoComplete?: string;
};

export default function Input({
  value,
  onChange,
  placeholder,
  className = '',
  type = 'text',
  name,
  id,
  autoFocus,
  required,
  disabled,
  readOnly,
  maxLength,
  minLength,
  pattern,
  autoComplete,
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full p-2 border rounded ${className}`}
      name={name}
      id={id}
      autoFocus={autoFocus}
      required={required}
      disabled={disabled}
      readOnly={readOnly}
      maxLength={maxLength}
      minLength={minLength}
      pattern={pattern}
      autoComplete={autoComplete}
    />
  );
}
