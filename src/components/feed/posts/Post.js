import React, { useState, useEffect, useContext } from "react";
import { server } from "../../../api/Api";
import Style from "../../../pages/NewsFeed/newsFeed.module.css";
import "./dropDown.css"
import { useNavigate } from "react-router-dom";
import LikeCmt from "./LikeCmt";
import UserContext from "../../../api/UserContext";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { apiIdeaSort } from "../../../api/Api";
import SearchBar from "../../Search/SearchBar";

function Post({ token, apiUrl, id }) {
  const [dataIdea, setDataIdea] = useState([]);

  const user = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(id ? apiUrl + "/" + id : apiUrl, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setDataIdea(data);
      })
      .catch(() => {
        console.log("k get dc idea");
      });
  }, [apiUrl, token, id]);

  // const handleReadMore = (id) => {
  //   navigate("/DetailIdea", { state: { ideaId: id } });
  // };

  const handleDetail = (id) => {
    console.log(id);
    navigate("/DetailIdea", { state: { ideaId: id } });
  };

  //Dropdown
  const [selectedOption, setSelectedOption] = useState('--Please choose an option--');
  function handleSelect(eventKey) {
    let sortType = "";
    switch (eventKey) {
      case "Most Likes":
        sortType = "mpi";
        break;
      case "Most Views":
        sortType = "mvi";
        break;
      case "Newest":
        sortType = "lid";
        break;
      default:
        break;
    }
  
    fetch(apiUrl + "/sort?sortType=" + sortType, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setDataIdea(data);
      })
      .catch(() => {
        console.log("Error retrieving sorted data from the API.");
      });
    setSelectedOption(eventKey);
  }

  console.log(dataIdea);
  return (
    <>
      <div className={Style.arrange}>
        <Dropdown onSelect={handleSelect}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {selectedOption}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="Most Likes">Most Likes</Dropdown.Item>
            <Dropdown.Item eventKey="Most Views">Most Views</Dropdown.Item>
            <Dropdown.Item eventKey="Newest">Newest</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <SearchBar/>
      </div>
      {dataIdea.map((dataIdea) => {
        return (
          <div
            className={Style.news_post}
            key={dataIdea.id}
            onClick={() => handleDetail(dataIdea.id)}
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
                    </div>
                  </div>
                  <div>
                    <span>{dataIdea.viewed}</span>
                    <span> views</span>
                  </div>
                </div>

                <hr />
                <div className="font-16 text-dark my-3">
                  <h2 className="my-1">{dataIdea.name}</h2>
                </div>
                <div
                  className="font-16 text-dark my-3"
                  style={{ overflowWrap: "break-word" }}
                >
                  <p className="my-1">
                    {dataIdea.content.length > 50 ? (
                      <>
                        {dataIdea.content.substring(0, 50)}
                        <button>Read more</button>
                      </>
                    ) : (
                      dataIdea.content
                    )}
                  </p>
                </div>
                <div className="file-group"></div>

                <hr />
                <div className="d-flex justify-content-between">
                  <span>{dataIdea.vote} Likes</span>
                  <span>{dataIdea.comments} Comments</span>
                </div>
                {/* <LikeCmt userId={user.userId} ideaId={dataIdea.id} /> */}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Post;
