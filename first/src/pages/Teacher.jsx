import { useContext } from "react"
import UserContext from "../context/UserContext"

const Teacher = () => {
  const user = useContext(UserContext);
  return (
    <div>
        <h1>hiii {user} </h1>
      <p>manage all Teacher here </p>
    </div>
  )
}

export default Teacher
