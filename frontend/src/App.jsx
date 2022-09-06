import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/homepage/Homepage'
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart'
import SearchPage from './pages/searchPage/SearchPage'
import ByCategory from './pages/byCategory/ByCategory'
import Login from './pages/login/Login'
import WithoutNav from './utils/WithoutNav'
import WithNav from './utils/withNav'
import Signup from './pages/signup/Signup'

function App() {

  return (
    <div className='app-container'>
      <Routes>

        <Route element={<WithoutNav />}>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Route>

        <Route element={<WithNav />}>
          <Route index element={<Homepage />}></Route>
          <Route path='/product/:category/:id' element={<Product />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/search' element={<SearchPage />}></Route>
          <Route path='/:category' element={<ByCategory />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
