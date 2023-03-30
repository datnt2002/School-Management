import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import "./table.css";
import Style from "./modu.module.css";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
function Table({
  data,
  content,
  description,
  addedDateTitle,
  category,
  firstClosureTitle,
  finalClosureTitle,
  hidden,
  edit,
  onSetData,
  deleteAction,
  apiLink,
  token,
  handleOpen,
  setSelectEventId,
}) {
  const [err, setErr] = useState();
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.preventDefault();

    const itemId = e.target.getAttribute("data-id");

    await fetch(apiLink + `/${itemId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .catch((err) => err.json().then((err) => setErr(err.message)));

    fetch(apiLink, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.json())
      .then((data) => onSetData(data));
  };

  const getEventId = (e) => {
    const eventId = e.target.getAttribute("data-id");
    setSelectEventId(eventId); // Set giá trị event id vào state bên ngoài component Table
    // handleOpen();
  };

  const handleViewListIdea = (evId) => {
    navigate("/ListIdea", { state: { eventId: evId } });
  };

  return (
    <table className="table table-centered w-100 dt-responsive nowrap dataTable no-footer dtr-inline">
      {err && (
        <div>
          <p style={{ color: "red" }}>{err}</p>
        </div>
      )}

      <thead className="thead-light">
        <tr role="row">
          <th className="link" hidden={hidden}>
            <FontAwesomeIcon icon={faLink} />
          </th>
          <th className="sorting">{content}</th>
          <th className="sorting">{description}</th>
          <th className="sorting" hidden={!category ? "hidden" : ""}>
            {category}
          </th>
          <th className="sorting" hidden={!addedDateTitle ? "hidden" : ""}>
            {addedDateTitle}
          </th>
          <th className="sorting" hidden={!firstClosureTitle ? "hidden" : ""}>
            {firstClosureTitle}
          </th>
          <th className="sorting" hidden={!finalClosureTitle ? "hidden" : ""}>
            {finalClosureTitle}
          </th>
          <th className="sorting_disabled">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data) => {
          return (
            <tr role="row" key={data.id}>
              <td className="dt-checkboxes-cell" hidden={hidden}>
                <Tooltip
                  placement="left"
                  trigger={["hover"]}
                  overlay={
                    <span className={Style.tooltip}>
                      List Idea Of {data.name}
                    </span>
                  }
                >
                  <button onClick={() => handleViewListIdea(data.id)}>
                    <FontAwesomeIcon icon={faLink} className={Style.icon} />
                  </button>
                </Tooltip>
              </td>
              <td className="sorting_1">
                <p className="m-0 d-inline-block align-middle font-16">
                  {data.name}
                </p>
              </td>
              <td>{data.content}</td>

              <td hidden={!data.cateName ? "hidden" : ""}>{data.cateName}</td>
              <td hidden={!data.addedDate ? "hidden" : ""}>{data.addedDate}</td>
              <td hidden={!data.first_Closure ? "hidden" : ""}>
                {data?.first_Closure}
              </td>
              <td hidden={!data.last_Closure ? "hidden" : ""}>
                {data?.last_Closure}
              </td>
              <td className="table-action">
                <div className="d-flex justify-content-evenly">
                  <button
                    type="button"
                    className="btn btn-primary editEventBtn"
                    id="editEvent"
                    hidden={!edit ? "hidden" : ""}
                    data-id={data.id}
                    onClick={getEventId}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    hidden={!deleteAction ? "hidden" : ""}
                    onClick={handleDelete}
                    data-id={data.id}
                  >
                    {deleteAction}
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;
