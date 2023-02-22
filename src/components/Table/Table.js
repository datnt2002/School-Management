function Table({
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
          <th className="all dt-checkboxes-cell dt-checkboxes-select-all sorting_disabled">
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
          <td className="dt-checkboxes-cell">
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
            <a href="javascript:void(0);" className="action-icon">
              {/* <i className="mdi mdi-delete"></i> */}
              {edit}
            </a>
            <a href="javascript:void(0);" className="action-icon">
              <i className="fas fa-delete-left"></i>
              {deleteA}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
export default Table;
