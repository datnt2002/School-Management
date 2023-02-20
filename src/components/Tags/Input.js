import { memo } from "react";
import "./input.css"

function Input({ state, onSetState, placeholder, type, label }) {
  return (
    <div className="form-field">
      <label>{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        value={state}
        onChange={onSetState}
      />
    </div>
  );
}

export default memo(Input);
