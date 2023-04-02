import React, { useState, useEffect } from "react";
import { apiComment, server } from "../../../api/Api";
import { useLocation } from "react-router-dom";
import Style from "./comment.module.css";

function Comment({ token }) {
  const location = useLocation();
  const ideaId = location.state.ideaId;
  console.log(ideaId);

  const [dataComment, setDataComment] = useState([]);

  useEffect(() => {
    fetch(apiComment + "/" + ideaId, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDataComment(data);
      });
  }, [ideaId, token]);
  return (
    <>
      {dataComment.map((dataComment) => {
        return (
            <div className={`${Style.comments} mt-3 d-flex`} key={dataComment.commentId}>
              <img src={server + dataComment.userAvatar} alt="" height="50" className={Style.commentAvatar}/>
              <div className={Style.comment}>
                <small class={Style.comment_author}>{dataComment.userName}</small>
                <div className={Style.comment_user}>{dataComment.content}</div>
              </div>
            </div>
        );
      })}
    </>
  );
}

export default Comment;
