import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import SearchBar from './components/homepage/SearchBar'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
import Product from './pages/Product'
import Cart from './pages/Cart'
import SearchPage from './pages/SearchPage'
import ByCategory from './pages/ByCategory'

function App() {

  return (
    <div className='app-container'>
      <Navbar />
      <SearchBar />
      <Routes>

        <Route index element={<Homepage />}></Route>
        <Route path='/product/:category/:id' element={<Product />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/search' element={<SearchPage />}></Route>
        <Route path='/:category' element={<ByCategory />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
