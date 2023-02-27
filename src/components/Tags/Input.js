import { memo } from "react";
import "./input.css"

function Input({ label, placeholder, type }) {
  return (
    <div className="form-field">
      {/* <label className="form-label"></label>
      <input
        className={className}
        placeholder={placeholder}
        type={type}
        value={state}
        onChange={onSetState}
      /> */}
      <input type={type} name="name" className="question" id="nme" required autoComplete="off" placeholder={placeholder} hidden={placeholder ? "hidden" : ""}/>
      <label htmlFor="nme" placeholder={placeholder} hidden={placeholder ? "hidden" : ""}><span>{label}</span></label>
      <textarea name="message" rows="2" className="question" id="msg" required autoComplete="off" placeholder={placeholder} hidden={!placeholder ? "hidden" : ""}></textarea>
    </div>
  );
}

export default memo(Input);
