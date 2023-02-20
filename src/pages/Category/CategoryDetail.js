function CategoryDetail() {
  return (
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
          <a href="apps-ecommerce-products-details.html" className="text-body">
            Adirondack Chair
          </a>
          <br />
        </p>
      </td>
      <td>Aeron Chairs</td>
      <td>07/07/2018</td>
      <td>
        <span className="badge badge-success">In used</span>
      </td>

      <td className="table-action">
        <a href="javascript:void(0);" className="action-icon">
          <i className="mdi mdi-delete"></i>
        </a>
      </td>
    </tr>
  );
}

export default CategoryDetail;
