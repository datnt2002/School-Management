import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { apiEvent } from "../../api/Api";
import Table from "../../components/Table/Table";
import Pagination from "../../components/Pagination/Pagination";
import ReactPaginate from "react-paginate";
import CreateNewEvent from "./CreateNewEvent";
import EditEvent from "./EditEvent";
import "./event.css";
import StylePaginate from "../../components/Pagination/pagination.module.css"
import Loading from "../../components/optional/Loading";


function Event({ token }) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([]);
  const [showModalEdit, setShowModalEdit] = useState({ display: "none" });
  const [showModalCreate, setShowModalCreate] = useState({ display: "none" });
  const [modal, setModal] = useState(false);

  //paginate
  const [currenItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffSet, setItemOffSet] = useState(0);
  const itemPerPage = 7;
  useEffect(() => {
    const endOffSet = itemOffSet + itemPerPage;
    setCurrentItems(data.slice(itemOffSet, endOffSet));
    setPageCount(Math.ceil(data.length / itemPerPage));
  }, [itemOffSet, itemPerPage, data]);
  function handlePageClick(e){
    const newOffSet = (e.selected * itemPerPage) % data.length;
    setItemOffSet(newOffSet);
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
      .then((res) => res.json())
      .then((data) => setData(data))
      .then(setLoading(false))
      .catch(() => console.log("404 r"));
  }, [modal, token]);

  if(loading){
    return <Loading/>
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
                    <h1 className="page-title">
                      Event{" "}
                      <span>
                        <button
                          className="btn btn-danger mb-2"
                          id="createEvent"
                          onClick={handleOpenCreate}
                          style={{ borderRadius: "50%" }}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </span>
                    </h1>
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
                            data={currenItems}
                            edit="Edit"
                            apiLink={apiEvent}
                            onSetData={setData}
                            token={token}
                            handleOpen={handleOpenEdit}
                            setSelectEventId={setSelectEventId}
                            path="/ListIdea"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <Pagination dataPerPage={dataPerPage} totalData={data.length} paginate={Paginate} currentPage={currentPage}/> */}
                <ReactPaginate
                  breakLabel="..."
                  nextLabel=">"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  pageCount={pageCount}
                  previousLabel="<"
                  renderOnZeroPageCount={null}
                  containerClassName={StylePaginate.pagination}
                  pageLinkClassName={StylePaginate.page_num}
                  previousLinkClassName={StylePaginate.page_num}
                  nextLinkClassName={StylePaginate.page_num}
                  activeClassName={StylePaginate.active}
                />
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
