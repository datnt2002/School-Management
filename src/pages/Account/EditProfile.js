import Style from "./editProfile.module.css"

function EditProfile() {
    return(
        <div className="editProfile">
            <div className="container-xl px-4 mt-4">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="card mb-4 mb-xl-0" style={{ boxShadow:"0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%)" }}>
                            <div className="card-header">Profile Picture</div>
                            <div className="card-body text-center">
                                <img alt="avatar" className={`${Style.img_account_profile} ${Style.rounded_circle} mb-2`} 
                                // src="http://bootdey.com/img/Content/avatar/avatar1.png !!!!
                                />
                                <div className="font-italic text-muted mt-4 mb-2">Upload new image</div>
                                <div className="fileUploadInput">
                                    <input type="file" 
                                        // onChange={(e) => setFirstClosure(e.target.value)}
                                    />
                                    <button>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="card mb-4" style={{ boxShadow:"0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%)" }}>
                            <div className={Style.card_header}>Account Details</div>
                            <div className={Style.card_body}>
                                <form>
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputUsername">Username (how your name will appear to other users on the site)</label>
                                        <input className={Style.form_control} id="inputUsername" type="text" placeholder="Enter your username" value="" />
                                    </div>
                                    <div className="row gx-3 mb-3">
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputNewPassword">New Password</label>
                                            <input className={Style.form_control} id="inputNewPassword" type="password" placeholder="Enter your first name" value="" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputComfirmNewPassword">Comfirm New Password</label>
                                            <input className={Style.form_control} id="inputComfirmNewPassword" type="password" placeholder="Enter your last name" value="" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputAddress">Address</label>
                                        <input className={Style.form_control} id="inputAddress" type="text" placeholder="Enter your location" value=""/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                                        <input className={Style.form_control} id="inputEmailAddress" type="email" placeholder="Enter your email address" value=""/>
                                    </div>
                                    <div className="row gx-3 mb-3">
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                                            <input className={Style.form_control} id="inputPhone" type="tel" placeholder="Enter your phone number" value=""/>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputBirthday">Birthday</label>
                                            <input className={Style.form_control} id="inputBirthday" type="date" name="birthday" placeholder="Enter your birthday" value=""/>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputCurrentPassword">Your Current Password</label>
                                        <input className={Style.form_control} id="inputCurrentPassword" type="password" placeholder="Enter your current password to edit your profile" value=""/>
                                    </div>
                                    <div className={`${Style.btnSave} mb-3`}>
                                        <button className="btn btn-primary" type="button">Save changes</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EditProfile;