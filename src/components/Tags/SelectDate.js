import Style from "./selectDate.module.css";

function SelectDate({ value, onChange, readOnly}) {
    return(
        <>
            <input type="datetime-local"
                value={value}
                onChange={onChange}
                readOnly={readOnly}
            />
        </>
    );
}
export default SelectDate;