import { memo } from "react";
import "./input.css";

function Input({ label, type, onSetState }) {
  return (
    <div className="form-field">
      <input
        type={type}
        className="question"
        // required
        onChange={onSetState}
      />
      <label>
        <span>{label}</span>
      </label>
    </div>
  );
}

export default memo(Input);
