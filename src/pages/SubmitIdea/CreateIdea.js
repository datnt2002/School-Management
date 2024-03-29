import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { apiCategory, apiEvent, apiIdea } from "../../api/Api";
import Input from "../../components/Tags/Input";
import "../../components/Tags/select.css";
import "./style.css";
import Style from "../../components/Table/modu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

function CreateIdea({ token, readOnly, dataUser }) {
  const [categories, setCategories] = useState([]);

  //data from apiEvent to show event that user submit to
  const [eventName, setEventName] = useState("");
  const [first_Closure, setFirstClosure] = useState("");
  const [lastClosure, setLastClosure] = useState("");
  const [anonymous, setAnonymous] = useState(false);

  //state of idea form
  const [ideaName, setIdeaName] = useState("");
  const [cateId, setCateId] = useState(0);
  const [ideaContent, setIdeaContent] = useState("");

  //useLocation to get state of eventId when navigate
  const location = useLocation();
  const eventId = location.state.eventId;

  const [errMes, setErrMess] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    fetch(apiCategory, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch(() => {
        console.log("loi khi fetch cate");
      });
  }, [token]);

  //get event detail
  useEffect(() => {
    fetch(apiEvent + "/" + eventId, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setEventName(data.name);
        setFirstClosure(data.first_Closure);
        setLastClosure(data.last_Closure);
      });
  }, [eventId, token]);

  //handle submit event
  const handleCreateIdea = (e) => {
    e.preventDefault();

    const fileField = document.querySelector('input[type="file"]');

    let formData = new FormData();
    formData.append("title", ideaName);
    formData.append("content", ideaContent);
    formData.append("ideaFile", fileField.files[0]);
    formData.append("cId", cateId);
    formData.append("eId", eventId);
    formData.append("uId", dataUser.userId);
    formData.append("IsAnonymous", anonymous);

    console.log(anonymous);
    fetch(apiIdea, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then(() => {
        navigate("/profile");
      })
      .catch((err) =>
        err.json().then((err) => {
          let errMes = Object.values(err.errors);
          setErrMess(errMes);
        })
      );
  };

  // function textarea
  function autoHeight() {
    const textarea = document.querySelector("textArea");
    textarea.addEventListener("keydown", autosize);

    function autosize() {
      setTimeout(function () {
        textarea.style.cssText = "height:30.1rem; padding:5px 10px 0 10px";
        textarea.setAttribute(
          "style",
          `${"height:" + textarea.scrollHeight + "px"}`
        );
      }, 0);
    }
  }

  return (
    <section className="userProfile">
      <div className="container py-5">
        <div className="userProfile_header">
          <h1 style={{ color:"white" }}>Create New Idea</h1>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="card mb-4">
              <div className="d-flex justify-content-between">
                <h1>Your Idea</h1>
                <h3>
                  <Tooltip
                    placement="left"
                    trigger={["hover"]}
                    overlay={
                      <span className={Style.tooltip}>
                        Incognito mode {!anonymous ? "off" : "on"}
                      </span>
                    }
                  >
                    <label>
                      <FontAwesomeIcon
                        icon={!anonymous ? faUser : faUserSecret}
                        style={{ cursor: "pointer" }}
                      />
                      <input
                        type="checkbox"
                        value={anonymous}
                        onChange={(e) => setAnonymous(e.target.checked)}
                        style={{ display: "none" }}
                      />
                    </label>
                  </Tooltip>
                </h3>
              </div>

              <div className="mb-4 mt-4">
                <Input
                  id="title"
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={ideaName}
                  onSetState={(e) => setIdeaName(e.target.value)}
                  label="Title"
                />
              </div>
              <div className="mb-4">
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
                      <option value={category.id} key={category.id}>
                        {category.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="card mb-4">
              <h1>Content</h1>
              <div className="content">
                <textarea
                  placeholder="Write your content ..."
                  className="textArea col-12"
                  onClick={autoHeight}
                  style={{ padding: "5px 10px 0 10px" }}
                  value={ideaContent}
                  onChange={(e) => {
                    setIdeaContent(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="card mb-4">
              <h1>Event</h1>
              <div className="mb-4 mt-4">
                <Input
                  id="event"
                  type="text"
                  name="event"
                  label="Event"
                  disabled="disable"
                  value={eventName}
                  readOnly={readOnly}
                />
              </div>
              <div className="mb-4 mt-4">
                <Input
                  id="firstClosureDate"
                  type="text"
                  name="firstClosureDate"
                  label="First Closure Date"
                  disabled="disable"
                  value={first_Closure}
                  readOnly={readOnly}
                />
              </div>
              <div className="mb-1 mt-4">
                <Input
                  id="finalClosureDate"
                  type="text"
                  name="finalClosureDate"
                  label="Final Closure Date"
                  disabled="disable"
                  value={lastClosure}
                  readOnly={readOnly}
                />
              </div>
            </div>
            <div
              className="form"
              style={{
                backgroundColor: "#fff",
                boxShadow: "0 10px 60px rgb(218, 229, 255)",
                borderRadius: "4px",
              }}
            >
              <span className="form-title">Upload your file</span>
              <p className="form-paragraph">File should be an image</p>
              <label htmlFor="file-input" className="drop-container">
                <span className="drop-title">Drop files here</span>
                <p className="or">or</p>
                <input type="file" id="file-input" accept="*" />
              </label>
            </div>
            {errMes &&
              errMes.map((err) => {
                return (
                  <div>
                    <p style={{ color: "red" }}>{err}</p>
                  </div>
                );
              })}
            <div className="btnSubmitCancel">
              <button className="btnSubmitIdea" onClick={handleCreateIdea}>
                <span className="shadow"></span>
                <span className="edge"></span>
                <span className="front text">Submit</span>
              </button>
              <Link className="btnCancelIdea" to="/AllEvent">
                <span className="shadow"></span>
                <span className="edge"></span>
                <span className="front text">Cancel</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateIdea;
