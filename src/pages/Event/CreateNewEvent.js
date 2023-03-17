import React, { useState } from "react";
import Input from "../../components/Tags/Input";
import "./event.css";
import { apiEvent } from "../../api/Api";
import { useNavigate } from "react-router-dom";

function CreateNewEvent({ token, style, handleClose }) {
  //data to post form
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [first_Closure, setFirstClosure] = useState("");

  const navigate = useNavigate();
  //handle submit event
  const handleCreateEvent = (e) => {
    e.preventDefault();

    const newEvent = { name, content, first_Closure };
    fetch(apiEvent, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newEvent),
    })
      .then((res) => {
        res.json();
      })
      .then(() => {
        handleClose();
      })
      .catch(() => navigate("*"))
      .finally(() => {
        setName("");
        setContent("");
        setFirstClosure("");
      });
  };

  return (
    <>
      <div className="container-fluid create" id="create" style={style}>
        <div className="modalOverlay" onClick={handleClose}></div>
        <div className="modalEvent">
          <div className="createFormEvent">
            <form className="createFormEvent_Input">
              <div className="createFormEvent_Header">
                <h1>Create New Event</h1>
              </div>
              <div className="mb-3 mt-5">
                <Input
                  value={name}
                  type="text"
                  label="Title"
                  className="form-control"
                  onSetState={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3 mt-5">
                <Input
                  value={content}
                  type="text"
                  label="Description"
                  className="form-control"
                  onSetState={(e) => setContent(e.target.value)}
                />
              </div>
              <div
                className="mt-3 mb-3 createFormEvent_Select"
                style={{ overflow: "hidden" }}
              >
                <div className="">
                  <label className="form-label">Closure date</label>
                  <div className="">
                    <div className="col-6 justify-content-end">
                      <small>First Closure Date</small>
                      <input
                        value={first_Closure}
                        type="datetime-local"
                        onChange={(e) => setFirstClosure(e.target.value)}
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btnForm d-flex justify-content-evenly">
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={handleCreateEvent}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default CreateNewEvent;
