import { memo } from "react";
import Style from "./input.module.css";

function Input({ id, label, type, onSetState, value, placeholder, name, disabled, readOnly }) {
  return (
    // <div className="form-field">
    //   <input
    //     type={type}
    //     className="question"
    //     value={value}
    //     onChange={onSetState}
    //   />
    //   <label>
    //     <span>{label}</span>
    //   </label>
    // </div>
    // <div className="control-group">
    //   <input 
    //     // id={id}
    //     type={type} 
    //     name={name}
    //     placeholder={placeholder}
    //     value={value}
    //     onChange={onSetState}
    //     disabled={disabled}
    //     readOnly={readOnly}
    //   />

    //   <label 
    //     // for="firstname"
    //   >
    //     <span>{label}</span>
    //   </label>
    // </div>
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
      <label 
        htmlFor={name}
        className={Style.form_label}
      >{label}</label>
    </div>
  );
}

export default memo(Input);
