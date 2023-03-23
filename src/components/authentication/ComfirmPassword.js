import Style from "./comfirmPassword.module.css"
import Input from "../Tags/Input"

function ComfirmPassword({ handleClose }) {
    return(
        <>
            <div className={`${Style.comfirmPassword}`}>
                <div className={Style.modalOverlay} onClick={handleClose}></div>
                <div className={Style.modalComfirm}>
                    <div className={Style.comfirmForm}>
                        <form className={Style.comfirmForm_Input}>
                            <div className={Style.comfirmForm_Header}>
                                <h1>Comfirm Password</h1>
                            </div>
                            <div className="mb-5 mt-5">
                                <Input
                                label="Your current password"
                                className="form-control"
                                type="password"
                                // onSetState={(e) => {
                                //     setName(e.target.value);
                                // }}
                                />
                            </div>
                            <div className={`${Style.btnComfirm} d-flex justify-content-evenly`}>
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                    // onClick={}
                                    >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ComfirmPassword;