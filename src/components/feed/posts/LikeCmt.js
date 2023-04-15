import Style from "./post.module.css";
import "./like.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { apiInteract } from "../../../api/Api";

function LikeCmt({ userId, ideaId, token }) {
  const [like, setLike] = useState({animationName:""});
  const [disLike, setDisLike] = useState({animationName:""});
  const [vote, setVote] = useState();
  //flag to add class css active song song with put
  const [flag, setFlag] = useState(0);
  const [interactId, setInteractId] = useState();
  
  useEffect(() => {
    //post to get data of interaction
    const getInteract = { userId, ideaId };

    fetch(apiInteract, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(getInteract),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setInteractId(data.interacId);
        if (data.voted === true) {
          setVote(data.vote);
        } else {
          setVote(undefined)
          setFlag(0);
        }
      })
      .catch((err) => console.log(err));
  }, [userId, ideaId, token]);

  useEffect(() => {
    if (vote === true) {
      setFlag(1);
    } else {
      setFlag(-1);
    }
  }, [vote]);

  useEffect(() => {
    const buttonVoteList = document.getElementsByClassName(Style.button_name);
    if (flag === 1) {
      buttonVoteList[0].classList.add("active1");
      buttonVoteList[1].classList.remove("active1");
    } else if (flag === -1) {
      buttonVoteList[0].classList.remove("active1");
      buttonVoteList[1].classList.add("active1");
    } else {
      //if flag = -1, there is no button have change color
      buttonVoteList[0].classList.remove("active1");
      buttonVoteList[1].classList.remove("active1");
    }
  }, [flag]);

  const handleLike = (valueFlag) => {
    if (flag !== 1) {
      setDisLike({animationName: ""})
      setLike({animationName: "Like"})
      setFlag(valueFlag);
    } else {
      setLike({animationName: ""})
      setFlag(0);
    }
    fetch(apiInteract, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ vote: true, interactionId: interactId }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch(() => console.log("loi r2"));
  };
  const handleDislike = (valueFlag) => {
    if (flag !== -1) {
      setLike({animationName: ""})
      setDisLike({animationName: "Like"})
      setFlag(valueFlag);
    } else {
      setDisLike({animationName: ""})
      setFlag(0);
    }
    fetch(apiInteract, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ vote: false, interactionId: interactId }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch(() => console.log("loi r3"));
  };

  return (
    <div style={{ width: "100%", marginTop: "2rem" }}>
      <hr style={{ width: "100%" }} />

      <div className={`${Style.like_cmt} my-1 d-flex`}>
        <button
          className={Style.button_name}
          value={flag}
          onClick={() => handleLike(1)}
        >
          <FontAwesomeIcon icon={faHeart} className="fasHeart" id="Heart" style={like}/>
        </button>

        <button
          className={Style.button_name}
          onClick={() => handleDislike(-1)}
          value={flag}
        >
          <FontAwesomeIcon
            icon={faHeartCrack}
            className="fasCrack"
            id="Crack"
            style={disLike}
          />
        </button>
      </div>
    </div>
  );
}
export default LikeCmt;