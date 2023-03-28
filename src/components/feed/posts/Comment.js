import React, { useState, useEffect } from "react";
import { apiComment } from "../../../api/Api";
import Profile from "../../profile/Profile";

function Comment() {
  const [dataComment, setDataComment] = useState([]);

  useEffect(() => {}, []);
  return (
    <>
      {dataComment.map((dataComment) => {
        return (
          <div className="mt-3">
            <div className="comment" key={dataComment.commentId}>
              <div className="user-comment">
                <h3>ảnh css lại sau</h3>
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
