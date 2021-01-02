import React, { useState } from 'react';

export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown: (value: string) => void;
}

function Input({ value, onChange, onKeyDown }: InputProps) {
  const [inputValue, setInputValue] = useState<string>(value);
  const valueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setInputValue(e.target.value);
  };
  const onKeyDownEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputValue && e.key === 'Enter') {
      e.preventDefault();
      setInputValue('');
      onKeyDown(e.currentTarget.value);
    }
  };
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={valueChange}
        onKeyPress={onKeyDownEnter}
      />
    </div>
  );
}
Input.defaultProps = {
  value: '',
  onChange: () => {},
  onKeyDown: () => {},
} as Partial<InputProps>;

export default Input;
