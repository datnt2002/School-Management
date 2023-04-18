import React, { useState } from "react";
import FormForgot from "../../components/authentication/FormForgot";
import FormLogin from "../../components/authentication/FormLogin";
import "./authentication.css";

function Authentication({handleSetToken}) {
  const [imageStyle, setImageStyle] = useState({});
  const [blurRightStyle, setBlurRightStyle] = useState({});
  const [blurLeftStyle, setBlurLeftStyle] = useState({});
  const [render, setRender] = useState("Login");
  function handleForgotClick() {
    setImageStyle({
      animationName: "right",
      borderTopRightRadius: "1%",
      borderBottomRightRadius: "1%",
    });
    setBlurRightStyle({ animationName: "opaqueRight" });
    setBlurLeftStyle({ animationName: "appearLeft" });

    const btn_forgot = document.querySelector(".btn_forgot");
    const btn_login = document.querySelector(".btn_login");
    btn_login.classList.remove("active");
    btn_forgot.classList.add("active");
    setRender(btn_forgot.innerHTML);
  }

  function handleSignInClick() {
    setImageStyle({
      animationName: "left",
      borderTopLeftRadius: "1%",
      borderBottomLeftRadius: "1%",
    });
    setBlurLeftStyle({ animationName: "opaqueLeft" });
    setBlurRightStyle({ animationName: "appearRight" });

    const btn_forgot = document.querySelector(".btn_forgot");
    const btn_login = document.querySelector(".btn_login");
    btn_forgot.classList.remove("active");
    btn_login.classList.add("active");
    setRender(document.querySelector(".btn_login").innerHTML);
  }

  return (
    <div className="login">
      <div className="modal_form">
      <div className="switch_button_container">
        <button
          className="switch_button btn_forgot"
          onClick={handleForgotClick}
        >
          Forgot password
        </button>
        <button
          className="switch_button btn_login active"
          onClick={handleSignInClick}
        >
          Login
        </button>
      </div>
      <div className="modal_image_container">
        <img
          className="modal_image"
          /*https://i.pinimg.com/564x/60/82/74/6082748c5ab4281795d0d5f46df2cdaa.jpg*/ 
          src="https://static.vecteezy.com/system/resources/previews/002/012/285/original/cms-icon-content-management-system-eps-vector.jpg"
          style={imageStyle}
          alt="img"
        />
      </div>
      {render === "Login" ? (
        <div className="modal_form_right" style={blurRightStyle}>
          <FormLogin handleSetToken={handleSetToken}/>
        </div>
      ) : (
        <div className="modal_form_left" style={blurLeftStyle}>
          <FormForgot />
        </div>
      )}
    </div>
    </div>
    
  );
}
export default Authentication;
