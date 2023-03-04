import Input from "../../components/Tags/Input";
import { apiDepartment } from "../../api/Api"; //>????
import { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./account.css";
function CreateAccount({style, handleClose}) {
    const [dataDepartment, setDataDepartment] = useState([]);
    useEffect(() => {
        fetch(apiDepartment, {
            method: "GET",

        })
        .then((res) => res.json())
        .then((data) => setData(data));
    },[])

    return(
        <>
        <div className="container-fluid createCate" style={style}>
            <div className="modalOverlay" onClick={handleClose}></div>
            <div className="modalCate">
            <div className="createFormCate">
                <div className="createFormCate_Header">
                <h1>Create New Category</h1>
                </div>
                <form className="createFormCate_Input">
                <div className="mb-5">
                    <Input
                        label="User Name"
                        className="form-control"
                        type="text"
                        // onSetState={(e) => {
                        //     setName(e.target.value);
                        // }}
                    />
                </div>
                <div className="mb-5">
                    <Input
                        label="Email"
                        type="text"
                        className="form-control"
                    //     onSetState={(e) => {
                    //         setContent(e.target.value);
                    //     }}
                    />
                </div>
                <div className="mb-5">
                    <Input
                        label="Phone"
                        type="text"
                        className="form-control"
                    //     onSetState={(e) => {
                    //         setContent(e.target.value);
                    //     }}
                    />
                </div>
                <div className="mb-5">
                    <Input
                        label="Address"
                        type="text"
                        className="form-control"
                    //     onSetState={(e) => {
                    //         setContent(e.target.value);
                    //     }}
                    />
                </div>
                <div className="mb-5">
                    <Input
                        label="Date of Birth"
                        type="text"
                        className="form-control"
                    //     onSetState={(e) => {
                    //         setContent(e.target.value);
                    //     }}
                    />
                </div>
                <div className="mb-5">
                    <Input
                        label="Password"
                        type="password"
                        className="form-control"
                    //     onSetState={(e) => {
                    //         setContent(e.target.value);
                    //     }}
                    />
                </div>
                <div className="mb-5">
                    <Input
                        label="Comfirm Password"
                        type="password"
                        className="form-control"
                    //     onSetState={(e) => {
                    //         setContent(e.target.value);
                    //     }}
                    />
                </div>
                <div className="mb-5">
                    <label className="form-label">Department</label>
                    <select
                      className="form-control"
                    //   onChange={(e) => setCateId(e.target.value)}
                    >
                      <option value="0" key="0">---Please enter department---</option>
                      {data.map((data) => {
                        return (
                          <>
                            <option value={data.id} key={data.depId}>
                              {data.name}
                            </option>
                          </>
                        );
                      })}
                    </select>
                </div>
                <div className="mb-5">
                    <label className="form-label">Department</label>
                    <select
                      className="form-control"
                    //   onChange={(e) => setCateId(e.target.value)}
                    >
                      <option value="0" key="0">---Please enter department---</option>
                      {data.map((data) => {
                        return (
                          <>
                            <option value={data.id} key={data.depId}>
                              {data.name}
                            </option>
                          </>
                        );
                      })}
                    </select>
                </div>
                <div className="btnForm mt-3 d-flex justify-content-evenly">
                    <button
                    type="submit"
                    className="btn btn-success"
                    // onClick={handleSubmit}
                    >
                    Submit
                    </button>
                    <Link to="/Category">
                    <button type="cancel" className="btn btn-danger">
                        Cancel
                    </button>
                    </Link>
                </div>
                </form>
            </div>
            </div>
        </div>

      {/* <Routes>
        <Route path="/Category" element={<Category />}>
          {" "}
        </Route>
      </Routes> */}
        </>
    );
}

export default CreateAccount;