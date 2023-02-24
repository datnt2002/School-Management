import { Link } from "react-router-dom";
import Table from "../../components/Table/Table";
import "./category.css";

function Category() {
  fetch("https://localhost:7069/api/category")
    .then((res) => res.json())
    .then((data) => console.log(data));

  return (
    <>
      <div className="container">
        <div class="col-12">
          <div class="page-title-box">
            <h3 class="page-title">Category</h3>
          </div>
        </div>
        <div className="tableCate">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="row mb-2">
                    <div className="col-sm-4">
                      <Link
                        to="/Category/CreateNewCategory"
                        className="btn btn-danger mb-2"
                      >
                        <i className="mdi mdi-plus-circle mr-2"></i>Create
                        Category
                      </Link>
                    </div>
                  </div>

                  <div className="table-responsive">
                    <div className="dataTables_wrapper dt-bootstrap4 no-footer">
                      <div className="row">
                        <div className="col-sm-12">
                          <Table
                            content="Category"
                            description="Description"
                            addedDateTitle="Added Date"
                            contentTitle="Adirondack Chair"
                            descriptionTitle="Aeron Chairs"
                            addedDate="12/12/12/"
                            edit="Edit"
                            deleteA="Delete"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Category;
