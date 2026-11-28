import { useContext } from "react"
import UserContext from "../context/UserContext"

const Dashboard = () => {

  const {user , login} = useContext(UserContext);
  return (
    <div>
      <h1>Dashboard Home </h1>
      {user.isloggedIn ? (
        <>
        <h2>welcome , {user.name}</h2>
        <p>your role is : {user.role}</p>
        </>
        ) :  (
          <>
          <p>please login first</p>
          <button onClick={login}>login</button>
          </>
        )
      }
    </div>
  )
}

export default Dashboard
