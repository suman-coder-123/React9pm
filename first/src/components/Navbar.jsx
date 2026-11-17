
const Navbar = () => {
  return (
    <div className="flex justify-between mx-10">
      <h1>Van Gang Tour</h1>

      <div className="flex justify-center gap-4 ">
        <a href="../pages/Home.jsx">Home </a>
        <a href="../pages/About.jsx">About us</a>
        <a href="">Booking </a>
        <a href="">Login</a>
      </div>

      <button className="bg-amber-200">Sign up </button>
    </div>
  )
}

export default Navbar
