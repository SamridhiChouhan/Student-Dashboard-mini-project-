function StudentCard(props) {
  console.log(props);
  let student = props.data;
  let deleteFn = props.deleteFn;
  // console.log(deleteFn);
  let id = student.id;
  console.log(props);
  return (
    <>
      <div className="card">
        <h1>{student.name}</h1>
        <p>Marks: {student.marks}</p>
        <p>Status: {student.marks >= 34 ? "Pass" : "Fail"}</p>
        <button onClick={() => deleteFn(student.id)}>Delete</button>
      </div>
    </>
  );
}

export default StudentCard;
