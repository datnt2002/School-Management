import Content from "./Content";
import Input from "../../Tags/Input";
import LikeCmt from "./LikeCmt";
import Profile from "../../profile/Profile";

function Post() {
  return (
    <div className="col-lg-8 news-post">
      <div className="card-body pb-1">
        <Profile />
        <hr />

        <Content content="Leave one wolf alive and the sheep are never safe. When people ask you what happened here, tell them the North remembers. Tell them winter came for House Frey." />

        <hr />

        <LikeCmt likes="2k" comments="200" />

        <hr />

        <div className="mt-3">
          <div className="media">
            <img
              className="mr-2 rounded"
              src="assets/images/users/avatar-9.jpg"
              alt="Generic placeholder image"
              height="32"
            />
            <div className="media-body">
              <h5 className="m-0">Sansa Stark </h5>
              <p className="text-muted mb-0">
                <small>2 mins ago</small>
              </p>

              <p className="my-1">
                This is awesome! Proud of sis :) Waiting for you to come back to
                winterfall
              </p>

              <div>
                <a
                  href="javascript: void(0);"
                  className="btn btn-sm btn-link text-muted p-0"
                >
                  <i className="uil uil-heart mr-1"></i> Like
                </a>
                <a
                  href="javascript: void(0);"
                  className="btn btn-sm btn-link text-muted p-0 pl-2"
                >
                  <i className="uil uil-comments-alt mr-1"></i> Reply
                </a>
              </div>

              <div className="media mt-3">
                <img
                  className="mr-2 rounded"
                  src="assets/images/users/avatar-8.jpg"
                  alt="Generic placeholder image"
                  height="32"
                />
                <div className="media-body">
                  <h5 className="m-0">Cersei Lannister </h5>
                  <p className="text-muted mb-0">
                    <small>1 min ago</small>
                  </p>

                  <p className="my-1">
                    I swear! She won't be able to reach to winterfall
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="media mb-2">
            <Profile />
            <div className="media-body">
              <Input
                type="text"
                className="form-control border-0 form-control-sm"
                placeholder="Write a comment"
              ></Input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
