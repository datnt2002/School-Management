import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { apiDownloadAllFiles, apiIdeaByEvent, server } from "../../api/Api";
import "./event.css";

function ListIdea({ token }) {
  const [dataIdea, setDataIdea] = useState([]);

  //useLocation to get state of eventId when navigate
  const location = useLocation();
  const eventId = location.state.eventId;

  const navigate = useNavigate();
  useEffect(() => {
    fetch(apiIdeaByEvent + "/" + eventId, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDataIdea(data);
      })
      .catch(() => {
        console.log("get id by event in ListIdea.js");
      });
  }, [eventId, token]);

  const handleDetail = (id) => {
    navigate("/DetailIdea", { state: { ideaId: id } });
  };

  const handleDownloadAllFiles = () => {
    window.location.href = window.location.href.replace(
      window.location.href,
      apiDownloadAllFiles
    );
  };

  return (
    <div className="tableListIdea">
      <div className="container-fluid ">
        <div className="tableListIdea">
          <div className="card">
            <div className="card-body">
              <div className="mb-4 col-12">
                <div className="page-title-box">
                  <h1 className="page-title">List ideas </h1>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-sm-4">
                  <button
                    className="btn btn-danger mb-2"
                    onClick={handleDownloadAllFiles}
                  >
                    <i className="mdi mdi-plus-circle mr-2"></i>Download All
                    Files
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
                            <th className="sorting">Avatar</th>
                            <th className="sorting">Author</th>
                            <th className="sorting">Title</th>
                            <th className="sorting">Category</th>
                            <th className="sorting">Department</th>
                            <th className="sorting_disabled">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dataIdea.map((dataIdea) => {
                            return (
                              <tr role="row" key={dataIdea.id}>
                                <td>
                                  <img
                                    src={server + dataIdea.avatar}
                                    alt="avatar"
                                    height="40"
                                  />
                                </td>
                                <td>{dataIdea.userName}</td>
                                <td className="sorting_1">
                                  <p className="m-0 d-inline-block align-middle font-16">
                                    {dataIdea.name}
                                    <br />
                                  </p>
                                </td>
                                <td>{dataIdea.categoryName}</td>
                                <td>{dataIdea.departmentName}</td>
                                <td className="table-action">
                                  <div className="d-flex justify-content-evenly">
                                    <button
                                      onClick={() => handleDetail(dataIdea.id)}
                                    >
                                      View Detail
                                    </button>
                                  </div>
                                </td>
                                <td></td>
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
  );
}
export default ListIdea;
