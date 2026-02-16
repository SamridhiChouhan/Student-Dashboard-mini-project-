import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Header from "./header";
import Form from "./form";
import FilterButtons from "./FilterButtons";
import StudentList from "./StudentList";

function App() {
  return (
    <>
      <Header />
      <Form />
      <FilterButtons />
      <StudentList />
    </>
  );
}

export default App;
