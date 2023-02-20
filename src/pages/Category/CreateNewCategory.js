import Input from "../../components/Tags/Input";

function CreateNewCategory() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Create New Category</h1>
        </div>
        <div className="card">
          <form>
            <Input
              label="Title"
              type="text"
              placeholder="Title"
            />
            <label>Category</label>
            <select name="cars" id="cars">
              <option value="1">Volvo</option>
              <option value="2">Saab</option>
              <option value="3">Mercedes</option>
              <option value="4">Audi</option>
            </select>
            <label>Closure</label>
            <small>First Closure Date</small>
            <input type="date"/>
            <small>Final Closure Date</small>
            <input type="date"/>
            <button>Submit</button>
            <button>Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateNewCategory;
