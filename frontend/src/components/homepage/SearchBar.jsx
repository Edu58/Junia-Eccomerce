import './SearchBar.scss'
import { BiUser } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ProductsContext from '../../context/products';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const { cartState, searchItemInStore } = useContext(ProductsContext)
    const { cart } = cartState

    const navigate = useNavigate()

    const searchFormHandler = (e) => {
        e.preventDefault()

        searchItemInStore(searchTerm)
        navigate('/search')
    }

    return (
        <div className="top-bar py-4">
            <div className="container">
                <Link to="/" className='text-decoration-none'>
                    <p className='fs-3 fw-bolder text-dark'>Junia</p>
                </Link>
                <div className="search">
                    <form className='d-flex' onSubmit={searchFormHandler}>
                        <input type="search" name="product" className='form-control' placeholder='search products' onChange={(e) => setSearchTerm(e.target.value)} required />
                        <button type='submit' className="btn text-light fw-bold ms-2">search</button>
                    </form>
                </div>

                <div className='account d-flex'>
                    <div>
                        <Link to="/cart">
                            <div className="d-flex align-items-center" role="button">
                                <BiUser size={25} />
                                <span className='ms-2'>Account</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/cart">
                            <div className="d-flex align-items-center ms-4" role="button">
                                <AiOutlineQuestionCircle size={25} />
                                <span className='ms-2'>Help</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/cart">
                            <div className="d-flex align-items-center ms-4" role="button">
                                <HiOutlineShoppingCart size={25} />
                                <span className=''>Cart</span>
                                <sup className='fs-6 badge bg-secondary'>
                                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}</sup>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar