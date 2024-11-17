import React, { useState } from "react";

const Input = (props) => {
  const { onChange, isControlled, defaultValue, label, value } = props;
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");

  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange?.(newValue);
    if (!isControlled) {
      setInternalValue(newValue);
    }
  };

  const valueToDisplay = isControlled ? value ?? "" : internalValue;
  return (
    <div className="input-container">
      {label && <label>{label}</label>}
      <input type="text" value={valueToDisplay} onChange={handleChange} />
    </div>
  );
};

export default Input;
