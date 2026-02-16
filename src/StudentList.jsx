import StudentCard from "./StudentCard";

function StudentList(props) {
  console.log(props);
  let students = props.data;
  return (
    <>
      {students.map((student, idx) => {
        return (
          <StudentCard
            data={student}
            key={student.id}
            deleteFn={props.delStudent}
          />
        );
      })}
    </>
  );
}

export default StudentList;
