import { memo } from "react";
import Style from "./input.module.css";

function Input({
  id,
  label,
  type,
  onSetState,
  value,
  placeholder,
  name,
  disabled,
  readOnly,
}) {
  return (
    <div className={Style.form_field}>
      <input
        type={type}
        className={Style.form_input}
        placeholder=" "
        value={value}
        onChange={onSetState}
        disabled={disabled}
        readOnly={readOnly}
        autoComplete="off"
      />
      <label htmlFor={name} className={Style.form_label}>
        {label}
      </label>
    </div>
  );
}

export default memo(Input);
