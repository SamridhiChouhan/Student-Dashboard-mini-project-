function StudentCard(props) {
  let student = props.data.newStudent;
  return (
    <>
      <div className="card">
        <h1>{student.name}</h1>
        <p>Marks: {student.marks}</p>
        <p>Status: {student.marks >= 34 ? "Pass" : "Fail"}</p>
        <button>Delete</button>
      </div>
    </>
  );
}

export default StudentCard;
