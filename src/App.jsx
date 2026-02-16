import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Header from "./header";
import Form from "./form";
import FilterButtons from "./FilterButtons";
import StudentList from "./StudentList";

function App() {
  let [student, setStudent] = useState([]);
  let [newStudent, setNewStudent] = useState({
    name: "",
    marks: "",
  });

  function handleChange(e) {
    let { name, value } = e.target;

    setNewStudent({
      ...newStudent,
      [name]: value,
    });
  }
  function createStudent() {
    setStudent([...student, { newStudent }]);
    setNewStudent({
      name: "",
      marks: "",
    });
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
      <StudentList data={student} />
    </>
  );
}

export default App;
