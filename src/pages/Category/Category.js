function Category() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div className="row mb-2">
              <div className="col-sm-4">
                <a href="javascript:void(0);" className="btn btn-danger mb-2">
                  <i className="mdi mdi-plus-circle mr-2"></i>Category
                </a>
              </div>
            </div>

            <div className="table-responsive">
              <div
                id="products-datatable_wrapper"
                className="dataTables_wrapper dt-bootstrap4 no-footer"
              >
                <div className="row">
                  <div className="col-sm-12">
                    <table
                      className="table table-centered w-100 dt-responsive nowrap dataTable no-footer dtr-inline"
                      id="products-datatable"
                      role="grid"
                      aria-describedby="products-datatable_info"
                    >
                      <thead className="thead-light">
                        <tr role="row">
                          <th className="all dt-checkboxes-cell dt-checkboxes-select-all sorting_disabled">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input dt-checkboxes"
                              />
                              <label className="custom-control-label">
                                &nbsp;
                              </label>
                            </div>
                          </th>
                          <th
                            className="all sorting_asc"
                            tabindex="0"
                            aria-controls="products-datatable"
                            rowspan="1"
                            colspan="1"
                            aria-sort="ascending"
                            aria-label="Product: activate to sort column descending"
                          >
                            Product
                          </th>
                          <th
                            className="sorting"
                            tabindex="0"
                            aria-controls="products-datatable"
                            rowspan="1"
                            colspan="1"
                            aria-label="Category: activate to sort column ascending"
                          >
                            Category
                          </th>
                          <th
                            className="sorting"
                            tabindex="0"
                            aria-controls="products-datatable"
                            rowspan="1"
                            colspan="1"
                            aria-label="Added Date: activate to sort column ascending"
                          >
                            Added Date
                          </th>
                          <th
                            className="sorting"
                            tabindex="0"
                            aria-controls="products-datatable"
                            rowspan="1"
                            colspan="1"
                            aria-label="Price: activate to sort column ascending"
                          >
                            Price
                          </th>
                          <th
                            className="sorting"
                            tabindex="0"
                            aria-controls="products-datatable"
                            rowspan="1"
                            colspan="1"
                            aria-label="Quantity: activate to sort column ascending"
                          >
                            Quantity
                          </th>
                          <th
                            className="sorting"
                            tabindex="0"
                            aria-controls="products-datatable"
                            rowspan="1"
                            colspan="1"
                            aria-label="Status: activate to sort column ascending"
                          >
                            Status
                          </th>
                          <th
                            className="sorting_disabled"
                            rowspan="1"
                            colspan="1"
                            aria-label="Action"
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="odd">
                          <td className="dt-checkboxes-cell" tabindex="0">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input dt-checkboxes"
                              />
                              <label className="custom-control-label">
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td className="sorting_1">
                            <img
                              src="assets/images/products/product-6.jpg"
                              alt="contact-img"
                              title="contact-img"
                              className="rounded mr-3"
                              height="48"
                            />
                            <p className="m-0 d-inline-block align-middle font-16">
                              <a
                                href="apps-ecommerce-products-details.html"
                                className="text-body"
                              >
                                Adirondack Chair
                              </a>
                              <br />
                              <span className="text-warning mdi mdi-star"></span>
                              <span className="text-warning mdi mdi-star"></span>
                              <span className="text-warning mdi mdi-star"></span>
                              <span className="text-warning mdi mdi-star"></span>
                              <span className="text-warning mdi mdi-star"></span>
                            </p>
                          </td>
                          <td>Aeron Chairs</td>
                          <td>07/07/2018</td>
                          <td>$65.94</td>
                          <td>652</td>
                          <td>
                            <span className="badge badge-success">Active</span>
                          </td>

                          <td className="table-action">
                            <a
                              href="javascript:void(0);"
                              className="action-icon"
                            >
                              {" "}
                              <i className="mdi mdi-eye"></i>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="action-icon"
                            >
                              {" "}
                              <i className="mdi mdi-square-edit-outline"></i>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="action-icon"
                            >
                              {" "}
                              <i className="mdi mdi-delete"></i>
                            </a>
                          </td>
                        </tr>
                        <tr role="row" className="even">
                          <td tabindex="0" className="dt-checkboxes-cell">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input dt-checkboxes"
                              />
                              <label className="custom-control-label">
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td className="sorting_1">
                            <img
                              src="assets/images/products/product-1.jpg"
                              alt="contact-img"
                              title="contact-img"
                              className="rounded mr-3"
                              height="48"
                            />
                            <p className="m-0 d-inline-block align-middle font-16">
                              <a
                                href="apps-ecommerce-products-details.html"
                                className="text-body"
                              >
                                Amazing Modern Chair
                              </a>
                              <br />
                              <span className="text-warning mdi mdi-star"></span>
                              <span className="text-warning mdi mdi-star"></span>
                              <span className="text-warning mdi mdi-star"></span>
                              <span className="text-warning mdi mdi-star"></span>
                              <span className="text-warning mdi mdi-star"></span>
                            </p>
                          </td>
                          <td>Aeron Chairs</td>
                          <td>09/12/2018</td>
                          <td>$148.66</td>

                          <td>254</td>
                          <td>
                            <span className="badge badge-success">Active</span>
                          </td>

                          <td className="table-action">
                            <a
                              href="javascript:void(0);"
                              className="action-icon"
                            >
                              {" "}
                              <i className="mdi mdi-eye"></i>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="action-icon"
                            >
                              {" "}
                              <i className="mdi mdi-square-edit-outline"></i>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="action-icon"
                            >
                              {" "}
                              <i className="mdi mdi-delete"></i>
                            </a>
                          </td>
                        </tr>
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
  );
}
export default Category;
