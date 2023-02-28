import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Input from "../../components/Tags/Input";
import Event from "../Event/Event";
import "./event.css";
import { apiCategory, apiEvent } from "../../api/Api";

function CreateNewEvent() {
  const [categories, setCategories] = useState([]);

  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [firstClosure, setFirstClosure] = useState("");

  console.log(category);
  //show list categories
  useEffect(() => {
    fetch(apiCategory)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  //handle submit event
  const handleCreateEvent = (e) => {
    e.preventDefault();

    const newEvent = { name, category, firstClosure };

    fetch(apiEvent, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEvent),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("ok");
      })
      .catch((err) => console.log("cannot Post Event"));
  };

  return (
    <>
      <div className="container createCate">
        <div className="row">
          <div className="col-12">
            <h1>Create New Event</h1>
          </div>
          <div className="card">
            <form>
              <div className="mb-3">
                <Input
                  label="Title"
                  className="form-control"
                  onSetState={(e) => setName(e.target.value)}
                />
              </div>
              <div className="row">
                <div className="mb-3 col-4">
                  <label className="form-label">Category</label>
                  <select
                    className="form-control"
                    style={{ width: "30%", textAlign: "center" }}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    {categories.map((category) => {
                      return (
                        <option value={category.name} key={category.id}>
                          {category.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="mb-3 col-8">
                  <label className="form-label">Closure date</label>
                  <div className="row">
                    <div className="col-6 justify-content-end">
                      <small>First Closure Date</small>
                      <input type="datetime-local"></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-evenly">
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={handleCreateEvent}
                >
                  Submit
                </button>

                <Link className="btn btn-danger" to="/Event">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/Event" element={<Event />}>
          {" "}
        </Route>
      </Routes>
    </>
  );
}
export default CreateNewEvent;
