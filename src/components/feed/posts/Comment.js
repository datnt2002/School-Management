import React from "react";
import Style from "./comment.module.css";
import { server } from "../../../api/Api";

function Comment({ dataComment }) {
  return (
    <>
      {dataComment.map((dataComment) => {
        return (
          <div
            className={`${Style.comments} mt-3 d-flex`}
            key={dataComment.commentId}
          >
            <img
              src={server + dataComment.userAvatar}
              alt=""
              height="50"
              className={Style.commentAvatar}
            />
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
