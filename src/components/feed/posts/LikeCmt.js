import Style from "./post.module.css";
import "./like.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { apiInteract } from "../../../api/Api";

function LikeCmt({ userId, ideaId, token }) {
  const [vote, setVote] = useState();
  const [interactId, setInteractId] = useState();

  const handleVote = (value) => {
    //if current value of vote is not true or the click handle pass true value, setVote = true so that vote state become true
    if (value === true && vote !== true) {
      setVote(true);
    } else if (value === false && vote !== false) {
      setVote(false);
    }
    //if the value is true or false and the click pass the same value, it will cancel the vote
    else {
      setVote(undefined);
    }
  };

  useEffect(() => {
    const buttonVoteList = document.getElementsByClassName(Style.button_name);
    console.log(buttonVoteList);
    if (vote === true) {
      buttonVoteList[0].classList.add("active");
      buttonVoteList[1].classList.remove("active");
    } else if (vote === false) {
      buttonVoteList[0].classList.remove("active");
      buttonVoteList[1].classList.add("active");
    } else {
      //if vote is undefined, there is no button have change color
      buttonVoteList[0].classList.remove("active");
      buttonVoteList[1].classList.remove("active");
    }
  }, [vote]);

  useEffect(() => {
    const getInteract = { userId, ideaId };
    console.log(getInteract);
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
        console.log(data);
        setInteractId(data[0].interacId);

        if (data[0].voted === true) {
          setVote(data[0].vote);
        } else {
          setVote(undefined);
        }
      })
      .catch(() => console.log("loi r"));
  }, [userId, ideaId, token]);

  useEffect(() => {
    // const cleanup = () => {
    if (vote !== undefined) {
      fetch(apiInteract, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ voted: true, vote, interactionId: interactId }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch(() => console.log("loi r"));
    } else {
      fetch(apiInteract, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          voted: false,
          vote: false,
          interactionId: interactId,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch(() => console.log("loi r"));
    }
    // };
    // return cleanup;
  }, [vote]);

  return (
    <div style={{ width: "100%", marginTop: "2rem" }}>
      <hr style={{ width: "100%" }} />

      <div className={`${Style.like_cmt} my-1 d-flex`}>
        {/* <div className=""> */}
        <button
          className={Style.button_name}
          value={vote}
          onClick={() => handleVote(true)}
        >
          <FontAwesomeIcon
            icon={faHeart}
            className="fasHeart"
            id="Heart"
            // style={like}
          />
        </button>

        <button
          className={Style.button_name}
          onClick={() => handleVote(false)}
          value={vote}
        >
          <FontAwesomeIcon
            icon={faHeartCrack}
            className="fasCrack"
            id="Crack"
            // style={disLike}
          />
        </button>
        {/* </div> */}
      </div>
    </div>
  );
}
export default LikeCmt;
