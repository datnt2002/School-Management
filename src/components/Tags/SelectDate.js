import Style from "./selectDate.module.css";

function SelectDate({ value, onChange}) {
    return(
        <>
            <input type="datetime-local"
                value={value}
                onChange={onChange}
            />
        </>
    );
}
export default SelectDate;