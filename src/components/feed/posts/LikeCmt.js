import Style from "./post.module.css";
import "./like.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function LikeCmt({ userId, ideaId, likes, comments }) {
  const [like, setLike] = useState({ animationName: "" });
  const [disLike, setDisLike] = useState({ animationName: "" });
  // function handleLike() {
  //   // const fasHeart = document.getElementById("Heart");
  //   // setDisLike({
  //   //   animationName: "",
  //   //   color:""
  //   // })
  //   // if(fasHeart.style.animationName==="")
  //   // setLike({
  //   //   animationName: "Like",
  //   //   color:"red"
  //   // })
  //   // else{
  //   //   setLike({
  //   //     animationName: "",
  //   //     color:""
  //   //   })
  //   // }
  // }
  // function handleDisLike() {
  //   // const fasCrack = document.getElementById("Crack");
  //   // setLike({
  //   //   animationName: "",
  //   //   color:""
  //   // })
  //   // if(fasCrack.style.animationName==="")
  //   //   setDisLike({
  //   //     animationName: "Like",
  //   //     color:"red"
  //   //   })
  //   // else{
  //   //   setDisLike({
  //   //     animationName: "",
  //   //     color:""
  //   //   })
  //   // }
  // }

  const [vote, setVote] = useState(null);
  const handleVote = (e) => {
    e.preventDefault();
  };
  return (
    <div style={{ width: "100%", marginTop: "2rem" }}>
      

      <hr style={{ width: "100%" }} />

      <div className={`${Style.like_cmt} my-1 d-flex`}>
        {/* <div className=""> */}
        <button className={Style.button_name} onClick={handleVote}>
          <FontAwesomeIcon
            icon={faHeart}
            className="fasHeart"
            id="Heart"
            style={like}
          />
        </button>

        <button className={Style.button_name} onClick={handleVote}>
          <FontAwesomeIcon
            icon={faHeartCrack}
            className="fasCrack"
            id="Crack"
            style={disLike}
          />
        </button>
        {/* </div> */}
      </div>
    </div>
  );
}
export default LikeCmt;
