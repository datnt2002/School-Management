function Profile({ imageSrc, userName, userDepartment, className, alt, height,status }) {
  // if(imageSrc === ""){
  //   const img = document.getElementsByTagName("img");
  //   console.log(img)
  //   img.classList.add("hidden")
  // }

  return (
    <div className="media">
      <img
        className={className} /* "d-flex align-self-start rounded mr-2" */
        src={imageSrc}
        alt={alt}
        height={height}
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
