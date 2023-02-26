import React, { useState, useEffect } from "react";
// import Content from "./Content";
import Profile from "../../profile/Profile";

// import LikeCmt from "./LikeCmt";
import { apiComment, apiIdea } from "../../../api/Api";
import Comment from "./Comment";


function Post() {
  const [activeCm, setActiveCm] = useState("hidden");
  const [dataIdea, setDataIdea] = useState([]);

  function handleActiveCm() {
    if(activeCm ==="hidden")
    {
      setActiveCm("");
    }else{
      setActiveCm("hidden");
    }
  }

  useEffect(() => {
    const fetchDataIdea = async () => {
      const response = await fetch(apiIdea);
      const json = await response.json();
      setDataIdea(json);
    };

    fetchDataIdea();
  }, []);


  return (
    <>
    {dataIdea.map((dataIdea) => {
      return(
        <div className="news-post" key={dataIdea.id}>
          <div className="card-body pb-1">
            <div className="card">
              <Profile
                imageSrc="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/146614516_1768473006657991_2851123883348124585_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=LUmm1lzU44kAX-qv5s2&tn=7YDAcjGu5PpJ9IVW&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCgbW8g8OCAD_LhNdB0wSyJn2jTpgI82Eexg7lYdTp0YQ&oe=6417F67D"
                alt="image"
                userName="Jeremy Tomlinson"
              />

              <hr />

              <div className="font-16 text-dark my-3" ><p className="my-1">{dataIdea.content}</p></div>
              <div className="file-group"></div>
              <div className="time-group"></div>

              <hr />

              <div className="my-1 justify-content-between" style={{ display:"flex" }}>
                <a
                  href="javascript: void(0);"
                  className="btn btn-sm btn-link text-muted pl-0"
                >
                  <i className="mdi mdi-heart text-danger"></i> {dataIdea.vote} Like
                </a>
                <a onClick={handleActiveCm} className="btn btn-sm btn-link text-muted">
                  <i className="uil uil-comments-alt"></i> Comment
                </a>
              </div>
              
              <hr />
              <Comment activeCm={activeCm}/>
              <div className="media mb-2 reply">
                <Profile 
                  imageSrc="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/146614516_1768473006657991_2851123883348124585_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=LUmm1lzU44kAX-qv5s2&tn=7YDAcjGu5PpJ9IVW&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCgbW8g8OCAD_LhNdB0wSyJn2jTpgI82Eexg7lYdTp0YQ&oe=6417F67D" 
                />
                <div className="media-body">
                  <textarea
                    placeholder="Write a comment"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })}
    </>
  );
}

export default Post;
