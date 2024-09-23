import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./NavBar"
import ProductCard from "./ProductCard"
import Home from "./Home"
import Products from "./Products"
import ProductPage from "./ProductPage"



function App() {

  return (
    <>


      <Router>

        <NavBar/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/product/:id" element={<ProductPage/>} />
          
        </Routes>

      </Router>
    </>
  )
}

export default App
