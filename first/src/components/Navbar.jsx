import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-between mx-10">
      <h1>Van Gang Tour</h1>

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
      </div>

      <button className="bg-amber-200">Sign up </button>
    </div>
  )
}

export default Navbar
