import { useEffect, useState } from "react";
import { apiAccount } from "../../api/Api";
import CreateAccount from "./CreateAccount";

function Account() {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState({display:"none"});

    function handleOpen() {
        setShowModal({
          display:""
        })
      }
      function handleClose() {
        setShowModal({
          display:"none"
        });
      }

    useEffect(() => {
        fetch(apiAccount, {
            method: "GET",
            
        })
        .then((res) => res.json())
        .then((data) => setData(data));
    },[])
        
    return(
    <>
    <div className="container-fluid tableCateList">
        <div className="tableCate">
          {/* <div className="row">
            <div className="col-12"> */}
              <div className="card">
                <div className="card-body">
                  <div className="mb-4 col-12">
                    <div className="page-title-box">
                      <h1 className="page-title">Account</h1>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-sm-4">
                      <button
                        className="btn btn-danger mb-2"
                        onClick={handleOpen}
                      >
                        <i className="mdi mdi-plus-circle mr-2"></i>Create Account
                      </button>
                    </div>
                  </div>

                  <div className="table-responsive">
                    <div className="dataTables_wrapper dt-bootstrap5 no-footer">
                      <div className="row">
                        <div className="col-sm-12">
                            <table className="table table-centered w-100 dt-responsive nowrap dataTable no-footer dtr-inline">
                                <thead className="thead-light">
                                    <tr role="row">
                                        {/* <th className="all dt-checkboxes-cell dt-checkboxes-select-all sorting_disabled_checkB">
                                            <div className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                className="custom-control-input dt-checkboxes"
                                            />
                                            </div>
                                        </th> */}
                                        <th className="sorting">User Name</th>
                                        <th className="sorting">Email</th>
                                        <th className="sorting">Phone</th>
                                        <th className="sorting">Date of Birth</th>
                                        <th className="sorting">Address</th>
                                        <th className="sorting">Role</th>
                                        <th className="sorting">Department</th>
                                        <th className="sorting_disabled">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((data) => {
                                        return (
                                            <tr role="row" key={data.userID}>
                                                <td className="dt-checkboxes-cell">
                                                    <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input dt-checkboxes"
                                                    />
                                                    </div>
                                                </td>
                                                <td className="sorting_1">
                                                    <p className="m-0 d-inline-block align-middle font-16">
                                                    {data.userName}
                                                    <br />
                                                    </p>
                                                </td>
                                                <td>{data.email}</td>
                                                <td>{data.phone}</td>
                                                <td>{data.dob}</td>
                                                <td>{data.address}</td>
                                                <td>{data.role}</td>
                                                <td>{data.departmentId}</td>
                                                <td className="table-action">
                                                    <div className="d-flex justify-content-evenly">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                    >
                                                        edit
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger"
                                                        // onClick={handleDelete}
                                                        // data-id={data.id}
                                                    >
                                                        Delete
                                                    </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* </div>
          </div> */}
        </div>
      </div>
      <CreateAccount style={showModal} handleClose={handleClose}/>
    </>
    );
}

export default Account;