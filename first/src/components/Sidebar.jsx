import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="w-30 h-full border-2 ">

        
        <ul>

            <li>
                <Link to="/" >Website</Link>
            </li>
            <li>
      <Link to="/dashboard">Home</Link>
      </li>
      <li>
        <Link to="/dashboard/student">Student </Link>
      </li>
      <li>
        <Link to="/dashboard/teacher">Teacher</Link>
      </li>
      </ul>
    </div>
  )
}

export default Sidebar
