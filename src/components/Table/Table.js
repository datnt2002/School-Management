import "./table.css";
function Table({
  data,
  content,
  description,
  addedDateTitle,
  category,
  firstClosureTitle,
  finalClosureTitle,
  hidden,
  edit,
  onSetData,
  deleteAction,
  apiLink,
  token,
}) {
  const handleDelete = async (e) => {
    e.preventDefault();

    const itemId = e.target.getAttribute("data-id");

    await fetch(apiLink + `/${itemId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    }).catch((error) => console.error("co loi r"));

    fetch(apiLink, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.json())
      .then((data) => onSetData(data));
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const itemId = e.target.getAttribute("data-id");

    await fetch(apiLink + `/${itemId}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
    }).catch((error) => console.error("co loi r"));
  };

  return (
    <table className="table table-centered w-100 dt-responsive nowrap dataTable no-footer dtr-inline">
      <thead className="thead-light">
        <tr role="row">
          <th
            className="all dt-checkboxes-cell dt-checkboxes-select-all sorting_disabled_checkB"
            hidden={hidden}
          >
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input dt-checkboxes"
              />
            </div>
          </th>
          <th className="sorting">{content}</th>
          <th className="sorting">{description}</th>
          <th className="sorting" hidden={!category ? "hidden" : ""}>
            {category}
          </th>
          <th className="sorting" hidden={!addedDateTitle ? "hidden" : ""}>
            {addedDateTitle}
          </th>
          <th className="sorting" hidden={!firstClosureTitle ? "hidden" : ""}>
            {firstClosureTitle}
          </th>
          <th className="sorting" hidden={!finalClosureTitle ? "hidden" : ""}>
            {finalClosureTitle}
          </th>
          <th className="sorting_disabled">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data) => {
          return (
            <tr role="row" key={data.id}>
              <td className="dt-checkboxes-cell" hidden={hidden}>
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

              <td hidden={!data.cateName ? "hidden" : ""}>{data.cateName}</td>
              <td hidden={!data.addedDate ? "hidden" : ""}>{data.addedDate}</td>
              <td hidden={!data.first_Closure ? "hidden" : ""}>
                {data?.first_Closure}
              </td>
              <td hidden={!data.last_Closure ? "hidden" : ""}>
                {data?.last_Closure}
              </td>
              <td className="table-action">
                <div className="d-flex justify-content-evenly">
                  <button
                    type="button"
                    className="btn btn-primary"
                    hidden={!edit ? "hidden" : ""}
                    onClick={handleEdit}
                    data-id={data.id}
                  >
                    {edit}
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    hidden={!deleteAction ? "hidden" : ""}
                    onClick={handleDelete}
                    data-id={data.id}
                  >
                    {deleteAction}
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;
