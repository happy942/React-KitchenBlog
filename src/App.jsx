import { useState } from 'react'
import Home from './Home';
import About from './Pages/About';
import Food from './Pages/Food';
import Footer from './Pages/Footer';
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />}> </Route>
      <Route path='/about' element={<About />}> </Route>
      <Route path='/food' element={<Food />}> </Route>
     </Routes>
  </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
