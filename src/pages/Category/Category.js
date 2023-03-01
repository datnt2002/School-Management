import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import Table from "../../components/Table/Table";
import "./category.css";
import { apiCategory } from "../../api/Api";

function Category() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(apiCategory)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div className="container">
        <div className="tableCate">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="mb-4 col-12">
                    <div className="page-title-box">
                      <h1 className="page-title">Category</h1>
                    </div>
                  </div>
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
                            hidden="hidden"
                            data={data}
                            onSetData={setData}
                            deleteAction="Delete"
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
