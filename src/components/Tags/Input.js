import { memo } from "react";
import "./input.css"

function Input({ state, onSetState, placeholder, type, label, className }) {
  return (
    <div className="form-field">
      <label class="form-label">{label}</label>
      <input
        className={className}
        placeholder={placeholder}
        type={type}
        value={state}
        onChange={onSetState}
      />
    </div>
  );
}

export default memo(Input);
