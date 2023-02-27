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
      <form>
        <input type={type} name="name" class="question" id="nme" required autocomplete="off" placeholder={placeholder} hidden={placeholder ? "hidden" : ""}/>
        <label for="nme" placeholder={placeholder} hidden={placeholder ? "hidden" : ""}><span>{label}</span></label>
        <textarea name="message" rows="2" class="question" id="msg" required autocomplete="off" placeholder={placeholder} hidden={!placeholder ? "hidden" : ""}></textarea>
      </form>
    </div>
  );
}

export default memo(Input);
