function Category(){
    return(
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <div className="row mb-2">
                            <div className="col-sm-4">
                                <a href="javascript:void(0);" className="btn btn-danger mb-2"><i className="mdi mdi-plus-circle mr-2"></i>Category</a>
                            </div>
                        </div>

                        <div className="table-responsive">
                            <div id="products-datatable_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer"><div className="row"><div className="col-sm-12 col-md-6"><div className="dataTables_length" id="products-datatable_length"><label>Display <select className="custom-select custom-select-sm ml-1 mr-1"><option value="5">5</option><option value="10">10</option><option value="20">20</option><option value="-1">All</option></select> products</label></div></div><div className="col-sm-12 col-md-6"><div id="products-datatable_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control form-control-sm" placeholder="" aria-controls="products-datatable"/></label></div></div></div><div className="row"><div className="col-sm-12"><table className="table table-centered w-100 dt-responsive nowrap dataTable no-footer dtr-inline" id="products-datatable" role="grid" aria-describedby="products-datatable_info">
                                <thead className="thead-light">
                                    <tr role="row">
                                        <th className="all dt-checkboxes-cell dt-checkboxes-select-all sorting_disabled" rowspan="1" colspan="1" data-col="0" aria-label=" &amp;nbsp;">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input dt-checkboxes"/>
                                                <label className="custom-control-label">&nbsp;</label>
                                            </div>
                                        </th>
                                        <th className="all sorting_asc" tabindex="0" aria-controls="products-datatable" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Product: activate to sort column descending">
                                            Product
                                        </th>
                                        <th className="sorting" tabindex="0" aria-controls="products-datatable" rowspan="1" colspan="1" aria-label="Category: activate to sort column ascending">
                                            Category
                                        </th>
                                        <th className="sorting" tabindex="0" aria-controls="products-datatable" rowspan="1" colspan="1" aria-label="Added Date: activate to sort column ascending">
                                            Added Date</th>
                                        <th className="sorting" tabindex="0" aria-controls="products-datatable" rowspan="1" colspan="1" aria-label="Price: activate to sort column ascending">
                                            Price
                                        </th>
                                        <th className="sorting" tabindex="0" aria-controls="products-datatable" rowspan="1" colspan="1" aria-label="Quantity: activate to sort column ascending">
                                            Quantity
                                        </th>
                                        <th className="sorting" tabindex="0" aria-controls="products-datatable" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending">
                                            Status
                                        </th>
                                        <th className="sorting_disabled" rowspan="1" colspan="1" aria-label="Action">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                <tr role="row" className="odd">
                                        <td className="dt-checkboxes-cell" tabindex="0"><div className="custom-control custom-checkbox"><input type="checkbox" className="custom-control-input dt-checkboxes"/><label className="custom-control-label">&nbsp;</label></div></td>
                                        <td className="sorting_1">
                                            <img src="assets/images/products/product-6.jpg" alt="contact-img" title="contact-img" className="rounded mr-3" height="48"/>
                                            <p className="m-0 d-inline-block align-middle font-16">
                                                <a href="apps-ecommerce-products-details.html" className="text-body">Adirondack Chair</a>
                                                <br/>
                                                <span className="text-warning mdi mdi-star"></span>
                                                <span className="text-warning mdi mdi-star"></span>
                                                <span className="text-warning mdi mdi-star"></span>
                                                <span className="text-warning mdi mdi-star"></span>
                                                <span className="text-warning mdi mdi-star"></span>
                                            </p>
                                        </td>
                                        <td>
                                            Aeron Chairs
                                        </td>
                                        <td>
                                            07/07/2018
                                        </td>
                                        <td>
                                            $65.94
                                        </td>

                                        <td>
                                            652
                                        </td>
                                        <td>
                                            <span className="badge badge-success">Active</span>
                                        </td>

                                        <td className="table-action">
                                            <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-eye"></i></a>
                                            <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></a>
                                            <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-delete"></i></a>
                                        </td>
                                    </tr><tr role="row" className="even">
                                        <td tabindex="0" className="dt-checkboxes-cell"><div className="custom-control custom-checkbox"><input type="checkbox" className="custom-control-input dt-checkboxes"/><label className="custom-control-label">&nbsp;</label></div></td>
                                        <td className="sorting_1">
                                            <img src="assets/images/products/product-1.jpg" alt="contact-img" title="contact-img" className="rounded mr-3" height="48"/>
                                            <p className="m-0 d-inline-block align-middle font-16">
                                                <a href="apps-ecommerce-products-details.html" className="text-body">Amazing Modern Chair</a>
                                                <br/>
                                                <span className="text-warning mdi mdi-star"></span>
                                                <span className="text-warning mdi mdi-star"></span>
                                                <span className="text-warning mdi mdi-star"></span>
                                                <span className="text-warning mdi mdi-star"></span>
                                                <span className="text-warning mdi mdi-star"></span>
                                            </p>
                                        </td>
                                        <td>
                                            Aeron Chairs
                                        </td>
                                        <td>
                                            09/12/2018
                                        </td>
                                        <td>
                                            $148.66
                                        </td>

                                        <td>
                                            254
                                        </td>
                                        <td>
                                            <span className="badge badge-success">Active</span>
                                        </td>

                                        <td className="table-action">
                                            <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-eye"></i></a>
                                            <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></a>
                                            <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-delete"></i></a>
                                        </td>
                                    </tr><tr role="row" className="odd">
                                        <td className="dt-checkboxes-cell" tabindex="0"><div className="custom-control custom-checkbox"><input type="checkbox" className="custom-control-input dt-checkboxes"/><label className="custom-control-label">&nbsp;</label></div></td>
                                        <td className="sorting_1">
                                            <img src="assets/images/products/product-2.jpg" alt="contact-img" title="contact-img" className="rounded mr-3" height="48"/>
                                            <p className="m-0 d-inline-block align-middle font-16">
                                                <a href="apps-ecommerce-products-details.html" className="text-body">Bean Bag Chair</a>
                                                <br/>
                                                <span className="text-warning mdi mdi-star"></span>
                                                <span className="text-warning mdi mdi-star"></span>
                                                <span className="text-warning mdi mdi-star"></span>
                                                <span className="text-warning mdi mdi-star"></span>
                                                <span className="text-warning mdi mdi-star"></span>
                                            </p>
                                        </td>
                                        <td>
                                            Wooden Chairs
                                        </td>
                                        <td>
                                            06/30/2018
                                        </td>
                                        <td>
                                            $99
                                        </td>

                                        <td>
                                            1,021
                                        </td>
                                        <td>
                                            <span className="badge badge-danger">Deactive</span>
                                        </td>
                                        <td className="table-action">
                                            <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-eye"></i></a>
                                            <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></a>
                                            <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-delete"></i></a>
                                        </td>
                                    </tr><tr role="row" className="even">
                                        <td tabindex="0" className="dt-checkboxes-cell"><div className="custom-control custom-checkbox"><input type="checkbox" className="custom-control-input dt-checkboxes"/><label className="custom-control-label">&nbsp;</label></div></td>
                                        <td className="sorting_1">
                                            <img src="assets/images/products/product-4.jpg" alt="contact-img" title="contact-img" className="rounded mr-3" height="48"/>
                                            <p className="m-0 d-inline-block align-middle font-16">
                                                <a href="apps-ecommerce-products-details.html" className="text-body">Biblio Plastic Armchair</a>
                                                <br/>
                                                <span className="text-warning mdi mdi-star"></span>
                                                <span className="text-warning mdi mdi-star"></span>
                                                <span className="text-warning mdi mdi-star"></span>
                                                <span className="text-warning mdi mdi-star"></span>
                                                <span className="text-warning mdi mdi-star-half"></span>
                                            </p>
                                        </td>
                                        <td>
                                            Wooden Chairs
                                        </td>
                                        <td>
                                            09/08/2018
                                        </td>
                                        <td>
                                            $8.99
                                        </td>

                                        <td>
                                            1,874
                                        </td>
                                        <td>
                                            <span className="badge badge-success">Active</span>
                                        </td>
                                        <td className="table-action">
                                            <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-eye"></i></a>
                                            <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></a>
                                            <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-delete"></i></a>
                                        </td>
                                    </tr><tr role="row" className="odd">
                                        <td className="dt-checkboxes-cell" tabindex="0"><div className="custom-control custom-checkbox"><input type="checkbox" className="custom-control-input dt-checkboxes"/><label className="custom-control-label">&nbsp;</label></div></td>
                                        <td className="sorting_1">
                                            <img src="assets/images/products/product-3.jpg" alt="contact-img" title="contact-img" className="rounded mr-3" height="48"/>
                                            <p className="m-0 d-inline-block align-middle font-16">
                                                <a href="apps-ecommerce-products-details.html" className="text-body">Bootecos Plastic Armchair</a>
                                                <br/>
                                                <span className="text-warning mdi mdi-star"></span>
                                                <span className="text-warning mdi mdi-star"></span>
                                                <span className="text-warning mdi mdi-star"></span>
                                                <span className="text-warning mdi mdi-star"></span>
                                                <span className="text-warning mdi mdi-star-half"></span>
                                            </p>
                                        </td>
                                        <td>
                                            Wing Chairs
                                        </td>
                                        <td>
                                            07/15/2018
                                        </td>
                                        <td>
                                            $148.66
                                        </td>

                                        <td>
                                            485
                                        </td>
                                        <td>
                                            <span className="badge badge-danger">Deactive</span>
                                        </td>

                                        <td className="table-action">
                                            <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-eye"></i></a>
                                            <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></a>
                                            <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-delete"></i></a>
                                        </td>
                                    </tr></tbody>
                            </table></div></div><div className="row"><div className="col-sm-12 col-md-5"><div className="dataTables_info" id="products-datatable_info" role="status" aria-live="polite">Showing products 1 to 5 of 12</div></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="products-datatable_paginate"><ul className="pagination pagination-rounded"><li className="paginate_button page-item previous disabled" id="products-datatable_previous"><a href="#" aria-controls="products-datatable" data-dt-idx="0" tabindex="0" className="page-link"><i className="mdi mdi-chevron-left"></i></a></li><li className="paginate_button page-item active"><a href="#" aria-controls="products-datatable" data-dt-idx="1" tabindex="0" className="page-link">1</a></li><li className="paginate_button page-item "><a href="#" aria-controls="products-datatable" data-dt-idx="2" tabindex="0" className="page-link">2</a></li><li className="paginate_button page-item "><a href="#" aria-controls="products-datatable" data-dt-idx="3" tabindex="0" className="page-link">3</a></li><li className="paginate_button page-item next" id="products-datatable_next"><a href="#" aria-controls="products-datatable" data-dt-idx="4" tabindex="0" className="page-link"><i className="mdi mdi-chevron-right"></i></a></li></ul></div></div></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Category;