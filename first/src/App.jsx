import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import MainLayout from "./layouts/MainLayout"
import Student from "./pages/Student"
import DashboardLayout from "./layouts/DashboardLayout"
import Dashboard from "./pages/Dashboard"
import Teacher from "./pages/Teacher"


const App = () => {


  // const students = [
  //   {
  //     id : 1,
  //     name : "suman",
  //     age : 25,
  //     isTrainer : true,
  //     skills : ["html" , "css" , "js"]
  //   },
  //   {
  //     id : 2,
  //     name : "riya",
  //     age : 13,
  //     isTrainer : false,
  //     skills : ["html" , "java" , "js"]
  //   },
  //   {
  //     id : 3,
  //     name : "priya",
  //     age : 21,
  //     isTrainer : true,
  //     skills : ["node" , "mern" , "js"]
  //   },
  //   {
  //     id : 4,
  //     name : "ritu",
  //     age : 78,
  //     isTrainer : true,
  //     skills : ["python" , "react" , "js"]
  //   }
  // ]

  return (
    <div>
    
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    </Route> 

    <Route path="/dashboard" element={<DashboardLayout />} >
      <Route index element={<Dashboard />} />
      <Route path="student" element={<Student />} />
      <Route path="teacher" element={<Teacher />} />
    </Route> 


    </Routes>





    {/* <Student name="suman" course="mern stack"/>
    <Student name="riya" course="java"/> */}

{/* 
   {students.map((student) => (
    <Student 
    key={student.id}
    name = {student.name}
    age = {student.age}
    isTrainer={student.isTrainer}
    skills={student.skills}
    />
   ))} */}




    
    </div>
  )
}

export default App




