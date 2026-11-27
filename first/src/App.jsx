// import { Route, Routes } from "react-router-dom"
// import Home from "./pages/Home"
// import About from "./pages/About"
// import Contact from "./pages/Contact"
// import MainLayout from "./layouts/MainLayout"
// import Student from "./pages/Student"
// import DashboardLayout from "./layouts/DashboardLayout"
// import Dashboard from "./pages/Dashboard"
// import Teacher from "./pages/Teacher"
// import AddStudent from "./components/AddStudent"





// const App = () => {


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

  // return (
  //   <div>
    
  //   <Routes>
  //     <Route path="/" element={<MainLayout />}>
  //       <Route index element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/contact" element={<Contact />} />
  //       <Route path="/addStudent" element={<AddStudent />} />
  //   </Route> 

  //   <Route path="/dashboard" element={<DashboardLayout />} >
  //     <Route index element={<Dashboard />} />
  //     <Route path="student" element={<Student />} />
  //     <Route path="teacher" element={<Teacher />} />
  //   </Route> 


  //   </Routes>





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




    
//     </div>
//   )
// }

// export default App








// const App = () => {

//   let count = 1;

//   function increase() {
//     count++;
//     console.log(count);
//   }

//   return (
//     <div>
//       <h1>{count}</h1>  
//       <button className="px-3 py-2 border-2" onClick={increase} >increase</button>
//     </div>
//   )
// }

// export default App



// import { useState } from "react"


// const App = () => {

//   const [count , setCount] = useState(0);


//   function increase () {
//     setCount(count+1);
//   }

//   function decrease() {
//     setCount(count-1);
//   }
 
//   function reset(){
//     setCount(0);
//   }
//   return (
//     <div>
//       <h1>Counter : {count}</h1>
//       <button onClick={increase}>Increase </button>
//       <button onClick={decrease}>decrease </button>
//       <button onClick={reset}>Reset</button>
//     </div>  
//   )
// }

// export default App





// const App = () => {
//   const [ showPassword , setShowPassword] = useState(false);
//   return (
//     <div>
//       <input type={showPassword ? "text" : "password"} placeholder="enter your password" />

//       <button  onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}</button>
//     </div>
//   )
// }

// export default App  




// const App = () => {
 
//   const [ darkMode , setDarkMode] = useState(false);

//   function toggleMode () {
//     setDarkMode(pre => !pre);
//   }


//   return (
//     <div style={{
//       backgroundColor : darkMode ? "#121212" : "#ffffff" , 
//       color : darkMode ? "#ffffff" : "#000000",
//       minHeight: "100vh",
//       padding : "30px"  
//        }}>
//       <h1>{darkMode ? "Dark mode " : "Light Mode "}</h1>
//       <p>welcome to react application</p>
//       <button onClick={toggleMode}>{darkMode ? "Switch to light mode" : "Switch to dark mode "}</button>
//     </div>
//   )
// }

// export default App



// import { useEffect, useState } from "react"


// const App = () => {


  // useEffect (() => {
  //   document.title = "React App";
  // } , []);

  // useEffect(() => {
  //   console.log("component rendered");
  // } );

  // useEffect(() => {
  //   console.log("component mounted");
  // }, []);


//   const [count , setCount] = useState(0);

//   useEffect(() => {
//     console.log(count);
//   },[count]);
//   return (
//     <div>
//       <h1>hello react </h1>

//       <h1>Count : {count}</h1>
//       <button onClick={() => setCount(count+1)}>Increase</button>
//     </div>
//   )
// }

// export default App



// Date => it is keyword used to print the date  =>  time => toLocaleTimeString => time 
import { useEffect, useState } from "react"


const App = () => {


  const [ time , setTime ] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    } , 1000);

    return () => {
      clearInterval(timer);
    }
  } , []);
  return (
    
    <div>
      <h1>Digital Clock</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  )
}

export default App
