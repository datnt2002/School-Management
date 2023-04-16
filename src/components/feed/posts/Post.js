import React, { useState, useEffect, useContext } from "react";
import { server } from "../../../api/Api";
import Style from "../../../pages/NewsFeed/newsFeed.module.css";
import "./dropDown.css";
import StylePaginate from "../../Pagination/pagination.module.css";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

function Post({ dataIdea }) {
  const navigate = useNavigate();

  //paginate
  const [currenItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffSet, setItemOffSet] = useState(0);
  const itemPerPage = 10;
  useEffect(() => {
    const endOffSet = itemOffSet + itemPerPage;
    setCurrentItems(dataIdea.slice(itemOffSet, endOffSet));
    setPageCount(Math.ceil(dataIdea.length / itemPerPage));
  }, [itemOffSet, itemPerPage, dataIdea]);
  function handlePageClick(e) {
    const newOffSet = (e.selected * itemPerPage) % dataIdea.length;
    setItemOffSet(newOffSet);
  }

  const handleDetail = (id) => {
    console.log(id);
    navigate("/DetailIdea", { state: { ideaId: id } });
  };

  console.log(dataIdea);
  return (
    <>
      {currenItems.map((dataIdea) => {
        return (
          <div
            className={Style.news_post}
            key={dataIdea.ideaId}
            onClick={() => handleDetail(dataIdea.id)}
          >
            <div className="card-body">
              <div className={Style.card}>
                <div className={Style.media}>
                  <div className={Style.media_body}>
                    <img
                      className="mr-2 rounded"
                      src={server + dataIdea.avatar}
                      alt="placeholder"
                      height="50"
                    />
                    <div style={{ marginLeft: "10px" }}>
                      <h5 className="mt- mb-1">{dataIdea.userName}</h5>
                      <p className="mt- mb-1 font-18">
                        {dataIdea.departmentName}
                      </p>
                    </div>
                  </div>
                  <div>
                    <span>{dataIdea.viewed}</span>
                    <span> Views</span>
                  </div>
                </div>

                <hr />
                <div
                  className="font-16 text-dark my-3"
                  style={{ overflowWrap: "break-word" }}
                >
                  <h2 className="my-1">{dataIdea.name}</h2>
                </div>
                <div
                  className="font-16 text-dark my-3"
                  style={{ overflowWrap: "break-word" }}
                >
                  <p className="my-1">
                    {dataIdea.content.length > 150 ? (
                      <>
                        {dataIdea.content.substring(0, 150)}
                        <button> ...Read more</button>
                      </>
                    ) : (
                      dataIdea.content
                    )}
                  </p>
                </div>
                <div className="file-group"></div>

                <hr />
                <div className="d-flex justify-content-between">
                  <span>{dataIdea.vote} Votes</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={Style.pagination}
        pageLinkClassName={Style.page_num}
        previousLinkClassName={Style.page_num}
        nextLinkClassName={Style.page_num}
        activeClassName={Style.active}
        breakLinkClassName={Style.break_label}
      />
    </>
  );
}

export default Post;
