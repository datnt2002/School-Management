import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiAccount } from "../../api/Api";
import ComfirmPassword from "../../components/authentication/ComfirmPassword";
import CreateAccount from "./CreateAccount";
import Style from "./account.module.css";
import StyleCard from "../Account/myExp.module.css"
import StylePaginate from "../../components/Pagination/pagination.module.css"
import Loading from "../../components/optional/Loading";
import ReactPaginate from "react-paginate";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";

function Account({ token }) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([]);
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalComfirm, setShowModalComfirm] = useState(false);
  const [modal, setModal] = useState(false);

  //get username to disable
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  function handleOpen() {
    setShowModalCreate(true);
    setModal(true);
  }
  function handleClose() {
    setShowModalCreate(false);
    setShowModalComfirm(false);
    setModal(false);
  }

  useEffect(() => {
    fetch(apiAccount, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .then(setLoading(false))
      .catch(() => {
        navigate("*");
      });
  }, [modal, token]);

  const handleOpenConfirm = (e) => {
    e.preventDefault();
    setShowModalComfirm(true);
    setModal(true);

    const name = e.currentTarget.getAttribute("data-username");
    setUserName(name);
  };

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

  if(loading){
    return <Loading/>
  }

  return (
    <>
      <div className="container-fluid tableAccountList">
        <div className={Style.tableAccount}>
          <div className={`${StyleCard.card} card`}>
            <div className="card-body">
              <div className="mb-4 col-12">
                <div className="page-title-box">
                  <h1 className="page-title">
                    Account{" "}
                    <span>
                      <button
                        className="btn btn-danger mb-2"
                        onClick={handleOpen}
                        style={{ borderRadius: "50%" }}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </span>
                  </h1>
                </div>
              </div>
              <div className="table-responsive">
                <div className="dataTables_wrapper dt-bootstrap5 no-footer">
                  <div className="row">
                    <div className="col-sm-12">
                      <table className="table table-centered w-100 dt-responsive nowrap dataTable no-footer dtr-inline">
                        <thead className="thead-light">
                          <tr role="row">
                            <th className="sorting">User Name</th>
                            <th className="sorting">Email</th>
                            <th className="sorting">Role</th>
                            <th className="sorting">Department</th>
                            <th className="sorting">Status</th>
                            <th className="sorting_disabled">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currenItems.map((data) => {
                            return (
                              <tr role="row" key={data.userId}>
                                <td className="sorting_1">
                                  <p className="m-0 d-inline-block align-middle font-16">
                                    {data.userName}
                                    <br />
                                  </p>
                                </td>
                                <td>{data.email}</td>
                                <td>{data.role}</td>
                                <td>{data.department}</td>
                                <td>{data.status}</td>
                                {data.status !== "Disable" ? (
                                  <td className="table-action">
                                    <div className="d-flex justify-content-evenly">
                                      <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={handleOpenConfirm}
                                        data-username={data.userName}
                                      >
                                        <FontAwesomeIcon
                                          icon={faRectangleXmark}
                                        />
                                      </button>
                                    </div>
                                  </td>
                                ) : (
                                  <td></td>
                                )}
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
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel="< previous"
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

      {showModalCreate && (
        <CreateAccount handleClose={handleClose} token={token} />
      )}
      {showModalComfirm && (
        <ComfirmPassword
          handleClose={handleClose}
          token={token}
          userName={userName}
        />
      )}
    </>
  );
}

export default Account;
