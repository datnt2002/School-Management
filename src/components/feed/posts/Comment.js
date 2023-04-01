import React, { useState, useEffect } from "react";
import { apiComment, server } from "../../../api/Api";
import { useLocation } from "react-router-dom";

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
          <div className="mt-3" key={dataComment.commentId}>
            <div className="comment">
              <img src={server + dataComment.userAvatar} alt="" height="50" />
              <span>{dataComment.userName}</span>
              <div className="user-comment">
                <div className="font-16 text-dark my-3">
                  <p className="my-1">{dataComment.content}</p>
                </div>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default Comment;
