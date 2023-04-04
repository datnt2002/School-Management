import { useState, useContext } from "react";
import Style from "../../pages/NewsFeed/newsFeed.module.css";
import { Dropdown } from "react-bootstrap";
import { apiIdeaSort } from "../../api/Api";
import UserContext from "../../api/UserContext";

function Sort({ token, setDataIdea }) {
  const [selectedOption, setSelectedOption] = useState(
    "--Please choose an option--"
  );
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
    setSelectedOption(eventKey);
    sortIdea(sortType);
  }

  const sortIdea = (sortType) => {
    fetch(apiIdeaSort + "/?sortType=" + sortType, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setDataIdea(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const user = useContext(UserContext);

  return (
    <div className={Style.arrange}>
      
      
      {user.role === "QAM" ?
      <div className="d-flex justify-content-between">
        <div>
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
        </div>
        <div>
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {selectedOption}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="">Idea by Department</Dropdown.Item>
              <Dropdown.Item eventKey="">Idea by Event</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      
      : <Dropdown onSelect={handleSelect}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {selectedOption}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="Most Likes">Most Likes</Dropdown.Item>
            <Dropdown.Item eventKey="Most Views">Most Views</Dropdown.Item>
            <Dropdown.Item eventKey="Newest">Newest</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      }
    </div>
  );
}
export default Sort;
