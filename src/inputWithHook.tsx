import React, { useState, useImperativeHandle, forwardRef } from "react";

const Input = (props, ref) => {
  const { onChange, isControlled, defaultValue, label } = props;
  const [value, setValue] = useState(defaultValue ?? "");
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        updateInput(newValue: string) {
          if (isControlled) setValue(newValue);
        },
      };
    },
    [isControlled]
  );

  return (
    <div className="input-container">
      {label && <label>{label}</label>}
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default forwardRef(Input);
