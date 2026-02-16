function Form(props) {
  // console.log(props);
  return (
    <>
      <h3>Add Student</h3>
      <div className="form">
        <div>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="name"
            onChange={props.handleChange}
            value={props.data.name}
          />
        </div>
        <div>
          <label htmlFor="marks">Marks : </label>
          <input
            type="number"
            name="marks"
            onChange={props.handleChange}
            value={props.data.marks}
          />
        </div>
        <button onClick={props.createStudent}>Add</button>
      </div>
    </>
  );
}

export default Form;
