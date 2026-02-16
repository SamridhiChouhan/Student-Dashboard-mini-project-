import StudentCard from "./StudentCard";
import "./StudentList.css";

function StudentList(props) {
  console.log(props);
  let students = props.data;
  return (
    <>
      <div className="list">
        {students.map((student, idx) => {
          return (
            <StudentCard
              data={student}
              key={student.id}
              deleteFn={props.delStudent}
            />
          );
        })}
      </div>
    </>
  );
}

export default StudentList;
