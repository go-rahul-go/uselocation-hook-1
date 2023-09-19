import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import About from "./About"
import Nav from "./Nav"
import Contact from "./Contact.jsx"
import "./style.css"
function App() {
  return(
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" index Component={Home}/>
      <Route path="/about" Component={About}/>
      <Route path="/contact" Component={Contact}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
