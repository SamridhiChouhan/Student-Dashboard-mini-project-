import StudentCard from "./StudentCard";

function StudentList(props) {
  // consstudents.data);
  let students = props.data;
  return (
    <>
      {students.map((student, idx) => {
        return <StudentCard data={student} key={idx} />;
      })}
    </>
  );
}

export default StudentList;
