import { Link, Route, Routes } from "react-router-dom";
import CategoryDetail from "./CategoryDetail";

function Category() {
  return (
    <>
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
                    <i className="mdi mdi-plus-circle mr-2"></i>Create Category
                  </Link>
                </div>
              </div>

              <div className="table-responsive">
                <div className="dataTables_wrapper dt-bootstrap4 no-footer">
                  <div className="row">
                    <div className="col-sm-12">
                      <table className="table table-centered w-100 dt-responsive nowrap dataTable no-footer dtr-inline">
                        <thead className="thead-light">
                          <tr role="row">
                            <th className="all dt-checkboxes-cell dt-checkboxes-select-all sorting_disabled">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input dt-checkboxes"
                                />
                              </div>
                            </th>
                            <th className="all sorting_asc">Idea</th>
                            <th className="sorting">Category</th>
                            <th className="sorting">Added Date</th>
                            <th className="sorting">Status</th>
                            <th className="sorting_disabled">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <CategoryDetail />
                          <CategoryDetail />
                          <CategoryDetail />
                          <CategoryDetail />
                          <CategoryDetail />
                          <CategoryDetail />
                        </tbody>
                      </table>
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
