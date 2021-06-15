import {nanoid} from 'nanoid';
import React, {FC, useRef} from 'react';

const InputField: FC<InputFieldProps> = ({
  error,
  identifier,
  onChange,
  value,
  label = '',
  type = 'text',
  placeholder = '',
}) => {
  const id = useRef(identifier || nanoid());
  return (
    <React.Fragment>
      <div className="border-gray-500 bg-white border-2 w-full p-1 mt-4 rounded">
        {label && (
          <div className="h-2">
            <label
              htmlFor={id.current}
              className="text-sm font-bold bg-white tracking-wider transform -translate-y-4 inline-block px-2"
            >
              {label}
            </label>
          </div>
        )}
        <input
          type={type}
          name={id.current}
          className="border-none w-full p-2 pt-0"
          value={value}
          placeholder={placeholder}
          onChange={({target: {value}}) => {
            onChange(value);
          }}
        />
      </div>
      {error && (
        <p className="text-red-600 text-xs tracking-wider font-normal">
          {error}
        </p>
      )}
    </React.Fragment>
  );
};


export default InputField;
