import { Link } from "react-router-dom";

import Table from "../../components/Table/Table";
import "./category.css";
import { apiCategory } from "../../api/Api";
import { useEffect, useState } from "react";

function Category() {
  const [data, setData] = useState([]);

  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${apiCategory}/${data}`);
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, [data]);

  return (
    <>
      <div className="container">
        <div className="col-12">
          <div className="page-title-box">
            <h3 className="page-title">Category</h3>
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
                            hidden="hidden"
                            data={data}
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
