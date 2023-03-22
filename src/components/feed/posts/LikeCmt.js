import Style from "./post.module.css";
import "./like.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCrack } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function LikeCmt({ likes, comments, handleActiveCm }) {
  const [like, setLike] = useState({animationName:""});
  const [disLike, setDisLike] = useState({animationName:""});
  function handleLike(){
    const fasHeart = document.getElementById("Heart");
    setDisLike({
      animationName: "",
      color:""
    })
    if(fasHeart.style.animationName==="")
    setLike({
      animationName: "Like",
      color:"red"
    })
    else{
      setLike({
        animationName: "",
        color:""
      })
    }
  }
  function handleDisLike() {
    const fasCrack = document.getElementById("Crack");
    setLike({
      animationName: "",
      color:""
    })
    if(fasCrack.style.animationName==="")
      setDisLike({
        animationName: "Like",
        color:"red"
      })
    else{
      setDisLike({
        animationName: "",
        color:""
      })
    }
  }

  return (
    <div style={{ width:"100%", marginTop:"2rem" }}>
      <div className="d-flex justify-content-between">
        <span>{likes} Likes</span>
        <span>{comments} Comments</span>
      </div>
      
      <hr style={{ width:"100%" }}/>

      <div className={`${Style.like_cmt} my-1 d-flex`}>
        {/* <div className=""> */}
          <button
            className={Style.button_name}
            onClick={handleLike}
          >
            <FontAwesomeIcon icon={faHeart} className="fasHeart" id="Heart" style={like}/>
          </button>
          
          <button 
            className={Style.button_name}
            onClick={handleDisLike}
          >
            <FontAwesomeIcon icon={faHeartCrack} className="fasCrack" id="Crack" style={disLike}/>
          </button>
          <button className={Style.button_name}>
            <FontAwesomeIcon icon={faComment} className={Style.fasCmt}/>
          </button>
        {/* </div> */}
      </div>
    </div>
    
  );
}
export default LikeCmt;
