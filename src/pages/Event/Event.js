import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiEvent } from "../../api/Api";
import Table from "../../components/Table/Table";
import "./event.css";

function Event() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(apiEvent);
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="col-12">
        <div className="page-title-box">
          <h3 className="page-title">Admin</h3>
        </div>
      </div>
      <div className="tableAdmin">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row mb-2">
                  <div className="col-sm-4">
                    <Link
                      to="/Event/CreateNewEvent"
                      className="btn btn-danger mb-2"
                    >
                      <i className="mdi mdi-plus-circle mr-2"></i>Create Event
                    </Link>
                  </div>
                </div>

                <div className="table-responsive">
                  <div className="dataTables_wrapper dt-bootstrap4 no-footer">
                    <div className="row">
                      <div className="col-sm-12">
                        <Table
                          hidden="hidden"
                          name="Event"
                          description="Category"
                          firstClosureTitle="First Closure Date"
                          finalClosureTitle="Final Closure Date"
                          edit="Edit"
                          data={data}
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
  );
}

export default Event;
