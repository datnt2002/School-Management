

function Profile({ imageSrc, userName, userDepartment, className, alt, height,status }) {
  return (
    <div className="media">
      <img
        className={className} /* "d-flex align-self-start rounded mr-2" */
        src={imageSrc}
        alt={alt}
        height={height}
        hidden={!imageSrc ? "hidden" : ""}
      />
      <div className="media-body">
        <h5 className="mt-1 mb-0">{userName}</h5>
        <p className="mb-1 mt-1 text-muted">{userDepartment}</p>
        <p className="text-muted"><small>{status}</small></p>
      </div>
    </div>
  );
}

export default Profile;
