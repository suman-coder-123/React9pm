import { Link, useNavigate } from "react-router-dom"


const Home = () => {

  const navigate = useNavigate();


  function gotoabout() {
    navigate("/about");
  }
  return (
    <>
   
    <div className="main">
     <h1>Welcome to Van hang huwe</h1>

<button onClick={gotoabout}> Go TO About page </button>

<Link to="/addStudent"> Add Student  </Link>
    </div>
    
    </>
  )
}

export default Home
