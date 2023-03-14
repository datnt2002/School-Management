import { useEffect, useState } from "react";
import Table from "../../components/Table/Table";
import "./category.css";
import { apiCategory } from "../../api/Api";
import CreateNewCategory from "./CreateNewCategory";
import { Navigate } from "react-router-dom";

function Category({ token }) {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState({ display: "none" });
  const [modal, setModal] = useState(false);

  function handleOpen() {
    setShowModal({
      display: "",
    });
    setModal(true);
  }
  function handleClose() {
    setShowModal({
      display: "none",
    });
    setModal(false);
  }

  useEffect(() => {
    const fetchData = async () => {
      fetch(apiCategory, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((er) => Navigate("/*"));
    };
    fetchData();
  }, [modal, token]);
  //
  return (
    <>
      <div className="container-fluid">
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
                      <button
                        className="btn btn-danger mb-2"
                        onClick={handleOpen}
                      >
                        <i className="mdi mdi-plus-circle mr-2"></i>Create
                        Category
                      </button>
                    </div>
                  </div>

                  <div className="table-responsive">
                    <div className="dataTables_wrapper dt-bootstrap5 no-footer">
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
                            apiLink={apiCategory}
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
      <CreateNewCategory style={showModal} handleClose={handleClose} />
    </>
  );
}
export default Category;
