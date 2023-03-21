import Style from "./post.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useState } from "react";

function LikeCmt({ likes, comments, handleActiveCm }) {
  const [like, setLike] = useState({});
  function handleLike(){

  }

  return (
    <div style={{ width:"100%", marginTop:"2rem" }}>
      <div className="d-flex justify-content-between">
        <span>12 Likes</span>
        <span>12 Comments</span>
      </div>
      
      <hr style={{ width:"100%" }}/>

      <div className={`${Style.like_cmt} my-1 d-flex justify-content-between`}>
        {/* <div className=""> */}
          <div
            className={Style.like}
            onClick={handleLike}
          >
            <FontAwesomeIcon icon={faHeart} className={Style.fas}/>
          </div>
          
          <div className={Style.like}>
            <FontAwesomeIcon icon={faHeartBroken} className={Style.fas}/>
          </div>
        {/* </div> */}
      </div>
    </div>
    
  );
}
export default LikeCmt;
