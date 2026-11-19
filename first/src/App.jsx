import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import MainLayout from "./layouts/MainLayout"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <div>
    
    <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

    </Route>   
    </Routes>


    
    </div>
  )
}

export default App
