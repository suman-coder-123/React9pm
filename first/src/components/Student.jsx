
// const Student = (props) => {
//   return (
//     <div>
//       <h2>Student Name : {props.name}</h2>
//       <h3>Course : {props.course}</h3>
//     </div>
//   )
// }

// export default Student




// const Student = ({name , course}) => {
//   return (
//     <div>
//       <h2>Student name : {name}</h2>
//       <h3>course : {course}</h3>
//     </div>
//   )
// }

// export default Student




const Student = ({name , age , isTrainer , skills}) => {
  return (
    <div className="border-2 w-40 py-7 px-3 ">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="font-bold">age : {age}</p>
      <p className="font-bold">Trainer : {isTrainer ? "yes" : "no"} </p>


      <h3 className="font-bold" >Skills : </h3>
      {skills.map((skill , index) => (
        <p key={index}> {skill}</p>
    ))}
    </div>
  ) 
}

export default Student


