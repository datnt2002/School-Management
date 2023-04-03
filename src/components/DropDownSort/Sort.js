import Style from "../../pages/NewsFeed/newsFeed.module.css";
import { Dropdown } from "react-bootstrap";

function Sort({ handleSelect, selectedOption }) {
    return(
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
        </div>
    )
}
export default Sort;