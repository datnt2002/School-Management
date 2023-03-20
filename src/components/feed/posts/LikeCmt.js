import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';

function LikeCmt({ likes, comments, handleActiveCm }) {
  return (
    <div className="my-1 d-flex">
      <div className="justify-content-between">
        <button
          className=""
        >
          <FontAwesomeIcon icon={faThumbsUp}/>
        </button>
        <span style={{ marginLeft:"5px" }}>12</span>
        {/* <button className=""> */}
          {/* <FontAwesomeIcon icon={faThumbsDown}/> */}
        {/* </button> */}
      </div>
      <div>
        <button onClick={handleActiveCm} className="btn btn-sm btn-link text-muted">
          Comment
        </button>
      </div>
    </div>
  );
}
export default LikeCmt;
