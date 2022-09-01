import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import SearchBar from './components/homepage/SearchBar'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
import Product from './pages/Product'
import Cart from './pages/Cart'

function App() {

  return (
    <>
      <Navbar />
      <SearchBar />
      <Routes>

        <Route index element={<Homepage />}></Route>
        <Route path='/product/:category/:id' element={<Product />}></Route>
        <Route path='/cart' element={<Cart />}></Route>

      </Routes>
      <Footer />
    </>

  )
}

export default App
