import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useRoutes,
} from "react-router-dom";
import { apiEvent, apiIdea } from "../../api/Api";
import Input from "../../components/Tags/Input";
import "../../components/Tags/select.css";
import "../NewsFeed/newsFeed.css";

function CreateIdea({ token }) {
  const [eventName, setEventName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [first_Closure, setFirstClosure] = useState("");
  const [lastClosure, setLastClosure] = useState("");

  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");

  // console.log(cateId);
  const location = useLocation();
  const eventId = location.state.eventId;

  useEffect(() => {
    fetch(apiEvent + "/" + eventId, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setEventName(data.name);
        setCategoryName(data.cateName);
        setFirstClosure(data.first_Closure);
        setLastClosure(data.lastClosure);
      });
  }, [eventId, token]);

  const navigate = useNavigate();
  //handle submit event
  const handleCreateIdea = (e) => {
    e.preventDefault();
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
    <>
      <section className="userProfile">
        <div className="container py-5">
          <div className="userProfile_header">
            <h1>Create New Idea</h1>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="card mb-4">
                {/* lấy name của event */}
                <h1>Your Idea</h1>
                <div>
                  <Input
                    id="title"
                    type="text"
                    name="title"
                    placeholder="Title"
                    // onChange={(e) => setFirstClosure(e.target.value)}
                    label="Title"
                  />
                </div>
                {/* fetch data category */}
                <div
                  className="createFormIdea_Select"
                  style={{ overflow: "hidden" }}
                >
                  <div className="">
                    <label className="form-label">
                      Drop files here or click to upload
                    </label>
                    <div className="">
                      <div className="fileUploadInput">
                        <input
                          type="file"
                          // onChange={(e) => setFirstClosure(e.target.value)}
                        />
                        <button>+</button>
                      </div>
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
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card mb-4">
                <h1>Event</h1>

                <Input
                  id="event"
                  type="text"
                  name="event"
                  label="Event"
                  disabled="disable"
                  value={eventName}
                />
                <Input
                  id="category"
                  type="text"
                  name="category"
                  label="Category"
                  disabled="disable"
                  value={categoryName}
                />
                <Input
                  id="firstClosureDate"
                  type="text"
                  name="firstClosureDate"
                  label="First Closure Date"
                  disabled="disable"
                  value={first_Closure}
                />
                <Input
                  id="finalClosureDate"
                  type="text"
                  name="finalClosureDate"
                  label="Final Closure Date"
                  disabled="disable"
                  value={lastClosure}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CreateIdea;
