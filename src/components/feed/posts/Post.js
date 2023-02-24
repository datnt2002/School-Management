import React, { useState } from "react";
import Content from "./Content";
import Profile from "../../profile/Profile";

function Post() {
  const [activeCm, setActiveCm] = useState("hidden");

  function handleActiveCm() {
    if(activeCm ==="hidden")
    {
      setActiveCm("");
    }else{
      setActiveCm("hidden");
    }
  }
  
  return (
    <div className="news-post">
      <div className="card-body pb-1">
        <div className="card">
          <Profile
            className="mr-2 rounded"
            imageSrc="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/146614516_1768473006657991_2851123883348124585_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=LUmm1lzU44kAX-qv5s2&tn=7YDAcjGu5PpJ9IVW&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCgbW8g8OCAD_LhNdB0wSyJn2jTpgI82Eexg7lYdTp0YQ&oe=6417F67D"
            alt="image"
            height="32"
            userName="Jeremy Tomlinson"
            status="about 2 minuts ago"
          />
          <hr />

          <Content content="Leave one wolf alive and the sheep are never safe. When people ask you what happened here, tell them the North remembers. Tell them winter came for House Frey." />

          <hr />

          <div className="my-1 justify-content-between" style={{ display:"flex" }}>
            <a
              href="javascript: void(0);"
              className="btn btn-sm btn-link text-muted pl-0"
            >
              <i className="mdi mdi-heart text-danger"></i> 2k Like
            </a>
            <a onClick={handleActiveCm} className="btn btn-sm btn-link text-muted">
              <i className="uil uil-comments-alt"></i> Comment
            </a>
          </div>

          <hr />

          <div className="mt-3" hidden={activeCm}>
            <div className="comment">
              <div className="user-comment">
                <Profile
                  className="mr-2 rounded"
                  imageSrc="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/146614516_1768473006657991_2851123883348124585_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=LUmm1lzU44kAX-qv5s2&tn=7YDAcjGu5PpJ9IVW&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCgbW8g8OCAD_LhNdB0wSyJn2jTpgI82Eexg7lYdTp0YQ&oe=6417F67D"
                  alt="Generic placeholder image"
                  height="32"
                  userName="Sansa Stark"
                  status="2 mins ago"
                />
                  <Content
                    content="This is awesome! Proud of sis :) Waiting for you to come back to
                  winterfall"
                  />
              </div>
                
              <div className="user-comment">
                <Profile
                  className="mr-2 rounded"
                  imageSrc="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/146614516_1768473006657991_2851123883348124585_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=LUmm1lzU44kAX-qv5s2&tn=7YDAcjGu5PpJ9IVW&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCgbW8g8OCAD_LhNdB0wSyJn2jTpgI82Eexg7lYdTp0YQ&oe=6417F67D"
                  alt="Generic placeholder image"
                  height="32"
                  userName="Sansa Stark"
                  status="2 mins ago"
                />
                  <Content
                    content="This is awesome! Proud of sis :) Waiting for you to come back to
                  winterfall"
                  />
              </div>

              <div className="user-comment">
                <Profile
                  className="mr-2 rounded"
                  imageSrc="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/146614516_1768473006657991_2851123883348124585_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=LUmm1lzU44kAX-qv5s2&tn=7YDAcjGu5PpJ9IVW&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCgbW8g8OCAD_LhNdB0wSyJn2jTpgI82Eexg7lYdTp0YQ&oe=6417F67D"
                  alt="Generic placeholder image"
                  height="32"
                  userName="Sansa Stark"
                  status="2 mins ago"
                />
                  <Content
                    content="This is awesome! Proud of sis :) Waiting for you to come back to
                  winterfall"
                  />
              </div>
              <div className="user-comment">
                <Profile
                  className="mr-2 rounded"
                  imageSrc="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/146614516_1768473006657991_2851123883348124585_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=LUmm1lzU44kAX-qv5s2&tn=7YDAcjGu5PpJ9IVW&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCgbW8g8OCAD_LhNdB0wSyJn2jTpgI82Eexg7lYdTp0YQ&oe=6417F67D"
                  alt="Generic placeholder image"
                  height="32"
                  userName="Sansa Stark"
                  status="2 mins ago"
                />
                  <Content
                    content="This is awesome! Proud of sis :) Waiting for you to come back to
                  winterfall"
                  />
              </div>
              <div className="user-comment">
                <Profile
                  className="mr-2 rounded"
                  imageSrc="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/146614516_1768473006657991_2851123883348124585_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=LUmm1lzU44kAX-qv5s2&tn=7YDAcjGu5PpJ9IVW&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCgbW8g8OCAD_LhNdB0wSyJn2jTpgI82Eexg7lYdTp0YQ&oe=6417F67D"
                  alt="Generic placeholder image"
                  height="32"
                  userName="Sansa Stark"
                  status="2 mins ago"
                />
                  <Content
                    content="This is awesome! Proud of sis :) Waiting for you to come back to
                  winterfall"
                  />
              </div>
              <div className="user-comment">
                <Profile
                  className="mr-2 rounded"
                  imageSrc="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/146614516_1768473006657991_2851123883348124585_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=LUmm1lzU44kAX-qv5s2&tn=7YDAcjGu5PpJ9IVW&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCgbW8g8OCAD_LhNdB0wSyJn2jTpgI82Eexg7lYdTp0YQ&oe=6417F67D"
                  alt="Generic placeholder image"
                  height="32"
                  userName="Sansa Stark"
                  status="2 mins ago"
                />
                  <Content
                    content="This is awesome! Proud of sis :) Waiting for you to come back to
                  winterfall"
                  />
              </div>
              <div className="user-comment">
                <Profile
                  className="mr-2 rounded"
                  imageSrc="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/146614516_1768473006657991_2851123883348124585_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=LUmm1lzU44kAX-qv5s2&tn=7YDAcjGu5PpJ9IVW&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCgbW8g8OCAD_LhNdB0wSyJn2jTpgI82Eexg7lYdTp0YQ&oe=6417F67D"
                  alt="Generic placeholder image"
                  height="32"
                  userName="Sansa Stark"
                  status="2 mins ago"
                />
                  <Content
                    content="This is awesome! Proud of sis :) Waiting for you to come back to
                  winterfall"
                  />
              </div>
            </div>

            <hr />

            
          </div>
          <div className="media mb-2 reply">
              <Profile 
                className="mr-2 rounded"
                height="32"
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
}

export default Post;
