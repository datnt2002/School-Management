import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { apiCategory, apiEvent, apiIdea } from "../../api/Api";
import Input from "../../components/Tags/Input";
import "../../components/Tags/select.css";
import "../NewsFeed/newsFeed.css";

function CreateIdea({ token, readOnly, dataUser }) {
  const [categories, setCategories] = useState([]);

  //data from apiEvent to show event that user submit to
  const [eventName, setEventName] = useState("");
  const [first_Closure, setFirstClosure] = useState("");
  const [lastClosure, setLastClosure] = useState("");

  //state of idea form
  const [ideaName, setIdeaName] = useState("");
  const [cateId, setCateId] = useState(0);
  const [ideaContent, setIdeaContent] = useState("");

  //useLocation to get state of eventId when navigate
  const location = useLocation();
  const eventId = location.state.eventId;

  // const navigate = useNavigate();

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

    fetch(apiIdea, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("after", data);
      })
      .catch(() => console.log("k post dc idea"));
  };

  // function textarea
  function autoHeight() {
    const textarea = document.querySelector("textArea");
    textarea.addEventListener("keydown", autosize);

    function autosize() {
      setTimeout(function () {
        textarea.style.cssText = "height:11.8rem; padding:0";
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
          <h1>Create New Idea</h1>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="card mb-4">
              <h1>Your Idea</h1>
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
              <div
                className="createFormIdea_Select mb-4 mt-1"
                style={{ overflow: "hidden" }}
              >
                <label className="form-label">
                  Drop files here or click to upload
                </label>
                <div className="">
                  <div className="fileUploadInput">
                    <input
                      type="file"
                      // value={ideaFile}
                      // onChange={(e) => setIdeaFile(e.target.value)}
                    />
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-4">
              <h1>Content</h1>
              <div className="content">
                <textarea
                  placeholder="Tạm thế css sau"
                  className="textArea col-12"
                  onClick={autoHeight}
                  style={{ height: "11.7rem", resize: "none" }}
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
              className="card"
              style={{ width: "100%", height: "39%", display: "flex" }}
            >
              <button onClick={handleCreateIdea} style={{ margin: "auto" }}>
                Submit Idea
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateIdea;
