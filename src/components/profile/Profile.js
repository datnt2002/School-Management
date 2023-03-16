function Profile({ imageSrc, userName, userDepartment }) {
  return (
    <div className="media">
      <img
        className="mr-2 rounded"
        src={imageSrc}
        alt="placeholder"
        height="32"
        hidden={!imageSrc ? "hidden" : ""}
      />
      <div className="media-body">
        <h5 className="mt-1 mb-0">{userName}</h5>
        <p className="mb-1 mt-1">{userDepartment}</p>
      </div>
    </div>
  );
}

export default Profile;
