import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Input from "../../components/Tags/Input";
import Event from "../Event/Event";
import "./event.css"
import { apiCategory } from "../../api/Api";


function CreateNewEvent() {

  const [categories, setCategories] = useState([])

  useEffect(()=>{
    fetch(apiCategory)
      .then(res=>res.json())
      .then(data=>setCategories(data))
  }, [])

  const handleCreateEvent = (e)=>{
    e.preventDefault()
  } 
  
    return(
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
                  placeholder="title of category"
                  className="form-control"
                />
              </div>
              <div className="row">
                <div className="mb-3 col-4">
                  <label className="form-label">Category</label>
                  <select
                    className="form-control"
                    style={{ width: "30%", textAlign: "center" }}
                  >
                    {categories.map(category=>{
                      return(
                        <option value={category.id} key={category.id}>{category.name}</option>
                      )
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
                    <div className="col-6 justify-content-end">
                      <small>First Closure Date</small>
                      <input type="datetime-local"></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-evenly">
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
                
                <Link className="btn btn-danger" to='/Event'>
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
    )
}
export default CreateNewEvent;