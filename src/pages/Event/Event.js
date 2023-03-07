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
    fetch(apiEvent, {
      headers: !token ? {} : { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log("404 r"));
  }, [modal]);

  return (
    <>
      <div className="container">
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
      {/* <EditEvent
        style={showModal}
        handleClose={handleClose}
      /> */}
    </>
  );
}

export default Event;
