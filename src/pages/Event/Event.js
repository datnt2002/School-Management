import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { apiEvent } from "../../api/Api";
import Table from "../../components/Table/Table";
import Pagination from "../../components/Pagination/Pagination";

import CreateNewEvent from "./CreateNewEvent";
import EditEvent from "./EditEvent";
import "./event.css";

function Event({ token }) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([]);
  const [showModalEdit, setShowModalEdit] = useState({ display: "none" });
  const [showModalCreate, setShowModalCreate] = useState({ display: "none" });
  const [modal, setModal] = useState(false);

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(7);
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);
  function Paginate(pageNumber){
    setCurrentPage(pageNumber)
  }

  const [selectEventId, setSelectEventId] = useState(-1);

  function handleOpenEdit() {
    setShowModalEdit({
      display: "",
    });
    setModal(true);
  }
  function handleOpenCreate() {
    setShowModalCreate({
      display: "",
    });

    setModal(true);
  }
  function handleClose() {
    setShowModalCreate({
      display: "none",
    });
    setShowModalEdit({
      display: "none",
    });
    setModal(false);
  }

  useEffect(() => {
    fetch(apiEvent,{
      headers: { Authorization: `Bearer ${token}` },
    })
      // .then(setLoading(true))
      .then((res) => res.json())
      .then((data) => setData(data))
      // .then(setLoading(false))
      .catch(() => console.log("404 r"));
  }, [modal, token]);

  if(loading){
    return <h2>Loading...</h2>
  }

  return (
    <>
      <div className="container-fluid">
        <div className="tableAdmin">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="page-title-box">
                    
                      <h1 className="page-title">Event <span>
                      <button
                        className="btn btn-danger mb-2"
                        id="createEvent"
                        onClick={handleOpenCreate}
                        style={{ borderRadius:"50%" }}
                      >
                        <FontAwesomeIcon icon={faPlus}/>
                      </button>
                    </span></h1>
                    
                    
                  </div>
                  <div className="table-responsive">
                    <div className="dataTables_wrapper dt-bootstrap4 no-footer">
                      <div className="row">
                        <div className="col-sm-12">
                          <Table
                            // hidden="hidden"
                            name="Event"
                            content="Name"
                            description="Description"
                            firstClosureTitle="First Closure Date"
                            finalClosureTitle="Final Closure Date"
                            data={currentData}
                            edit="Edit"
                            apiLink={apiEvent}
                            onSetData={setData}
                            token={token}
                            handleOpen={handleOpenEdit}
                            setSelectEventId={setSelectEventId}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Pagination dataPerPage={dataPerPage} totalData={data.length} paginate={Paginate} currentPage={currentPage}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CreateNewEvent
        style={showModalCreate}
        handleClose={handleClose}
        token={token}
      />
      <EditEvent
        style={showModalEdit}
        handleClose={handleClose}
        token={token}
        selectEventId={selectEventId}
      />
    </>
  );
}

export default Event;
