function Form() {
  return (
    <>
      <h3>Add Student</h3>
      <div className="form">
        <div>
          <label htmlFor="name">Name : </label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="marks">Marks : </label>
          <input type="number" name="marks" />
        </div>
        <button>Add</button>
      </div>
    </>
  );
}

export default Form;
