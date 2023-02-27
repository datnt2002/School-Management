import React, { useState, useEffect } from "react";
import { apiComment } from "../../../api/Api";
import Profile from "../../profile/Profile";


function Comment({activeCmt}){
  const [dataComment, setDataComment] = useState([]);
  
  useEffect(()=>{
    const fetchDataComment = async () => {
        const response = await fetch(apiComment);
        const json = await response.json();
        setDataComment(json);
      };
    fetchDataComment();

  }, [])
    return(
        <>
        {dataComment.map((dataComment) => {        
            return(
                <div className="mt-3" hidden={activeCmt}>
                    <div className="comment" key={dataComment.commentId}>
                        <div className="user-comment">
                            <Profile
                                imageSrc="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/146614516_1768473006657991_2851123883348124585_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=LUmm1lzU44kAX-qv5s2&tn=7YDAcjGu5PpJ9IVW&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCgbW8g8OCAD_LhNdB0wSyJn2jTpgI82Eexg7lYdTp0YQ&oe=6417F67D"
                                userName="Sansa Stark"
                            />
                            <div className="font-16 text-dark my-3" >
                                <p className="my-1">{dataComment.content}</p>
                            </div>
                            <div className="file-group"></div>
                            <div className="time-group"></div>
                        </div>
                    </div>
                <hr />
                </div>
            ) 
        })}
        </>
    )
}

export default Comment;