import React, { useState, useEffect, useContext } from "react";
import { server } from "../../../api/Api";
import Style from "../../../pages/NewsFeed/newsFeed.module.css";
import "./dropDown.css";
import { useNavigate } from "react-router-dom";

import UserContext from "../../../api/UserContext";

function Post({ token, apiUrl, id, dataIdea }) {
  // const [dataIdea, setDataIdea] = useState([]);

  // const user = useContext(UserContext);

  const navigate = useNavigate();

  const handleDetail = (id) => {
    console.log(id);
    navigate("/DetailIdea", { state: { ideaId: id } });
  };

  //Dropdown
  // const [selectedOption, setSelectedOption] = useState(
  //   "--Please choose an option--"
  // );
  // function handleSelect(eventKey) {
  //   let sortType = "";
  //   switch (eventKey) {
  //     case "Most Likes":
  //       sortType = "mpi";
  //       break;
  //     case "Most Views":
  //       sortType = "mvi";
  //       break;
  //     case "Newest":
  //       sortType = "lid";
  //       break;
  //     default:
  //       break;
  //   }

  //   fetch(apiUrl + "/sort?sortType=" + sortType, {
  //     headers: { Authorization: `Bearer ${token}` },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setDataIdea(data);
  //     })
  //     .catch(() => {
  //       console.log("Error retrieving sorted data from the API.");
  //     });
  //   setSelectedOption(eventKey);
  // }

  console.log(dataIdea);
  return (
    <>
      {dataIdea.map((dataIdea) => {
        return (
          <div
            className={Style.news_post}
            key={dataIdea.ideaId}
            onClick={() => handleDetail(dataIdea.ideaId)}
          >
            <div className="card-body pb-1">
              <div className={Style.card}>
                <div className={Style.media}>
                  <div className={Style.media_body}>
                    <img
                      className="mr-2 rounded"
                      src={server + dataIdea.avatar}
                      alt="placeholder"
                      height="50"
                    />
                    <div style={{ marginLeft: "10px" }}>
                      <h5 className="mt- mb-1">{dataIdea.userName}</h5>
                      <p className="mt- mb-1 font-18">
                        {dataIdea.departmentName}
                      </p>
                    </div>
                  </div>
                  <div>
                    <span>{dataIdea.viewed}</span>
                    <span> views</span>
                  </div>
                </div>

                <hr />
                <div className="font-16 text-dark my-3">
                  <small className="my-1"><strong>Category: {dataIdea.categoryName}</strong></small>
                </div>
                <div className="font-16 text-dark my-3">
                  <h2 className="my-1">{dataIdea.name}</h2>
                </div>
                <div
                  className="font-16 text-dark my-3"
                  style={{ overflowWrap: "break-word" }}
                >
                  <p className="my-1">
                    {/* {dataIdea.ideaContent.length > 50 ? (
                      <>
                        {dataIdea.ideaContent.substring(0, 50)}
                        <button>Read more</button>
                      </>
                    ) : (
                      dataIdea.ideaContent
                    )} */}
                    content
                  </p>
                </div>
                <div className="file-group"></div>

                <hr />
                <div className="d-flex justify-content-between">
                  <span>{dataIdea.vote} Votes</span>
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
