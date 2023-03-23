import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Tags/Input";
import { apiCategory } from "../../api/Api";
import "./category.css";

function CreateNewCategory({ style, handleClose, token }) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const [errMessage, setErrMessage] = useState();

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
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then(() => {
        setName("");
        setContent("");
        handleClose();
      })
      .catch((err) => {
        err.json().then((err) => {
          let errArray = Object.values(err.errors);
          setErrMessage(errArray);
        });
      });
  };

  return (
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
                value={name}
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
                value={content}
                onSetState={(e) => {
                  setContent(e.target.value);
                }}
              />
            </div>
            {errMessage &&
              errMessage.map((err) => {
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
                onClick={handleCreateCategory}
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

export default CreateNewCategory;
