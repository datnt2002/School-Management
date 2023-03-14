import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Tags/Input";
import { apiCategory } from "../../api/Api";
import "./category.css";
import "../../components/Tags/input.css";

function CreateNewCategory({ style, handleClose, token }) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleCreateCategory = (e) => {
    e.preventDefault();

    const newCategory = { name, content };

    fetch(apiCategory, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCategory),
    })
      .then((res) => res.json())
      .then((data) => {
        handleClose();
      })
      .catch((err) => navigate("*"))
      .finally(() => {
        setName("");
        setContent("");
      });
  };

  return (
    <>
      <div className="container-fluid create" style={style}>
        <div className="modalOverlay" onClick={handleClose}></div>
        <div className="modalCate">
          <div className="createFormCate">
            <form className="createFormCate_Input">
              <div
                className="createFormCate_Header"
                style={{ marginBottom: "2rem" }}
              >
                <h1>Create New Category</h1>
              </div>
              <div className="mb-3 mt-5">
                <Input
                  label="Name"
                  className="form-control"
                  type="text"
                  onSetState={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3 mt-5">
                <Input
                  label="Content"
                  type="text"
                  className="form-control"
                  onSetState={(e) => {
                    setContent(e.target.value);
                  }}
                />
              </div>
              <div className="btnForm d-flex justify-content-evenly">
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={handleCreateCategory}
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

      {/* <Routes>
        <Route path="/Category" element={<Category />}>
          {" "}
        </Route>
      </Routes> */}
    </>
  );
}

export default CreateNewCategory;
