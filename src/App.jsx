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
  let [filter, setFilter] = useState("all");

  function showAll() {
    setFilter("all");
  }

  function showTop() {
    setFilter("top");
  }

  let filteredStudents = student;

  if (filter === "top") {
    filteredStudents = student.filter((s) => Number(s.marks) >= 80);
  }

  if (filter === "fail") {
    filteredStudents = student.filter((s) => Number(s.marks) < 34);
  }
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
      <FilterButtons showAll={showAll} showTop={showTop} filter={filter} />
      <StudentList
        data={filteredStudents}
        delStudent={delStudent}
        filter={filter}
      />
    </>
  );
}

export default App;
