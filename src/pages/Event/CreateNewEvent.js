import React, { useState, useEffect } from "react";
import Input from "../../components/Tags/Input";
import Event from "../Event/Event";
import "./event.css";
import { apiCategory, apiEvent } from "../../api/Api";

function CreateNewEvent({ style, handleClose }) {
  const [categories, setCategories] = useState([]);

  const [cateId, setCateId] = useState(0);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [first_Closure, setFirstClosure] = useState("");
  //show list categories
  useEffect(() => {
    fetch(apiCategory)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  //handle submit event
  const handleCreateEvent = (e) => {
    e.preventDefault();

    const newEvent = { name, content, cateId, first_Closure };

    fetch(apiEvent, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEvent),
    })
      .then((res) => res.json())
      .then((data) => {
        handleClose();
      })
      .catch((err) => console.log("cannot Post Event"))
      .finally(() => {
        setName("");
        setContent("");
        setFirstClosure("");
      });
  };

  return (
    <>
      <div className="container-fluid createEvent" style={style}>
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
                <div className="mb-3">
                  <label className="form-label">Category</label>
                  <select
                    className="form-control"
                    onChange={(e) => setCateId(e.target.value)}
                    value={cateId}
                  >
                    <option value="0" key="-1">
                      ---Please enter category---
                    </option>
                    {categories.map((category) => {
                      return (
                        <>
                          <option value={category.id} key={category.id}>
                            {category.name}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </div>
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

                <button onClick={handleClose} className="btn btn-danger">
                  Cancel
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
