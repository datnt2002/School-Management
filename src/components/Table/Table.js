import "./table.css"
function Table({
  hidden,
  content,
  description,
  addedDate,
  firstClosure,
  finalClosure,
  contentTitle,
  descriptionTitle,
  addedDateTitle,
  edit,
  deleteA,
  firstClosureTitle,
  finalClosureTitle,
}) {
  return (
    <table className="table table-centered w-100 dt-responsive nowrap dataTable no-footer dtr-inline">
      <thead className="thead-light">
        <tr role="row">
          <th className="all dt-checkboxes-cell dt-checkboxes-select-all sorting_disabled_checkB" hidden={hidden}>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input dt-checkboxes"
              />
            </div>
          </th>
          <th className="sorting">{content}</th>
          <th className="sorting">{description}</th>
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
        <tr role="row" className="odd">
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
              <a
                href="apps-ecommerce-products-details.html"
                className="text-body"
              >
                {contentTitle}
              </a>
              <br />
            </p>
          </td>
          <td>{descriptionTitle}</td>
          <td hidden={!addedDate ? "hidden" : ""}>{addedDate}</td>
          <td hidden={!firstClosure ? "hidden" : ""}>{firstClosure}</td>
          <td hidden={!finalClosure ? "hidden" : ""}>{finalClosure}</td>

          <td className="table-action">
            <div className="d-flex justify-content-evenly">
            <button type="button" className="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                </svg>
                {edit}
              </button>
              <button type="button" className="btn btn-danger" hidden={!deleteA ? "hidden" : ""}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                </svg>
                {deleteA}
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
export default Table;
