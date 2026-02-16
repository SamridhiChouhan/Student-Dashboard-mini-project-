import "./StudentCard.css";

function StudentCard(props) {
  console.log(props);
  let student = props.data;
  let deleteFn = props.deleteFn;
  let id = student.id;
  console.log(props);
  return (
    <>
      <div className="card">
        <h1>{student.name}</h1>
        <hr />
        <p>Marks: {student.marks}</p>
        <p>
          Status:{" "}
          <span className={student.marks >= 34 ? "pass" : "fail"}>
            {student.marks >= 34 ? "Pass" : "Fail"}
          </span>
        </p>
        <hr />

        <button onClick={() => deleteFn(student.id)}>Delete</button>
      </div>
    </>
  );
}

export default StudentCard;
