import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiEvent } from "../../api/Api";
import CreateNewEvent from "../Event/CreateNewEvent";
import EditEvent from "../Event/EditEvent";
import "../Event/event.css";

function EventIdea({ token }) {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState({ display: "none" });
  const [modal, setModal] = useState(false);

  const editBtn = document.querySelector(".table-action .editEventBtn")
  const createBtn = document.getElementById("createEvent")
  const modalEditEvent = document.querySelector(".editEvent")
  const modalCreateEvent = document.querySelector(".createEvent")
  function handleOpen(e) {
    setShowModal({
        display: "",
      });
    if(e.target === editBtn){
      
      modalEditEvent.removeAttribute("hidden","hidden")
      modalCreateEvent.setAttribute("hidden","hidden")
      console.log(editBtn)
    }
    else if(e.target === createBtn){
      modalCreateEvent.removeAttribute("hidden","hidden")
      modalEditEvent.setAttribute("hidden","hidden")
      console.log(createBtn)
    }
  }
  function handleClose() {
    setShowModal({
      display: "none",
    });
    
    
    setModal(false);
  }

  useEffect(() => {
    fetch(apiEvent, {
      headers: !token ? {} : { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log("404 r"));
  }, [modal]);

  return (
    <>
      <div className="container-fluid">
        <div className="tableAdmin">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="mb-4 col-12">
                    <div className="page-title-box">
                      <h1 className="page-title">Event</h1>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-sm-4">
                      <button
                        className="btn btn-danger mb-2"
                        id="createEvent"
                        onClick={handleOpen}
                      >
                        <i className="mdi mdi-plus-circle mr-2"></i>Create Event
                      </button>
                    </div>
                  </div>

                  <div className="table-responsive">
                    <div className="dataTables_wrapper dt-bootstrap4 no-footer">
                      <div className="row">
                        <div className="col-sm-12">
                            <table className="table table-centered w-100 dt-responsive nowrap dataTable no-footer dtr-inline">
                                <thead className="thead-light">
                                    <tr role="row">
                                    <th
                                        className="all dt-checkboxes-cell dt-checkboxes-select-all sorting_disabled_checkBc hidden"
                                    >
                                        <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input dt-checkboxes"
                                        />
                                        </div>
                                    </th>
                                    <th className="sorting">Name</th>
                                    <th className="sorting">description</th>
                                    <th className="sorting">category</th>
                                    <th className="sorting">addedDateTitle</th>
                                    <th className="sorting">firstClosureTitle</th>
                                    <th className="sorting">finalClosureTitle</th>
                                    <th className="sorting_disabled">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((data) => {
                                    return (
                                        <tr role="row" key={data.id}>
                                        <td className="dt-checkboxes-cell" hidden>
                                            <div className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                className="custom-control-input dt-checkboxes"
                                            />
                                            </div>
                                        </td>
                                        <td className="sorting_1">
                                            <p className="m-0 d-inline-block align-middle font-16">
                                            {data.name}
                                            <br />
                                            </p>
                                        </td>
                                        <td>{data.content}</td>

                                        <td>{data.cateName}</td>
                                        <td>{data.addedDate}</td>
                                        <td>
                                            {data?.first_Closure}
                                        </td>
                                        <td>
                                            {data?.last_Closure}
                                        </td>
                                        <td className="table-action">
                                            <div className="d-flex justify-content-evenly">
                                            {/* <EditEvent style={} handleClose={handleClose} token={token} /> */}
                                            <button
                                                type="button"
                                                className="btn btn-primary editEventBtn"
                                                id="editEvent"
                                                // data-id={data.id}
                                                onClick={handleOpen}
                                            >
                                                edit
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                // onClick={handleDelete}
                                                data-id={data.id}
                                            >
                                                deleteAction
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
            </div>
          </div>
        </div>
      </div>
      <CreateNewEvent
        style={showModal}
        handleClose={handleClose}
        token={token}
      />
      <EditEvent
        style={showModal}
        handleClose={handleClose}
      />
    </>
  );
}

export default EventIdea;
