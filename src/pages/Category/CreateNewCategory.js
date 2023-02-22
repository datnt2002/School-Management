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
                  label="Name"
                  placeholder="Name of category"
                  className="form-control"
                />
              </div>
              <div class="mb-3">
                <Input
                  label="Description"
                  placeholder="Description of category"
                  className="form-control"
                />
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
