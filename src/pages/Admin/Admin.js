import { Link } from "react-router-dom";
import Table from "../../components/Table/Table";
import "./admin.css";

function Admin() {
  return (
    <div className="container">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">Admin</h4>
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
                      to="Category/CreateNewCategory"
                      className="btn btn-danger mb-2"
                    >
                      <i className="mdi mdi-plus-circle mr-2"></i>Create Event
                    </Link>
                  </div>
                </div>

                <div className="table-responsive">
                  <div className="dataTables_wrapper dt-bootstrap4 no-footer">
                    <div className="row">
                      <div className="col-sm-12">
                        <Table
                          content="Event"
                          description="Category"
                          firstClosureTitle="First Closure Date"
                          finalClosureTitle="Final Closure Date"
                          contentTitle="Test"
                          descriptionTitle="Game"
                          firstClosure="12/12/12"
                          finalClosure="34/34/34"
                          edit="Edit"
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
  );
}

export default Admin;
