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
  const [last_Closure, setLast_Closure] = useState("")

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

  // if(!first_Closure){
  //   let firstClosure = new Date(first_Closure);
  //   console.log(firstClosure)
  //   console.log(first_Closure)
  //   let sevenDay = new Date(firstClosure.getTime() + 7 * 24 * 60 * 60 * 1000);
  //   let formattedDate = sevenDay.toISOString().slice(0, 16);
  //   setLast_Closure(formattedDate)
  // }
  
  async function Dategiday(value) {
    await setFirstClosure(value)
    let firstClosure = new Date(value,);
    
    let sevenDay = new Date(firstClosure.getTime() + (7 * 24 * 60 * 60 * 1000)+(7 * 60 * 60 * 1000));
    let formattedDate = sevenDay.toISOString().slice(0, 16);console.log(formattedDate)
    setLast_Closure(formattedDate)
  }

  return (
    <>
      <div className="container-fluid create" style={style}>
        <div className="modalOverlay" onClick={handleClose}></div>
        <div className="modalEvent">
          <div className="createFormEvent">
            <form className="createFormEvent_Input">
              <div className="createFormEvent_Header">
                <h1>Create New Event</h1>
              </div>
              <div className="mb-4">
                <Input
                  value={name}
                  type="text"
                  label="Title"
                  className="form-control"
                  onSetState={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <Input
                  value={content}
                  type="text"
                  label="Description"
                  className="form-control"
                  onSetState={(e) => setContent(e.target.value)}
                />
              </div>
              {/* <div
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
              </div> */}
              <div className="row" style={{ overflow: "hidden" }}>
                <div className="col-lg-6 d-flex justify-content-between" style={{ width:"100%" }}>
                  <div>
                    <span
                      style={{
                        background: "#9fa6b3",
                        color: "white",
                        display: "block",
                        padding: "5px 20px 5px 20px",
                        width: "fit-content",
                        fontWeight: "500",
                      }}
                    >
                      First Closure Date
                    </span>
                    <input
                      value={first_Closure}
                      type="datetime-local"
                      onChange={(e) => Dategiday(e.target.value)}
                      style={{ height: "3.5em", width: "90%" }}
                    ></input>
                  </div>
                  <div>
                    <span
                      style={{
                        background: "#9fa6b3",
                        color: "white",
                        display: "block",
                        padding: "5px 20px 5px 20px",
                        width: "fit-content",
                        fontWeight: "500",
                      }}
                    >
                      First Closure Date
                    </span>
                    <input
                      value={last_Closure}
                      type="datetime-local"
                      // onChange={(e) => setFirstClosure(e.target.value)}
                      style={{ height: "3.5em", width: "auto" }}
                      disable="true"
                    ></input>
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
