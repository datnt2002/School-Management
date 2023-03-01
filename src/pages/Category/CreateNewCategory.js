import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Input from "../../components/Tags/Input";
import Category from "./Category";
import { apiCategory } from "../../api/Api";
import "./category.css";
import "../../components/Tags/input.css"

function CreateNewCategory() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  // const addedDate = new Date();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCategory = { name, content };

    fetch(apiCategory, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCategory),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/category");
      })
      .catch((err) => console.log("cannot Post"));
  };

  return (
    <>
      <div className="container-fuild createCate">
        <div className="row">
          <div className="card">
            <div className="mb-4 col-12">
              <h1>Create New Category</h1>
            </div>
            <form>
              <div className="mb-5">
                <Input
                  label="Name"
                  className="form-control"
                  type="text"
                  onSetState={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="mb-5">
                <Input
                  label="Content"
                  type="text"
                  className="form-control"
                  onSetState={(e) => {
                    setContent(e.target.value);
                  }}
                />
              </div>
              <div className="mt-3 d-flex justify-content-evenly">
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <Link to="/Category">
                  <button type="cancel" className="btn btn-danger">
                    Cancel
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/Category" element={<Category />}>
          {" "}
        </Route>
      </Routes>
    </>
  );
}

export default CreateNewCategory;
