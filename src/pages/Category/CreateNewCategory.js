import { Routes, Route, Link } from "react-router-dom";
import Input from "../../components/Tags/Input";
import Category from "./Category";
import "./category.css";

function CreateNewCategory() {
  return (
    <>
      <div className="container createCate">
        <div className="row">
          <div className="col-12">
            <h1>Create New Category</h1>
          </div>
          <div className="card">
            <form>
              <div class="mb-3">
                <Input
                  label="Title"
                  placeholder="title of category"
                  className="form-control"
                />
              </div>
              <div className="row">
                <div class="mb-3 col-4">
                  <label className="form-label">Category</label>
                  <select
                    name=""
                    id=""
                    className="form-control"
                    style={{ width: "30%", textAlign: "center" }}
                  >
                    <option value="">Category</option>
                    <option value="1">Volvo</option>
                    <option value="2">Saab</option>
                    <option value="3">Mercedes</option>
                    <option value="4">Audi</option>
                  </select>
                </div>
                <div class="mb-3 col-8">
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
                <button type="submit" class="btn btn-success">
                  Submit
                </button>
                <button type="cancel" class="btn btn-danger">
                  Cancel
                </button>
              </div>
            </form>
            <Link to="/Category" type="button">
              Back to Category
            </Link>
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
