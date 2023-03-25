import Style from "./pagination.module.css"

function Pagination({ dataPerPage, totalData, paginate, currentPage }){
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalData / dataPerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <nav className={`${Style.nav_pagination}`}>
            <ul className={Style.pagination}>
                {pageNumbers.map(number => {
                    return(
                        <li onClick={() => paginate(number)} key={number} className={`${Style.page_item} ${currentPage === number ? "active" : null}`}>
                            {console.log(currentPage)}
                                {number}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
export default Pagination;