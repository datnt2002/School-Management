import { memo } from "react";
import "./input.css";

function Input({ label, type, onSetState, value }) {
  return (
    <div className="form-field">
      <input
        type={type}
        className="question"
        value={value}
        onChange={onSetState}
      />
      <label>
        <span>{label}</span>
      </label>
    </div>
  );
}

export default memo(Input);
