import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiEvent } from "../../api/Api";
import Table from "../../components/Table/Table";
import CreateNewEvent from "./CreateNewEvent";
import "./event.css";

function Event() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function handleFocus() {
    setShowModal(true);
  }
  function handleBlur(e) {
    if (!e.relatedTarget || !e.relatedTarget.closest(".modalEvent")) {
      setShowModal(false);
    }
  }
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(apiEvent);
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);

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
                      // to="/Event/CreateNewEvent"
                      className="btn btn-danger mb-2"
                      onFocus={handleFocus}
                      onBlur={handleBlur}
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
                          description="Description"
                          firstClosureTitle="First Closure Date"
                          finalClosureTitle="Final Closure Date"
                          data={data}
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
    {showModal && <CreateNewEvent />}
    </>
  );
}

export default Event;
