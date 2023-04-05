import React, { useState, useEffect } from "react";
import Input from "../../components/Tags/Input";
import "./event.css";
import { apiEvent } from "../../api/Api";
import "../../components/Tags/select.css";
import SelectDate from "../../components/Tags/SelectDate";

function EditEvent({ token, style, handleClose, selectEventId }) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [first_Closure, setFirstClosure] = useState("");
  const [last_Closure, setLast_Closure] = useState("");

  const [errMes, setErrMess] = useState();

  //get data by eventId
  useEffect(() => {
    fetch(apiEvent + `/${selectEventId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setContent(data.content);
        setFirstClosure(data.first_Closure);
        setLast_Closure(data.last_Closure);
      })
      .catch((err) => console.log("edit404"));
  }, [token, selectEventId]);

  //handle submit event
  const handleEditEvent = (e) => {
    e.preventDefault();

    const newEditEvent = { name, content, first_Closure };

    fetch(apiEvent + `/${selectEventId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEditEvent),
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then(() => {
        handleClose();
      })
      .catch((err) =>
        err.json().then((err) => {
          let errArray = Object.values(err.errors);
          setErrMess(errArray);
        })
      );
  };

  async function Dategiday(value) {
    await setFirstClosure(value);
    let firstClosure = new Date(value);

    let sevenDay = new Date(
      firstClosure.getTime() + 7 * 24 * 60 * 60 * 1000 + 7 * 60 * 60 * 1000
    );
    let formattedDate = sevenDay.toISOString().slice(0, 16);
    console.log(formattedDate);
    setLast_Closure(formattedDate);
  }

  return (
    <div
      className="container-fluid edit"
      id="edit"
      style={style}
      key={selectEventId}
    >
      <div className="modalOverlay" onClick={handleClose}></div>
      <div className="modalEvent">
        <div className="createFormEvent">
          <form className="createFormEvent_Input">
            <div className="createFormEvent_Header">
              <h1>Edit Event</h1>
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
            <div className="row" style={{ overflow: "hidden" }}>
              <div
                className="col-lg-6 d-flex justify-content-between"
                style={{ width: "100%", paddingBottom:"14px" }}
              >
                <div className="First-closureDate">
                  <span
                    style={{
                      position:"relative",
                      backgroundColor: "white",
                      color: "#999",
                      display: "block",
                      padding: "5px 20px 5px 20px",
                      width: "fit-content",
                      fontWeight: "500",
                      borderRadius:"5px 5px 0 0",
                      border: "1px solid #eee",
                      borderBottom:"1px solid white",
                      zIndex: "100",
                      top: "18%",
                    }}
                  >
                    First Closure Date
                  </span>
                  <SelectDate
                    value={first_Closure}
                    onChange={(e) => Dategiday(e.target.value)}
                  />
                </div>
                <div className="Last-closureDate">
                  <span
                    style={{
                      position:"relative",
                      backgroundColor: "white",
                      color: "#999",
                      display: "block",
                      padding: "5px 18px 5px 20px",
                      width: "fit-content",
                      fontWeight: "500",
                      borderRadius:"5px 5px 0 0",
                      border: "1px solid #eee",
                      borderBottom:"1px solid white",
                      zIndex: "100",
                      top: "18%",
                      left: "28%"
                    }}
                  >
                    Last Closure Date
                  </span>
                  <SelectDate
                    value={last_Closure}
                    disable="true"
                    readOnly
                  />
                </div>
              </div>
            </div>
            {errMes &&
              errMes.map((err) => {
                return (
                  <div>
                    <p style={{ color: "red" }}>{err}</p>
                  </div>
                );
              })}
            <div className="btnForm d-flex justify-content-evenly">
              <button
                type="submit"
                className="btn btn-success"
                onClick={handleEditEvent}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default EditEvent;
