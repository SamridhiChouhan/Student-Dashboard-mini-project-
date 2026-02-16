import StudentCard from "./StudentCard";

function StudentList(props) {
  // consstudents.data);
  let students = props.data;
  // console.log(props.delStudent);
  // console.log(students);
  return (
    <>
      {students.map((student, idx) => {
        return (
          <StudentCard data={student} key={idx} deleteFn={props.delStudent} />
        );
      })}
    </>
  );
}

export default StudentList;
