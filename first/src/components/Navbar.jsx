import { useContext } from "react"
import { Link } from "react-router-dom"
import UserContext from "../context/UserContext"

const Navbar = () => {

  const user = useContext(UserContext);
  return (
    <div className="flex justify-between mx-10">
      <h1>Van Gang Tour</h1>
      <h2>{user}/</h2>

      {/* <div className="flex justify-center gap-4 ">
        <a href="/">Home </a>
        <a href="/about">About us</a>
        <a href="">Booking </a>
        <a href="">Login</a>
      </div> */}


      <div className="flex justify-between mx-10" >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact" >Contact</Link>
        <Link to="/dashboard" >Dashboard</Link>
      </div>

      <button className="bg-amber-200">Sign up </button>
    </div>
  )
}

export default Navbar
