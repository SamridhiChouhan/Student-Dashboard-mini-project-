import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Header from "./header";
import Form from "./form";
import FilterButtons from "./FilterButtons";
import StudentList from "./StudentList";
import { v4 as uuidv4 } from "uuid";

function App() {
  let [student, setStudent] = useState([]);
  let [newStudent, setNewStudent] = useState({
    name: "",
    marks: "",
    id: uuidv4(),
  });

  function handleChange(e) {
    let { name, value } = e.target;

    setNewStudent({
      ...newStudent,
      [name]: value,
      id: uuidv4(),
    });
  }
  function createStudent() {
    setStudent([...student, newStudent]);
    setNewStudent({
      name: "",
      marks: "",
    });
  }

  function delStudent(id) {
    let newArr = student.filter((s) => s.id !== id);
    setStudent(newArr);
  }

  return (
    <>
      <Header />
      <Form
        handleChange={handleChange}
        data={newStudent}
        createStudent={createStudent}
      />
      <FilterButtons />
      <StudentList data={student} delStudent={delStudent} />
    </>
  );
}

export default App;
