import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiEvent } from "../../api/Api";
import Table from "../../components/Table/Table";
import CreateNewEvent from "./CreateNewEvent";
import EditEvent from "./EditEvent";
import "./event.css";

function Event({ token }) {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState({ display: "none" });
  const [modal, setModal] = useState(false);

  const [selectEventId, setSelectEventId] = useState(-1);

  const editBtn = document.querySelector(".table-action .editEventBtn");
  const createBtn = document.getElementById("createEvent");
  const modalEditEvent = document.querySelector(".editEvent");
  const modalCreateEvent = document.querySelector(".createEvent");
  function handleOpen(e) {
    setShowModal({
      display: "",
    });
    setModal(true);
    if (e.target === editBtn) {
      modalEditEvent.removeAttribute("hidden", "hidden");
      modalCreateEvent.setAttribute("hidden", "hidden");
    } else if (e.target === createBtn) {
      modalCreateEvent.removeAttribute("hidden", "hidden");
      modalEditEvent.setAttribute("hidden", "hidden");
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
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log("404 r"));
  }, [modal, token]);

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
                        // id="createEvent"
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
                          <Table
                            hidden="hidden"
                            name="Event"
                            content="Name"
                            category="Category"
                            description="Description"
                            firstClosureTitle="First Closure Date"
                            finalClosureTitle="Final Closure Date"
                            data={data}
                            edit="Edit"
                            deleteAction="Delete"
                            apiLink={apiEvent}
                            onSetData={setData}
                            token={token}
                            handleOpen={handleOpen}
                            setSelectEventId={setSelectEventId}
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
      <CreateNewEvent
        style={showModal}
        handleClose={handleClose}
        token={token}
      />
      <EditEvent
        style={showModal}
        handleClose={handleClose}
        token={token}
        selectEventId={selectEventId}
      />
    </>
  );
}

export default Event;
