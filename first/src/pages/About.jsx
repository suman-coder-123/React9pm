import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Train from "../assets/train.png"

const About = () => {
  return (
    <div>
        <Navbar />
         <div>
            <h1>this is about us page </h1>
            <img src={Train} alt="" />
         </div>
      <Footer />
    </div>
  )
}

export default About
