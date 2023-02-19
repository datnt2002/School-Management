function Profile({ imageSrc, userName, userDepartment }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="media">
          <img
            className="d-flex align-self-start rounded mr-2"
            src={imageSrc}
            alt="Dominic Keller"
            height="48"
          />
          <div className="media-body">
            <h5 className="mt-1 mb-0">{userName}</h5>
            <p className="mb-1 mt-1 text-muted">{userDepartment}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
