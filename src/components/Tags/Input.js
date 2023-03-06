import { memo } from "react";
import "./input.css";

function Input({ id, label, type, onSetState, value, placeholder, name, disabled }) {
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
    <div className="control-group">
      <input 
        // id={id}
        type={type} 
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onSetState}
        disabled={disabled}
      />

      <label 
        // for="firstname"
      >
        <span>{label}</span>
      </label>
    </div>
  );
}

export default memo(Input);
